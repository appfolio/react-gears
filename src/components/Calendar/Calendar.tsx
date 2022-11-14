import format from 'date-fns/format';
import enLocale from 'date-fns/locale/en';
import noop from 'lodash.noop';
import React, { useMemo, FC } from 'react';
import Table, { TableProps } from '../Table/Table';
import Day from './components/Day';
import { getVisibleWeeks } from './util/getVisibleWeeks';

export interface CalendarProps extends Omit<TableProps, 'bordered' | 'hover' | 'striped'> {
  className?: string;
  date?: Date;
  dateFormat?: string;
  dateEnabled?: (currentDate: Date) => boolean;
  dateVisible?: (currentDate: Date) => boolean;
  locale?: { [key: string]: any };
  onSelect?: (date: Date) => void;
  weekDayFormat?: string;
}

const defaultProps = {
  date: new Date(),
  dateVisible: () => true,
  dateEnabled: () => true,
  dateFormat: 'D',
  locale: enLocale,
  onSelect: noop,
  weekDayFormat: 'dd',
};

// Pass in ref
const Calendar: FC<CalendarProps> = ({
  date = defaultProps.date,
  dateFormat = defaultProps.dateFormat,
  locale = defaultProps.locale,
  onSelect = defaultProps.onSelect,
  renderDay,
  weekDayFormat = defaultProps.weekDayFormat,
  dateVisible = defaultProps.dateVisible,
  dateEnabled = defaultProps.dateEnabled,
  ...props
}) => {
  const weeks = useMemo(
    () => getVisibleWeeks({ currentDate: date, dateVisible, dateEnabled }),
    [date, dateVisible, dateEnabled]
  );

  return (
    <Table bordered={false} hover={false} striped={false} {...props}>
      <colgroup>
        <col style={{ width: '14.29%' }} />
        <col style={{ width: '14.29%' }} />
        <col style={{ width: '14.29%' }} />
        <col style={{ width: '14.29%' }} />
        <col style={{ width: '14.29%' }} />
        <col style={{ width: '14.29%' }} />
        <col style={{ width: '14.29%' }} />
      </colgroup>
      <thead>
        <tr className="js-calendar-weekdays">
          {weeks[0].map((day) => (
            <th key={day.date.toString()} className="text-center">
              {format(day.date, weekDayFormat, { locale })}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {weeks.map((days) => (
          <tr key={days[0].date.toString()}>
            {days.map((day) =>
              renderDay ? (
                renderDay(day, dateFormat, onSelect, locale)
              ) : (
                <Day
                  data-testid={`day-${day.date.toDateString()}`}
                  day={day}
                  dateFormat={dateFormat}
                  key={day.date.toString()}
                  locale={locale}
                  onClick={() => day.visible && onSelect(day.date)}
                />
              )
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Calendar;
