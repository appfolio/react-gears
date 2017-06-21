import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownMenu, Icon, Input, InputGroupButton, InputGroup } from '../';
import { Dropdown } from 'reactstrap';
import Calendar from './Calendar.js';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import isValid from 'date-fns/is_valid';
import { parse } from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import format from 'date-fns/format';
import debounce from 'lodash.debounce';

function parseDefaultValue(defaultValue, dateFormat) {
  let date;
  let inputValue = '';

  if (defaultValue) {
    if (defaultValue instanceof Date) {
      date = defaultValue;
    } else {
      date = parse(defaultValue, dateFormat);
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
    dateFormat: React.PropTypes.string,
    defaultValue: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
    onChange: React.PropTypes.func,
    showOnFocus: React.PropTypes.bool
  }

  static defaultProps = {
    dateFormat: 'M/D/YYYY',
    onChange: () => {},
    showOnFocus: true
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

  // TODO blank/null input, onChange (value, valid?)
  // TODO esc hide, focus+keyboard navigation
  // TODO allow custom header/footer, date/header/day format?

  onChange = event => {
    const value = event.target.value;
    this.setState({
      inputValue: value
    });
    this.parseInput();
  }

  onSelect = newDate => {
    this.setState({
      date: newDate,
      inputValue: false,
      open: false
    });
  };

  parseInput = debounce(() => {
    const inputValue = this.state.inputValue;

    const date = parse(inputValue, this.props.dateFormat);

    if (date) {
      this.setState({
        date,
        inputValue: false
      });
    } else {
      this.setState({
        inputValue
      });
    }
  }, 500); // TODO use prop

  close = () => this.setState({ open: false, inputValue: false });
  prevMonth = date => this.setState({ date: addMonths(date, -1) });
  nextMonth = date => this.setState({ date: addMonths(date, 1) });
  prevYear = date => this.setState({ date: addYears(date, -1) });
  nextYear = date => this.setState({ date: addYears(date, 1) });
  tabListener = event => {
    if (event.keyCode === 9) { // TAB
      this.setState({ open: false });
    }
    return true;
  };

  today = () => this.setState({
    date: new Date(),
    open: false,
  });

  toggle = () => this.setState({
    open: !this.state.open,
    undo: this.state.date
  });

  render() {
    const { dateFormat, showOnFocus, ...props } = this.props;
    const { date, inputValue, open, undo } = this.state;
    delete props.defaultValue; // Remove to avoid setting on InputGroup

    const show = () => this.setState({
      open: true,
      undo: date
    });
    const cancel = () => this.setState({
      open: false,
      date: undo,
      inputValue: false
    });

    const displayValue = inputValue || (date && format(date, dateFormat));
    return (
      <div ref={el => { this.base = el; }}>
        <Dropdown isOpen={open} toggle={this.toggle}>
          <InputGroup>
            <Input
              type="text"
              value={displayValue}
              onChange={this.onChange}
              onClick={showOnFocus && show}
              onFocus={showOnFocus && show}
              onInput={this.onChange}
              onKeyDown={this.tabListener}
              {...props}
            />
            <InputGroupButton onClick={this.toggle}>
              <Button className="px-2" active={open}>
                <Icon name="calendar" fixedWidth />
              </Button>
            </InputGroupButton>
          </InputGroup>

          <DropdownMenu className="p-1" style={{ minWidth: '19rem' }}>
            <header className="d-flex pb-2">
              <ButtonGroup size="sm">
                <Button color="link" onClick={() => this.prevYear(date)}>
                  <Icon name="angle-double-left" fixedWidth />
                </Button>
                <Button color="link" onClick={() => this.prevMonth(date)}>
                  <Icon name="angle-left" fixedWidth />
                </Button>
              </ButtonGroup>

              <span className="m-auto">
                {format(date, 'MMMM YYYY')}
              </span>

              <ButtonGroup size="sm">
                <Button color="link" onClick={() => this.nextMonth(date)}>
                  <Icon name="angle-right" fixedWidth />
                </Button>
                <Button color="link" onClick={() => this.nextYear(date)}>
                  <Icon name="angle-double-right" fixedWidth />
                </Button>
              </ButtonGroup>
            </header>

            <Calendar
              date={date || new Date()}
              onSelect={this.onSelect}
              className="m-0"
            />

            <footer className="text-center py-1">
              <div>
                <Button id="today" onClick={this.today} className="mr-2">Today</Button>
                <Button id="cancel" onClick={cancel}>Cancel</Button>
              </div>
            </footer>
          </DropdownMenu>
        </Dropdown>
      </div>);
  }
}
