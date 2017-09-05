import PropTypes from 'prop-types';
import React from 'react';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addYears from 'date-fns/add_years';
import isSameDay from 'date-fns/is_same_day';
import isValid from 'date-fns/is_valid';
import Fecha from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import format from 'date-fns/format';
import Icon from './Icon';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Calendar from './Calendar';
import Dropdown from './Dropdown';
import DropdownMenu from './DropdownMenu';
import InputGroupButton from './InputGroupButton';
import InputGroup from './InputGroup';

const { parse } = Fecha;

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
function parseValue(defaultValue, dateFormat) {
  let date;

  if (defaultValue) {
    if (defaultValue instanceof Date) {
      date = defaultValue;
    } else {
      date = parse(defaultValue, dateFormat);
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
    dateVisible: PropTypes.func,
    dateFormat: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    disabled: PropTypes.bool,
    header: PropTypes.node,
    footer: PropTypes.node,
    keyboard: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    showOnFocus: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ])
    // TODO allow custom header/footer, header & day format?
  }

  static defaultProps = {
    className: '',
    dateVisible: () => true,
    dateFormat: 'M/D/YYYY',
    keyboard: true,
    onBlur: () => {},
    onChange: () => {},
    showOnFocus: true,
    disabled: false
  }

  constructor(props) {
    super(props);

    let value = props.defaultValue || '';
    if (props.defaultValue instanceof Date) {
      value = format(value, props.dateFormat);
    }

    this.state = {
      open: false,
      value
    };
  }

  onChange = event => {
    const value = event.target.value;
    this.setState({
      value
    });
    this.parseInput(value);
  }

  onSelect = newDate => {
    this.setDate(newDate);
    this.close();
  };

  onKeyDown = event => {
    // Ignore arrows if closed, disabled, or modifiers are down:
    const allowArrows = this.state.open &&
                        this.props.keyboard &&
                        !(event.altKey || event.ctrlKey || event.metaKey || event.shiftKey);

    switch (event.keyCode) {
      case 9: // TAB
      case 13: // Enter
      case 27: // Esc
        this.setState({ open: false });
        break;
      case 37: // Left
        if (allowArrows) this.setDate(addDays(this.getCurrentDate(), -1));
        break;
      case 38: // Up
        if (allowArrows) this.setDate(addWeeks(this.getCurrentDate(), -1));
        break;
      case 39: // Right
        if (allowArrows) this.setDate(addDays(this.getCurrentDate(), 1));
        break;
      case 40: // Down
        if (allowArrows) this.setDate(addWeeks(this.getCurrentDate(), 1));
        break;
      default:
    }

    return true;
  };

  setDate = date => {
    this.setState({
      value: format(date, this.props.dateFormat)
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

  getCurrentDate = () => parseValue(this.props.value !== undefined ? this.props.value : this.state.value, this.props.dateFormat);

  parseInput = value => {
    const date = parse(value, this.props.dateFormat);

    if (date) {
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
  }
  toggle = () => (this.state.open ? this.close() : this.show());

  setInputValue = () => {
    if (!this.inputEl) {
      return;
    }
    const currentValue = this.getCurrentValue();
    const inputValue = this.inputEl.value;
    const currentValueAsDate = currentValue && parse(currentValue, this.props.dateFormat);
    const inputValueAsDate = parse(inputValue || '', this.props.dateFormat);
    const isSame = (currentValueAsDate && inputValueAsDate) &&
                    isSameDay(currentValueAsDate, inputValueAsDate) || (inputValue == currentValue);

    if (!isSame) {
      this.inputEl.value = currentValue;
    }
  }

  componentDidMount() {
    this.setInputValue();
  }

  componentDidUpdate() {
    this.setInputValue();
  }

  onBlur = (e) => {
    this.props.onBlur(e);

    const parsedDate = parse(this.inputEl.value, this.props.dateFormat);
    if (parsedDate) {
      this.inputEl.value = format(parsedDate, this.props.dateFormat);
    }
  }

  render() {
    const { className, dateVisible, disabled, footer, header, showOnFocus } = this.props;
    const { open } = this.state;
    const date = this.getCurrentDate();

    // TODO extract a DropdownInput component that can encapsulate the defaultValue/value controlled/uncontrolled behavior.
    return (
      <div>
        <Dropdown isOpen={!disabled && open} toggle={this.toggle}>
          <InputGroup className={className}>
            <input
              className="form-control"
              ref={el => { this.inputEl = el; }}
              type="text"
              onBlur={this.onBlur}
              onChange={this.onChange}
              onClick={showOnFocus && this.show}
              onFocus={showOnFocus && this.show}
              onKeyDown={this.onKeyDown}
              disabled={disabled}
            />
            <InputGroupButton onClick={this.toggle}>
              <Button
                className="px-2"
                disabled={disabled}
                active={open}
                type="button"
                tabIndex={-1}
              >
                <Icon name="calendar" fixedWidth />
              </Button>
            </InputGroupButton>
          </InputGroup>

          <DropdownMenu
            className="p-0"
            onKeyDown={this.onKeyDown}
            style={{ minWidth: '19rem' }}
          >
            {header || (
              <header className="d-flex py-2">
                <ButtonGroup size="sm">
                  <Button ref="prevYear" color="link" onClick={() => this.prevYear()}>
                    <Icon name="angle-double-left" fixedWidth />
                  </Button>
                  <Button ref="prevMonth" color="link" onClick={() => this.prevMonth()}>
                    <Icon name="angle-left" fixedWidth />
                  </Button>
                </ButtonGroup>

                <span className="m-auto">
                  {format(date, 'MMMM YYYY')}
                </span>

                <ButtonGroup size="sm">
                  <Button ref="nextMonth" color="link" onClick={() => this.nextMonth()}>
                    <Icon name="angle-right" fixedWidth />
                  </Button>
                  <Button ref="nextYear" color="link" onClick={() => this.nextYear()}>
                    <Icon name="angle-double-right" fixedWidth />
                  </Button>
                </ButtonGroup>
              </header>
            )}

            <Calendar
              date={date}
              dateVisible={dateVisible}
              onSelect={this.onSelect}
              className="m-0"
            />

            {footer || (
              <footer className="text-center pb-2 pt-1">
                <div>
                  <Button ref="today" onClick={this.today} className="mr-2">Today</Button>
                </div>
              </footer>
            )}
          </DropdownMenu>
        </Dropdown>
      </div>);
  }
}
