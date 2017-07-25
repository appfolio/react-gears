import { Button, ButtonGroup, DropdownMenu, Icon } from '../../';
import React, { Component, PropTypes } from 'react';
import format from 'date-fns/format';

import Calendar from './Calendar.js';

export default class CalendarDropdown extends Component {
  static propTypes = {
    dateVisible: PropTypes.func,
    dateFormat: PropTypes.string,
    header: PropTypes.node,
    footer: PropTypes.node,
    date: PropTypes.object,
    onPrevYear: PropTypes.func,
    onPrevMonth: PropTypes.func,
    onNextMonth: PropTypes.func,
    onNextYear: PropTypes.func,
    onSelect: PropTypes.func,
    onToday: PropTypes.func
  };

  static defaultProps = {
    dateFormat: 'MMM YYYY',
    dateVisible: () => true,
    onPrevYear: () => {},
    onPrevMonth: () => {},
    onNextMonth: () => {},
    onNextYear: () => {},
    onSelect: () => {}
  };

  onToday = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.props.onSelect(today);
  };

  render() {
    const {
      dateFormat,
      dateVisible,
      footer,
      header,
      date,
      onPrevYear,
      onPrevMonth,
      onNextMonth,
      onNextYear,
      onSelect,
      onToday
    } = this.props;

    return (
      <DropdownMenu className="p-0" style={{ minWidth: '19rem' }}>
        {header ||
          <header className="d-flex py-2">
            <ButtonGroup size="sm">
              <Button ref="prevYear" color="link" onClick={onPrevYear}>
                <Icon name="angle-double-left" fixedWidth />
              </Button>
              <Button ref="prevMonth" color="link" onClick={onPrevMonth}>
                <Icon name="angle-left" fixedWidth />
              </Button>
            </ButtonGroup>

            <span className="m-auto">
              {format(date, dateFormat)}
            </span>

            <ButtonGroup size="sm">
              <Button ref="nextMonth" color="link" onClick={onNextMonth}>
                <Icon name="angle-right" fixedWidth />
              </Button>
              <Button ref="nextYear" color="link" onClick={onNextYear}>
                <Icon name="angle-double-right" fixedWidth />
              </Button>
            </ButtonGroup>
          </header>}

        <Calendar
          date={date}
          dateVisible={dateVisible}
          onSelect={onSelect}
          className="m-0"
        />

        {footer ||
          <footer className="text-center pb-2 pt-1">
            <div>
              <Button ref="today" onClick={onToday} className="mr-2">
                Today
              </Button>
            </div>
          </footer>}
      </DropdownMenu>
    );
  }
}
