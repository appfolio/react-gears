import { Button, Icon, Input, InputGroup, InputGroupButton } from '../../';
import React, { Component, PropTypes } from 'react';

import CalendarDropdown from '../CalendarDropdown.js';
import { Dropdown } from 'reactstrap';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import format from 'date-fns/format';
import { parse } from 'fecha'; // TODO replace with date-fns/parse after v2 is released

function betterParse(date, dateFormat) {
  if (date instanceof Date) {
    return date;
  }

  return parse(date, dateFormat) || null;
}

export default class DateInput extends Component {
  static propTypes = {
    className: PropTypes.string,
    dateVisible: PropTypes.func,
    dateFormat: PropTypes.string,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Date)
    ]),
    disabled: PropTypes.bool,
    header: PropTypes.node,
    footer: PropTypes.node,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    showOnFocus: PropTypes.bool,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    date: PropTypes.instanceOf(Date)
    // TODO allow custom header/footer, header & day format?
  };

  static defaultProps = {
    className: '',
    dateVisible: () => true,
    dateFormat: 'MM/DD/YYYY',
    onBlur: () => {},
    onChange: () => {},
    showOnFocus: true,
    disabled: false
  };

  state = {
    open: false
  };

  onChange = event => {
    const { value } = event.target;
    const { onChange, dateFormat } = this.props;
    const date = betterParse(value, dateFormat);
    onChange(value, date);
  };

  onSelect = date => {
    this.setDate(date);
    this.close();
  };

  setDate = date => {
    const { onChange, dateFormat } = this.props;
    onChange(format(date, dateFormat), date);
  };

  getCurrentValue = () => {
    const { value, dateFormat } = this.props;
    return value instanceof Date ? format(value, dateFormat) : value;
  };

  getCurrentDate = () => {
    const { value, date, dateFormat } = this.props;

    if (date) {
      return date;
    }

    const parsedDate = betterParse(value, dateFormat);
    return parsedDate || new Date();
  };

  close = () => this.setState({ open: false });
  nextMonth = () => this.setDate(addMonths(this.getCurrentDate(), 1));
  nextYear = () => this.setDate(addYears(this.getCurrentDate(), 1));
  prevMonth = () => this.setDate(addMonths(this.getCurrentDate(), -1));
  prevYear = () => this.setDate(addYears(this.getCurrentDate(), -1));
  show = () => this.setState({ open: true });
  toggle = () => (this.state.open ? this.close() : this.show());

  render() {
    const {
      className,
      dateVisible,
      disabled,
      footer,
      header,
      onBlur,
      showOnFocus
    } = this.props;
    const { open } = this.state;
    const value = this.getCurrentValue();
    const date = this.getCurrentDate();

    return (
      <Dropdown isOpen={!disabled && open} toggle={this.toggle}>
        <InputGroup className={className}>
          <Input
            type="text"
            value={value}
            onBlur={onBlur}
            onChange={this.onChange}
            onClick={showOnFocus && this.show}
            onFocus={showOnFocus && this.show}
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

        <CalendarDropdown
          date={date}
          header={header}
          footer={footer}
          dateVisible={dateVisible}
          onPrevYear={this.prevYear}
          onPrevMonth={this.prevMonth}
          onNextMonth={this.nextMonth}
          onNextYear={this.nextYear}
          onSelect={this.onSelect}
        />
      </Dropdown>
    );
  }
}
