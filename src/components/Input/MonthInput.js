import addMonths from 'date-fns/addMonths';
import addYears from 'date-fns/addYears';
import format from 'date-fns/format';
import isSameDay from 'date-fns/isSameDay';
import isValid from 'date-fns/isValid';
import parse from 'date-fns/parse';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import ButtonGroup from '../Button/ButtonGroup';
import Calendar from '../Calendar/MonthCalendar';
import Dropdown from '../Dropdown/Dropdown';
import DropdownMenu from '../Dropdown/DropdownMenu';
import DropdownToggle from '../Dropdown/DropdownToggle';
import Icon from '../Icon/Icon';
import InputGroup from '../InputGroup/InputGroup';

// This is basically same as DateInput - maybe consider Dropdown+Input that encapsulates focus/blur/dropdown behavior?

/**
 * Given a defaultValue, return the corresponding calendar date and input string value:
 *
 * | defaultValue   | date  | string         |
 * |----------------|-------|----------------|
 * | null,          | today | ''             |
 * | Date           | Date  | 'MMM yyyy'     |
 * | 'MMM yyyy'     | Date  | 'MMM yyyy'     |
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

export default class MonthInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dateVisible: PropTypes.func,
    dateFormat: PropTypes.string,
    id: PropTypes.string,
    monthFormat: PropTypes.string,
    yearFormat: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    disabled: PropTypes.bool,
    footer: PropTypes.node,
    header: PropTypes.node,
    keyboard: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    parse: PropTypes.func,
    positionFixed: PropTypes.bool,
    showOnFocus: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    // TODO allow custom header/footer, header & day format?
  };

  static defaultProps = {
    className: '',
    dateFormat: 'MMM yyyy',
    dateVisible: () => true,
    disabled: false,
    keyboard: true,
    monthFormat: 'MMM',
    yearFormat: 'yyyy',
    onBlur: () => {},
    onChange: () => {},
    parse: (value, dateFormat) => parse(value, dateFormat, new Date()),
    showOnFocus: true,
  };

  constructor(props) {
    super(props);

    let value = props.defaultValue || '';
    if (props.defaultValue instanceof Date) {
      value = format(value, props.dateFormat);
    }

    this.state = {
      open: false,
      value,
    };
  }

  onChange = (event) => {
    const value = event.target.value;
    this.setState({
      value,
    });
    this.parseInput(value);
  };

  onSelect = (newDate) => {
    this.setDate(newDate);
    this.close();
  };

  onKeyDown = (event) => {
    // Ignore arrows if closed, disabled, or modifiers are down:
    const allowArrows =
      this.state.open &&
      this.props.keyboard &&
      !(event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);

    switch (event.keyCode) {
      case 9: // TAB
      case 13: // Enter
      case 27: // Esc
        this.setState({ open: false });
        break;
      case 37: // Left
        if (allowArrows) {
          this.setDate(addMonths(this.getCurrentDate(), -1));
        }
        break;
      case 38: // Up
        if (allowArrows) {
          this.setDate(addYears(this.getCurrentDate(), -1));
        }
        break;
      case 39: // Right
        if (allowArrows) {
          this.setDate(addMonths(this.getCurrentDate(), 1));
        }
        break;
      case 40: // Down
        if (allowArrows) {
          this.setDate(addYears(this.getCurrentDate(), 1));
        }
        break;
      default:
    }

    return true;
  };

  setDate = (date) => {
    this.setState({
      value: format(date, this.props.dateFormat),
    });
    this.props.onChange(date, true);
  };

  getCurrentValue = () => {
    if (this.props.value !== undefined) {
      if (this.props.value instanceof Date) {
        return format(this.props.value, this.props.dateFormat);
      }
      return this.props.value;
    }
    return this.state.value;
  };

  getCurrentDate = () =>
    parseValue(
      this.props.value !== undefined ? this.props.value : this.state.value,
      this.props.dateFormat,
      this.props.parse
    );

  parseInput = (value) => {
    const date = this.props.parse(value, this.props.dateFormat);

    if (date && isValid(date)) {
      this.props.onChange(date, true);
    } else {
      this.props.onChange(value, false);
    }
  };

  close = () => this.setState({ open: false });

  nextMonth = () => this.setDate(addMonths(this.getCurrentDate(), 1));

  nextYear = () => this.setDate(addYears(this.getCurrentDate(), 1));

  prevMonth = () => this.setDate(addMonths(this.getCurrentDate(), -1));

  prevYear = () => this.setDate(addYears(this.getCurrentDate(), -1));

  show = () => this.setState({ open: true });

  today = () => {
    this.setDate(new Date());
    this.close();
  };

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
    }
  };

  onBlur = (e) => {
    this.props.onBlur(e);

    const parsedDate = this.props.parse(this.inputEl.value, this.props.dateFormat);
    if (parsedDate && isValid(parsedDate)) {
      this.inputEl.value = format(parsedDate, this.props.dateFormat);
    }
  };

  componentDidMount() {
    this.setInputValue();
  }

  componentDidUpdate() {
    this.setInputValue();
  }

  render() {
    const {
      className,
      dateVisible,
      disabled,
      footer,
      header,
      id,
      monthFormat,
      yearFormat,
      positionFixed,
      showOnFocus,
    } = this.props;
    const { open } = this.state;
    const date = this.getCurrentDate();
    const dropdownProps = open ? { positionFixed } : {};

    // <DropdownToggle tag="div" disabled> is to wrap the input in a container for positioning dropdown/up, without breaking showOnFocus
    // TODO extract a DropdownInput component that can encapsulate the defaultValue/value controlled/uncontrolled behavior.
    return (
      <div>
        <Dropdown isOpen={!disabled && open} toggle={this.toggle}>
          <DropdownToggle tag="div" disabled>
            <InputGroup className={className}>
              <input
                className="form-control"
                id={id}
                ref={(el) => {
                  this.inputEl = el;
                }}
                type="text"
                onBlur={this.onBlur}
                onChange={this.onChange}
                onClick={showOnFocus && this.show}
                onFocus={showOnFocus && this.show}
                onKeyDown={this.onKeyDown}
                disabled={disabled}
              />
              <Button
                onClick={this.toggle}
                className="px-2"
                disabled={disabled}
                active={open}
                type="button"
                tabIndex={-1}
              >
                <Icon name="calendar-o" fixedWidth />
                <span className="visually-hidden">Open Calendar</span>
              </Button>
            </InputGroup>
          </DropdownToggle>

          <DropdownMenu
            className="p-0"
            onKeyDown={this.onKeyDown}
            style={{ minWidth: '19rem' }}
            {...dropdownProps}
          >
            {header || (
              <header className="d-flex py-2">
                <ButtonGroup size="sm">
                  <Button className="p-2 js-prev-year" color="link" onClick={() => this.prevYear()}>
                    <Icon name="angle-double-left" fixedWidth />
                    <span className="visually-hidden">Previous Year</span>
                  </Button>
                  <Button
                    className="p-2 js-prev-month"
                    color="link"
                    onClick={() => this.prevMonth()}
                  >
                    <Icon name="angle-left" fixedWidth />
                    <span className="visually-hidden">Previous Month</span>
                  </Button>
                </ButtonGroup>

                <span className="m-auto">{format(date, 'MMMM yyyy')}</span>

                <ButtonGroup size="sm">
                  <Button className="js-next-month" color="link" onClick={() => this.nextMonth()}>
                    <Icon name="angle-right" fixedWidth />
                    <span className="visually-hidden">Next Month</span>
                  </Button>
                  <Button className="js-next-year" color="link" onClick={() => this.nextYear()}>
                    <Icon name="angle-double-right" fixedWidth />
                    <span className="visually-hidden">Next Year</span>
                  </Button>
                </ButtonGroup>
              </header>
            )}

            <Calendar
              date={date}
              dateVisible={dateVisible}
              monthFormat={monthFormat}
              yearFormat={yearFormat}
              onSelect={this.onSelect}
              className="m-0"
            />

            {footer || (
              <footer className="text-center pb-2 pt-1">
                <div>
                  <Button onClick={this.today} className="me-2">
                    Today
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
