import { Button, ButtonGroup, DropdownMenu, Icon } from '../../../';

import Calendar from '../Calendar.js';
import { PresenterPropTypes } from './propTypes';
import React from 'react';
import format from 'date-fns/format';

function CalendarDropdown({
  date,
  dateFormat,
  dateVisible,
  footer,
  header,
  onKeyDown,
  onNextMonth,
  onNextYear,
  onPrevMonth,
  onPrevYear,
  onSelect,
  onToday
}) {
  return (
    <DropdownMenu
      className="p-0"
      style={{ minWidth: '19rem' }}
      onKeyDown={onKeyDown}
    >
      {header ||
        <header className="d-flex py-2">
          <ButtonGroup size="sm">
            <Button color="link" onClick={onPrevYear}>
              <Icon name="angle-double-left" fixedWidth />
            </Button>
            <Button color="link" onClick={onPrevMonth}>
              <Icon name="angle-left" fixedWidth />
            </Button>
          </ButtonGroup>

          <span className="m-auto">
            {format(date, dateFormat)}
          </span>

          <ButtonGroup size="sm">
            <Button color="link" onClick={onNextMonth}>
              <Icon name="angle-right" fixedWidth />
            </Button>
            <Button color="link" onClick={onNextYear}>
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
            <Button onClick={onToday} className="mr-2">
              Today
            </Button>
          </div>
        </footer>}
    </DropdownMenu>
  );
}

CalendarDropdown.propTypes = PresenterPropTypes;

export default CalendarDropdown;
