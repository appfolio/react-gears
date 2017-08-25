import React, { Component } from 'react';

import CalendarDropdown from './presenter';
import CalendarPropTypes from './propTypes';
import KeyCodes from '../constants/keyCodes';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addYears from 'date-fns/add_years';

class CalendarDropdownContainer extends Component {
  onToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.props.onSelect(today);
  };

  onNextDay = () => {
    const { date, onChange } = this.props;
    onChange(addDays(date, 1));
  };

  onNextWeek = () => {
    const { date, onChange } = this.props;
    onChange(addWeeks(date, 1));
  };

  onNextMonth = () => {
    const { date, onChange } = this.props;
    onChange(addMonths(date, 1));
  };

  onNextYear = () => {
    const { date, onChange } = this.props;
    onChange(addYears(date, 1));
  };

  onPrevDay = () => {
    const { date, onChange } = this.props;
    onChange(addDays(date, -1));
  };

  onPrevWeek = () => {
    const { date, onChange } = this.props;
    onChange(addWeeks(date, -1));
  };

  onPrevMonth = () => {
    const { date, onChange } = this.props;
    onChange(addMonths(date, -1));
  };

  onPrevYear = () => {
    const { date, onChange } = this.props;
    onChange(addYears(date, -1));
  };

  onKeyDown = event => {
    event.preventDefault();

    const { close, keyboard } = this.props;

    const { altKey, ctrlKey, metaKey, shiftKey } = event;

    // Ignore arrows if closed, disabled, or modifiers are down:
    const allowArrows = keyboard && !(altKey || ctrlKey || metaKey || shiftKey);

    switch (event.keyCode) {
      case KeyCodes.TAB:
      case KeyCodes.ENTER:
      case KeyCodes.ESCAPE:
        close();
        break;
      case KeyCodes.LEFT:
        if (allowArrows) this.onPrevDay();
        break;
      case KeyCodes.UP:
        if (allowArrows) this.onPrevWeek();
        break;
      case KeyCodes.RIGHT:
        if (allowArrows) this.onNextDay();
        break;
      case KeyCodes.DOWN:
        if (allowArrows) this.onNextWeek();
        break;
      default:
    }

    return true;
  };

  render() {
    return (
      <CalendarDropdown
        {...this.props}
        onKeyDown={this.onKeyDown}
        onNextMonth={this.onNextMonth}
        onNextYear={this.onNextYear}
        onPrevMonth={this.onPrevMonth}
        onPrevYear={this.onPrevYear}
        onToday={this.onToday}
      />
    );
  }
}

CalendarDropdownContainer.propTypes = CalendarPropTypes;

CalendarDropdownContainer.defaultProps = {
  close: () => {},
  dateFormat: 'MMM YYYY',
  dateVisible: () => true,
  keyboard: true,
  onChange: () => {},
  onSelect: () => {},
  onToday: () => {}
};

export default CalendarDropdownContainer;
