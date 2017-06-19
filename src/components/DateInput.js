import React, { Component } from 'react';
import { Button, ButtonGroup, DropdownMenu, Icon, Input, InputGroupButton, InputGroup } from '../';
import { UncontrolledDropdown } from 'reactstrap'; // TODO export from react-gears
import Calendar from './Calendar.js';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import { parse } from 'fecha'; // TODO replace with date-fns/parse after v2 is released
import format from 'date-fns/format';

export default class DateInput extends Component {

  static propTypes = {
    date: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object
    ]),
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

    let date = props.defaultValue; // TODO not working?

    if (!date) {
      date = new Date();
    } else {
      // TODO check typeof == string
      date = parse(date, props.dateFormat);
    }

    this.state = {
      open: false,
      date
    };
  }

  // TODO onChange, esc/clickout hide, focus+keyboard navigation, Today button, header/footer, date/header/day format

  onChange = event => {
    const value = event.target.value;
    const date = parse(value, this.props.dateFormat);

    if (date) {
      this.setState({
        date
      });
    }
    // TODO invalid text
  }

  onSelect = newDate => {
    this.setState({
      date: newDate,
      open: false
    });
  };

  close = () => this.setState({ open: false });
  prevMonth = date => this.setState({ date: addMonths(date, -1) });
  nextMonth = date => this.setState({ date: addMonths(date, 1) });
  prevYear = date => this.setState({ date: addYears(date, -1) });
  nextYear = date => this.setState({ date: addYears(date, 1) });

  tabListener = event => {
    if (event.keyCode === 9) { // TAB
      this.setState({ open: false });
    }
    return true;
  }

  render() {
    const { dateFormat, defaultValue, showOnFocus, ...props } = this.props;
    const { date, open, undo } = this.state;

    const show = () => this.setState({
      open: true,
      undo: { date }
    });
    const cancel = () => this.setState({
      open: false,
      date: undo.date
    });
    const toggle = () => this.setState({
      open: !open,
      undo: { date }
    });

    const formattedValue = date ? format(date, dateFormat) : defaultValue;

    return (
      <div ref={el => { this.base = el; }}>
        <header>
          <InputGroup>
            <Input
              ref={component => { this._input = component; }}
              value={formattedValue}
              type="text"
              onClick={showOnFocus ? show : () => {}}
              onFocus={showOnFocus ? show : () => {}}
              onKeyDown={this.tabListener}
              onChange={this.onChange}
              onInput={this.onChange}
              {...props}
            />
            <InputGroupButton onClick={toggle}>
              <Button className="px-2" active={open}>
                <Icon name="calendar" fixedWidth />
              </Button>
            </InputGroupButton>
          </InputGroup>
        </header>

        <UncontrolledDropdown isOpen={open}>
          <DropdownMenu className="p-1" style={{ minWidth: '19em' }}>
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
              date={date}
              onSelect={this.onSelect}
              className="m-0"
            />

            <footer className="text-center py-1">
              <div>
                <Button id="save" onClick={this.close} className="mr-2">OK</Button>
                <Button id="cancel" onClick={cancel}>Cancel</Button>
              </div>
            </footer>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>);
  }
}
