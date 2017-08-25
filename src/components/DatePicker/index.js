import React, { Component } from 'react';

import DatePicker from './presenter';
import DatePickerPropTypes from './propTypes';
import KeyCodes from '../constants/keyCodes';
import format from 'date-fns/format';
import { parse } from 'fecha'; // TODO replace with date-fns/parse after v2 is released

function betterParse(date, dateFormat) {
  if (date instanceof Date) {
    return date;
  }

  return parse(date, dateFormat) || null;
}

class DatePickerContainer extends Component {
  state = {
    open: false
  };

  onChange = eventOrDate => {
    if (eventOrDate instanceof Date) {
      this.setDate(eventOrDate);
      return;
    }

    const { value } = eventOrDate.target;
    const { onChange, dateFormat } = this.props;
    const date = betterParse(value, dateFormat);
    onChange(value, date);
  };

  onSelect = date => {
    this.setDate(date);
    this.close();
  };

  onKeyDown = event => {
    if (event.keyCode === KeyCodes.TAB || event.keyCode === KeyCodes.ESCAPE) {
      this.close();
    }

    return true;
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
  open = () => this.setState({ open: true });
  toggle = () => (this.state.open ? this.close() : this.open());

  render() {
    return (
      <DatePicker
        close={this.close}
        isOpen={this.state.open}
        onKeyDown={this.onKeyDown}
        onSelect={this.onSelect}
        open={this.open}
        toggle={this.toggle}
        {...this.props}
        date={this.getCurrentDate()}
        onChange={this.onChange}
        value={this.getCurrentValue()}
      />
    );
  }
}

DatePickerContainer.propTypes = DatePickerPropTypes;

DatePickerContainer.defaultProps = {
  className: '',
  dateVisible: () => true,
  dateFormat: 'MM/DD/YYYY',
  disabled: false,
  keyboard: true,
  onBlur: () => {},
  onChange: () => {},
  showOnFocus: true
};

export default DatePickerContainer;
