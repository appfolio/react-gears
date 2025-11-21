import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addYears from 'date-fns/add_years';
import format from 'date-fns/format';
import isSameDay from 'date-fns/is_same_day';
import isValid from 'date-fns/is_valid';
import enLocale from 'date-fns/locale/en';
import startOfToday from 'date-fns/start_of_today';
import deprecated from 'deprecated-prop-type';
import Fecha from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import Calendar from '../Calendar/Calendar';
import Dropdown from '../Dropdown/Dropdown';
import DropdownMenu from '../Dropdown/DropdownMenu';
import DropdownToggle from '../Dropdown/DropdownToggle';
import Icon from '../Icon/Icon';
import InputGroup from '../InputGroup/InputGroup';

const { parse: dateParser } = Fecha;

/**
 * Given a defaultValue, return the corresponding calendar date and input string value:
 *
 * | defaultValue   | date  | string         |
 * |----------------|-------|----------------|
 * | null,          | today | ''             |
 * | Date           | Date  | 'M/D/YYYY'     |
 * | 'M/D/YYYY'     | Date  | 'M/D/YYYY'     |
 * | invalid string | today | invalid string |
 */
function parseValue(defaultValue, dateFormat, parseDate) {
  let date;

  if (defaultValue) {
    if (defaultValue instanceof Date) {
      date = defaultValue;
    } else {
      date = parseDate(defaultValue, dateFormat);
      try {
        if (!isValid(date)) {
          date = new Date();
        }
      } catch (e) {
        date = new Date();
      }
    }
  } else {
    date = new Date();
  }

  return date;
}

