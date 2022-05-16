import classnames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import React, { FC, MouseEventHandler, TdHTMLAttributes } from 'react';
import { DayInfo } from '../Calendar.types';

export interface DayProps
  extends Omit<TdHTMLAttributes<HTMLTableCellElement>, 'className' | 'onClick' | 'role' | 'style'> {
  day: DayInfo;
  dateFormat?: string;
  locale?: { [key: string]: any };
  onClick: MouseEventHandler<HTMLTableCellElement>;
}

const Day: FC<DayProps> = ({ day, dateFormat, locale, onClick, ...props }) => {
  const disabled = !day.enabled;
  const classNames = classnames(
    'text-center',
    { 'bg-light text-muted': !day.sameMonth }, // Lighten days in months before & after
    { 'bg-primary text-white': day.selected }, // Highlight selected date
    { 'text-primary fw-bold': !day.selected && isToday(day.date) }, // Highlight today's date
    { invisible: !day.visible } // If date is (optionally) filtered out
  );
  const styles = disabled
    ? {
        cursor: 'not-allowed',
      }
    : {};
  const dayString = format(day.date, dateFormat, { locale });

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <td
      className={classNames}
      onClick={disabled ? undefined : onClick}
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      style={styles}
      {...props}
    >
      {disabled ? <s>{dayString}</s> : dayString}
      <style jsx>
        {`
          td:hover {
            font-weight: bold;
          }
        `}
      </style>
    </td>
  );
};

export default Day;
