import { Button, Icon, Input, InputGroup, InputGroupButton } from '../../';

import CalendarDropdown from '../CalendarDropdown/index.js';
import { Dropdown } from 'reactstrap';
import { PresenterPropTypes } from './propTypes';
import React from 'react';

function DatePicker({
  calendarDateFormat,
  className,
  disabled,
  isOpen,
  onBlur,
  onChange,
  onKeyDown,
  open,
  showOnFocus,
  toggle,
  value,
  ...calendarProps
}) {
  return (
    <Dropdown isOpen={!disabled && isOpen} toggle={toggle}>
      <InputGroup className={className}>
        <Input
          type="text"
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onClick={showOnFocus && open}
          onFocus={showOnFocus && open}
          onKeyDown={onKeyDown}
          disabled={disabled}
        />
        <InputGroupButton onClick={toggle}>
          <Button
            className="px-2"
            disabled={disabled}
            active={isOpen}
            type="button"
            tabIndex={-1}
          >
            <Icon name="calendar" fixedWidth />
          </Button>
        </InputGroupButton>
      </InputGroup>

      <CalendarDropdown
        {...calendarProps}
        onChange={onChange}
        dateFormat={calendarDateFormat}
      />
    </Dropdown>
  );
}

DatePicker.propTypes = PresenterPropTypes;

export default DatePicker;