export default class DateInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dateEnabled: PropTypes.func,
    dateVisible: PropTypes.func,
    dateFormat: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    initialCalendarDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    direction: PropTypes.string,
    disabled: PropTypes.bool,
    footer: deprecated(PropTypes.node, 'Use renderFooter instead.'),
    header: deprecated(PropTypes.node, 'Use renderHeader insread.'),
    renderFooter: PropTypes.func,
    renderHeader: PropTypes.func,
    id: PropTypes.string,
    keyboard: PropTypes.bool,
    locale: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    parse: PropTypes.func,
    positionFixed: PropTypes.bool,
    showOnFocus: PropTypes.bool,
    state: PropTypes.any,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    container: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  };

  static defaultProps = {
    className: '',
    dateFormat: 'M/D/YYYY',
    dateEnabled: () => true,
    dateVisible: () => true,
    disabled: false,
    keyboard: true,
    locale: enLocale,
    onBlur: () => {},
    onChange: () => {},
    parse: (value, dateFormat) => dateParser(value, dateFormat),
    renderHeader: () => {},
    renderFooter: () => {},
    showOnFocus: true,
  };

  constructor(props) {
    super(props);

    let value = props.defaultValue || '';
    if (props.defaultValue instanceof Date) {
      value = format(value, props.dateFormat, { locale: props.locale });
    }

    this.state = {
      open: false,
      value,
    };
  }

  onChange = (value) => {
    this.setState({
      value,
    });
    this.parseInput(value);
  };

  onSelect = (newDate) => this.setDate(newDate, true);

  onKeyDown = (event) => {
    // Ignore arrows if closed, disabled, or modifiers are down:
    const allowArrows =
      this.state.open &&
      this.props.keyboard &&
      !(event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);

    switch (event.keyCode) {
      case 9: // TAB
        this.setState({ open: false });
        break;
      case 13: // Enter
        if (this.state.open) {
          // To avoid submitting the form if DateInput is contained in a form
          event.preventDefault();
          this.setState({ open: false });
        }
        break;
      case 27: // Esc
        if (this.state.open) {
          // To avoid parent elements handling the ESC key (like modals closing)
          event.stopPropagation();
          this.setState({ open: false });
        }
        break;
      case 37: // Left
        if (allowArrows) {
          this.setDate(addDays(this.getCurrentDate(), -1));
        }
        break;
      case 38: // Up
        if (allowArrows) {
          this.setDate(addWeeks(this.getCurrentDate(), -1));
        }
        break;
      case 39: // Right
        if (allowArrows) {
          this.setDate(addDays(this.getCurrentDate(), 1));
        }
        break;
      case 40: // Down
        if (allowArrows) {
          this.setDate(addWeeks(this.getCurrentDate(), 1));
        }
        break;
      default:
    }

    return true;
  };

  setDate = (date, close = false) => {
    const newState = close
      ? {
          value: format(date, this.props.dateFormat, { locale: this.props.locale }),
          open: false,
        }
      : {
          value: format(date, this.props.dateFormat, { locale: this.props.locale }),
        };
    this.setState(newState, () => {
      this.inputEl.setAttribute('value', newState.value);
      this.props.onChange(date, true);
    });
  };

  getCurrentValue = () => {
    if (this.props.value !== undefined) {
      if (this.props.value instanceof Date) {
        return format(this.props.value, this.props.dateFormat, { locale: this.props.locale });
      }
      return this.props.value;
    }
    return this.state.value;
  };

  getCurrentDate = () => {
    // If value prop is provided and not empty, use it
    // Otherwise, use state.value if available, or fall back to initialCalendarDate
    const valueToUse =
      this.props.value !== undefined && this.props.value !== ''
        ? this.props.value
        : this.state.value || this.props.initialCalendarDate || '';
    return parseValue(valueToUse, this.props.dateFormat, this.props.parse);
  };

  parseInput = (value) => {
    const date = this.props.parse(value, this.props.dateFormat);

    if (date) {
      this.props.onChange(date, true);
    } else {
      this.props.onChange(value, false);
    }
    this.inputEl.setAttribute('value', value);
  };

  clear = () => this.onChange('');

  close = () => this.setState({ open: false });

  nextMonth = () => this.setDate(addMonths(this.getCurrentDate(), 1));

  nextYear = () => this.setDate(addYears(this.getCurrentDate(), 1));

  prevMonth = () => this.setDate(addMonths(this.getCurrentDate(), -1));

  prevYear = () => this.setDate(addYears(this.getCurrentDate(), -1));

  show = () => this.setState({ open: true });

  today = () => this.setDate(startOfToday(), true);

  toggle = () => (this.state.open ? this.close() : this.show());

  setInputValue = () => {
    if (!this.inputEl) {
      return;
    }
    const currentValue = this.getCurrentValue();
    const inputValue = this.inputEl.value;
    const currentValueAsDate =
      currentValue && this.props.parse(currentValue, this.props.dateFormat);
    const inputValueAsDate = this.props.parse(inputValue || '', this.props.dateFormat);
    const isSame =
      (currentValueAsDate && inputValueAsDate && isSameDay(currentValueAsDate, inputValueAsDate)) ||
      inputValue === currentValue;

    if (!isSame) {
      this.inputEl.value = currentValue;
      this.inputEl.setAttribute('value', currentValue);
    }
  };

  onBlur = (e) => {
    this.props.onBlur(e);

    const parsedDate = this.props.parse(this.inputEl.value, this.props.dateFormat);
    if (parsedDate) {
      const value = format(parsedDate, this.props.dateFormat, { locale: this.props.locale });
      this.inputEl.value = value;
      this.inputEl.setAttribute('value', value);
    }
  };

  /* eslint-disable-next-line react/no-unused-class-component-methods -- Address this when converting to functional component */
  focus() {
    this.inputEl.focus();
  }

  componentDidMount() {
    this.setInputValue();
  }

  componentDidUpdate(prevProps, prevState) {
    this.setInputValue();
    if (this.props.onClose && this.state.open !== prevState.open && !this.state.open) {
      const value = this.props.value !== undefined ? this.props.value : this.state.value;
      const date = this.props.parse(value, this.props.dateFormat);

      if (date) {
        this.props.onClose(date, true);
      } else {
        this.props.onClose(value, false);
      }
    }
  }

  render() {
    /* eslint-disable @typescript-eslint/no-unused-vars -- This should go away when converted to function component */
    const {
      className,
      dateEnabled,
      dateVisible,
      direction,
      disabled,
      footer,
      header,
      renderFooter,
      renderHeader,
      id,
      showOnFocus,
      dateFormat,
      defaultValue,
      keyboard,
      locale,
      onBlur,
      onChange,
      parse,
      positionFixed,
      value,
      state,
      container,
      initialCalendarDate,
      ...props
    } = this.props;
    /* eslint-enable @typescript-eslint/no-unused-vars */
    const { open } = this.state;
    const date = this.getCurrentDate();
    const dropdownProps = open && positionFixed ? { strategy: 'fixed' } : {};

    // <DropdownToggle tag="div" disabled> is to wrap the input in a container for positioning dropdown/up, without breaking showOnFocus
    // TODO extract a DropdownInput component that can encapsulate the defaultValue/value controlled/uncontrolled behavior.
    return (
      <div>
        <Dropdown direction={direction} isOpen={!disabled && open} toggle={this.toggle}>
          <DropdownToggle tag="div" disabled>
            <InputGroup className={className}>
              <input
                id={id}
                className="form-control"
                data-testid="react-gears-dateinput-inputgroup-input"
                ref={(el) => {
                  this.inputEl = el;
                }}
                type="text"
                onBlur={this.onBlur}
                onChange={(e) => this.onChange(e.target.value)}
                onClick={showOnFocus ? this.show : undefined}
                onFocus={showOnFocus ? this.show : undefined}
                onKeyDown={this.onKeyDown}
                disabled={disabled}
                {...props}
              />
              <Button
                className="px-2"
                data-testid="react-gears-dateinput-inputgroup-button"
                disabled={disabled}
                active={open}
                type="button"
                tabIndex={-1}
                onClick={this.toggle}
              >
                <Icon name="calendar" iconStyle="regular" fixedWidth />
                <span className="visually-hidden">Open Calendar</span>
              </Button>
            </InputGroup>
          </DropdownToggle>
          <DropdownMenu
            className="p-0"
            onKeyDown={this.onKeyDown}
            container={container}
            {...dropdownProps}
          >
            {renderHeader(this.prevMonth, this.nextMonth, this.prevYear, this.nextYear) || header || (
              <header className="d-flex py-2">
                <ButtonGroup size="sm">
                  <Button
                    className="js-prev-year"
                    color="link"
                    data-testid="react-gears-dateinput-dropdownmenu-button-prev-year"
                    onClick={() => this.prevYear()}
                  >
                    <Icon name="angle-double-left" fixedWidth />
                    <span className="visually-hidden">Previous Year</span>
                  </Button>
                  <Button
                    className="js-prev-month"
                    color="link"
                    data-testid="react-gears-dateinput-dropdownmenu-button-prev-month"
                    onClick={() => this.prevMonth()}
                  >
                    <Icon name="angle-left" fixedWidth />
                    <span className="visually-hidden">Previous Month</span>
                  </Button>
                </ButtonGroup>

                <span className="js-date-header m-auto">
                  {format(date, 'MMMM YYYY', { locale })}
                </span>

                <ButtonGroup size="sm">
                  <Button
                    className="js-next-month"
                    color="link"
                    data-testid="react-gears-dateinput-dropdownmenu-button-next-month"
                    onClick={() => this.nextMonth()}
                  >
                    <Icon name="angle-right" fixedWidth />
                    <span className="visually-hidden">Next Month</span>
                  </Button>
                  <Button
                    className="js-next-year"
                    color="link"
                    data-testid="react-gears-dateinput-dropdownmenu-button-next-year"
                    onClick={() => this.nextYear()}
                  >
                    <Icon name="angle-double-right" fixedWidth />
                    <span className="visually-hidden">Next Year</span>
                  </Button>
                </ButtonGroup>
              </header>
            )}

            <Calendar
              date={date}
              data-testid="react-gears-dateinput-dropdownmenu-calendar"
              dateEnabled={dateEnabled}
              dateVisible={dateVisible}
              locale={locale}
              onSelect={this.onSelect}
              className="m-0"
              style={{ minWidth: '19rem' }}
            />

            {renderFooter(this.today, this.clear) || footer || (
              <footer className="text-center pb-2 pt-1">
                <div>
                  <Button
                    onClick={this.today}
                    className="me-2"
                    data-testid="react-gears-dateinput-footer-button-today"
                  >
                    Today
                  </Button>
                  <Button
                    onClick={this.clear}
                    className="me-2"
                    data-testid="react-gears-dateinput-footer-button-clear"
                  >
                    Clear
                  </Button>
                </div>
              </footer>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
