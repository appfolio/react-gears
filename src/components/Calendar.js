import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import {
  addWeeks,
  eachDayOfInterval,
  endOfWeek,
  isFuture,
  isPast,
  isSameDay,
  isSameMonth,
  isToday,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import enLocale from 'date-fns/locale/en-US';
import { format } from '../util/date.js';
import Table from './Table';

const Day = ({ day, dateFormat, locale, onClick, ...props }) => {
  const disabled = !day.enabled;
  const classNames = classnames(
    'text-center',
    { 'bg-light text-muted': !day.sameMonth }, // Lighten days in months before & after
    { 'bg-primary text-white': day.selected }, // Highlight selected date
    { 'text-primary font-weight-bold': !day.selected && isToday(day.date) }, // Highlight today's date
    { invisible: !day.visible } // If date is (optionally) filtered out
  );
  const styles = disabled ? {
    cursor: 'not-allowed'
  } : {};
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
      <style jsx>{`
        td:hover {
          font-weight: bold;
        }
      `}
      </style>
    </td>
  );
};

Day.propTypes = {
  day: PropTypes.shape({
    enabled: PropTypes.bool,
    sameMonth: PropTypes.bool,
    selected: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
    visible: PropTypes.bool
  }),
  dateFormat: PropTypes.string,
  locale: PropTypes.object,
  onClick: PropTypes.func
};

class Calendar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    dateFormat: PropTypes.string,
    dateEnabled: PropTypes.func,
    dateVisible: PropTypes.func,
    locale: PropTypes.object,
    onSelect: PropTypes.func,
    renderDay: PropTypes.func,
    weekDayFormat: PropTypes.string
  };

  static defaultProps = {
    className: '',
    date: new Date(),
    dateFormat: 'd',
    dateEnabled: () => true,
    dateVisible: () => true,
    locale: enLocale,
    renderDay: (day, dateFormat, onSelect, locale) => (
      <Day
        day={day}
        dateFormat={dateFormat}
        key={day.date.toString()}
        locale={locale}
        onClick={() => day.visible && onSelect(day.date)}
      />
    ),
    weekDayFormat: 'EEEEEE',
    onSelect: () => {}
  };

  // TODO extract as module to share or test easier?:

  visibleDays(currentDate) {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(addWeeks(start, 5));

    // Generate calendar days:
    return eachDayOfInterval({ start, end }).map((date) => {
      return {
        selected: isSameDay(currentDate, date),
        date: startOfDay(date),
        enabled: this.props.dateEnabled(date),
        visible: this.props.dateVisible(date),
        past: isPast(date),
        today: isToday(date),
        sameMonth: isSameMonth(currentDate, date),
        future: isFuture(date)
      };
    });
  }

  visibleWeeks(currentDate) {
    const days = this.visibleDays(currentDate);
    // Chunk into list of weeks:
    const weeks = [];
    for (let i = 0, len = days.length; i < len; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return weeks;
  }

  render() {
    const { date, dateFormat, locale, onSelect, renderDay, weekDayFormat, ...props } = this.props;
    const weeks = this.visibleWeeks(date);
    delete props.dateEnabled; // Table doesn't need dateVisible
    delete props.dateVisible; // Table doesn't need dateVisible

    return (
      <Table
        bordered={false}
        hover={false}
        striped={false}
        {...props}
      >
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
            {weeks[0].map((day, i) => <th key={i} className="text-center">{format(day.date, weekDayFormat, { locale })}</th>)}
          </tr>
        </thead>
        <tbody>
          {weeks.map((days, w) => (
            <tr key={w}>
              {days.map(day => renderDay(day, dateFormat, onSelect, locale))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Calendar;
