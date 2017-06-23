import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownMenu, Icon, Input, InputGroupButton, InputGroup } from '../';
import { Dropdown } from 'reactstrap';
import Calendar from './Calendar.js';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addYears from 'date-fns/add_years';
import isValid from 'date-fns/is_valid';
import { parse } from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import format from 'date-fns/format';
import debounce from 'lodash.debounce';

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
function parseDefaultValue(defaultValue, dateFormat) {
  let date;
  let inputValue = '';

  if (defaultValue) {
    if (defaultValue instanceof Date) {
      date = defaultValue;
      inputValue = format(date, dateFormat);
    } else {
      date = parse(defaultValue, dateFormat);
      inputValue = format(date, dateFormat);
      try {
        if (!isValid(date)) {
          date = new Date();
          inputValue = defaultValue;
        }
      } catch (e) {
        date = new Date();
        inputValue = defaultValue;
      }
    }
  } else {
    date = new Date();
    inputValue = '';
  }

  return {
    date,
    inputValue
  };
}

export default class DateInput extends Component {

  static propTypes = {
    className: React.PropTypes.string,
    dateFormat: React.PropTypes.string,
    defaultValue: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    keyboard: React.PropTypes.bool,
    onChange: React.PropTypes.func,
    showOnFocus: React.PropTypes.bool,
    wait: React.PropTypes.number
    // TODO allow custom header/footer, header & day format?
  }

  static defaultProps = {
    className: '',
    dateFormat: 'M/D/YYYY',
    keyboard: true,
    onChange: () => {},
    showOnFocus: true,
    wait: 500
  }

  constructor(props) {
    super(props);

    const { date, inputValue } = parseDefaultValue(props.defaultValue, props.dateFormat);

    this.state = {
      open: false,
      date,
      inputValue
    };
  }

  onChange = event => {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
    this.parseInput();
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
        if (allowArrows) this.setDate(addDays(this.state.date, -1));
        break;
      case 38: // Up
        if (allowArrows) this.setDate(addWeeks(this.state.date, -1));
        break;
      case 39: // Right
        if (allowArrows) this.setDate(addDays(this.state.date, 1));
        break;
      case 40: // Down
        if (allowArrows) this.setDate(addWeeks(this.state.date, 1));
        break;
      default:
    }

    return true;
  };

  setDate = date => {
    this.setState({
      date,
      inputValue: format(date, this.props.dateFormat)
    });
    this.props.onChange(date, true);
  };

  parseInput = debounce(() => {
    const inputValue = this.state.inputValue;
    const date = parse(inputValue, this.props.dateFormat);

    if (date) {
      this.setDate(date);
    } else {
      this.props.onChange(inputValue, false);
    }
  }, this.props.wait);

  close = () => this.setState({ open: false });
  nextMonth = date => this.setDate(addMonths(date, 1));
  nextYear = date => this.setDate(addYears(date, 1));
  prevMonth = date => this.setDate(addMonths(date, -1));
  prevYear = date => this.setDate(addYears(date, -1));
  show = () => this.setState({ open: true });
  today = () => {
    this.setDate(new Date());
    this.close();
  }
  toggle = () => (this.state.open ? this.close() : this.show());

  render() {
    const { className, showOnFocus } = this.props;
    const { date, inputValue, open } = this.state;

    return (
      <div>
        <Dropdown isOpen={open} toggle={this.toggle}>
          <InputGroup className={className}>
            <Input
              type="text"
              value={inputValue}
              onChange={this.onChange}
              onClick={showOnFocus && this.show}
              onFocus={showOnFocus && this.show}
              onInput={this.onChange}
              onKeyDown={this.onKeyDown}
            />
            <InputGroupButton onClick={this.toggle}>
              <Button className="px-2" active={open}>
                <Icon name="calendar" fixedWidth />
              </Button>
            </InputGroupButton>
          </InputGroup>

          <DropdownMenu
            className="p-0"
            onKeyDown={this.onKeyDown}
            style={{ minWidth: '19rem' }}
          >
            <header className="d-flex py-2">
              <ButtonGroup size="sm">
                <Button ref="prevYear" color="link" onClick={() => this.prevYear(date)}>
                  <Icon name="angle-double-left" fixedWidth />
                </Button>
                <Button ref="prevMonth" color="link" onClick={() => this.prevMonth(date)}>
                  <Icon name="angle-left" fixedWidth />
                </Button>
              </ButtonGroup>

              <span className="m-auto">
                {format(date, 'MMMM YYYY')}
              </span>

              <ButtonGroup size="sm">
                <Button ref="nextMonth" color="link" onClick={() => this.nextMonth(date)}>
                  <Icon name="angle-right" fixedWidth />
                </Button>
                <Button ref="nextYear" color="link" onClick={() => this.nextYear(date)}>
                  <Icon name="angle-double-right" fixedWidth />
                </Button>
              </ButtonGroup>
            </header>

            <Calendar
              date={date || new Date()}
              onSelect={this.onSelect}
              className="m-0"
            />

            <footer className="text-center pb-2 pt-1">
              <div>
                <Button ref="today" onClick={this.today} className="mr-2">Today</Button>
              </div>
            </footer>
          </DropdownMenu>
        </Dropdown>
      </div>);
  }
}
