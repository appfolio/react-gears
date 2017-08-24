import PropTypes from 'prop-types';
import React from 'react';
import { Table } from 'reactstrap';
import classnames from 'classnames';
import addWeeks from 'date-fns/add_weeks';
import eachDay from 'date-fns/each_day';
import endOfWeek from 'date-fns/end_of_week';
import format from 'date-fns/format';
import isFuture from 'date-fns/is_future';
import isPast from 'date-fns/is_past';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isToday from 'date-fns/is_today';
import startOfDay from 'date-fns/start_of_day';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import style from './Calendar.scss';

// TODO locale/localize

const Day = ({ day, dateFormat, ...props }) => {
  const classNames = classnames(
    'text-center',
    { 'bg-faded text-muted': !day.sameMonth }, // Lighten days in months before & after
    { 'bg-primary text-white': day.selected }, // Highlight selected date
    { 'text-primary font-weight-bold': !day.selected && isToday(day.date) }, // Highlight today's date
    { invisible: !day.visible }, // If date is (optionally) filtered out
    style.date
  );
  return (
    <td
      className={classNames}
      {...props}
    >
      {format(day.date, dateFormat)}
    </td>
  );
};

class Calendar extends React.Component {

  static propTypes = {
    className: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    dateFormat: PropTypes.string,
    dateVisible: PropTypes.func,
    onSelect: PropTypes.func,
    weekDayFormat: PropTypes.string
  };

  static defaultProps = {
    className: '',
    date: new Date(),
    dateFormat: 'D',
    dateVisible: () => true,
    weekDayFormat: 'dd',
    onSelect: () => {}
  };

  // TODO extract as module to share or test easier?:

  visibleDays(currentDate) {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(addWeeks(start, 5));

    // Generate calendar days:
    return eachDay(start, end).map(date => {
      return {
        selected: isSameDay(currentDate, date),
        date: startOfDay(date),
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
    const { date, dateFormat, onSelect, weekDayFormat, ...props } = this.props;
    const weeks = this.visibleWeeks(date);
    delete props.dateVisible; // Table doesn't need dateVisible

    return (
      <Table
        bordered={false}
        hover={false}
        striped={false}
        {...props}
      >
        <thead>
          <tr>
            {weeks[0].map((day, i) => <th key={i} className="text-center">{format(day.date, weekDayFormat)}</th>)}
          </tr>
        </thead>
        <tbody>
          {weeks.map((days, w) => (
            <tr key={w}>
              {days.map((day, d) => <Day day={day} dateFormat={dateFormat} key={d} onClick={() => day.visible && onSelect(day.date)} />)}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Calendar;
