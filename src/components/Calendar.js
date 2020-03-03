import PropTypes from 'prop-types';
import React from 'react';
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
import Table from './Table';

// TODO locale/localize

const defaultDayClassName = (day) => {
  if (day.selected) return 'bg-primary text-white';
  else if (!day.selected && isToday(day.date)) return 'text-primary font-weight-bold';
  return '';
};

const Day = ({ day, dateFormat, onClick, dayClassName, ...props }) => {
  const disabled = !day.enabled;
  const classNames = classnames(
    'text-center',
    { 'bg-light text-muted': !day.sameMonth }, // Lighten days in months before & after
    { invisible: !day.visible }, // If date is (optionally) filtered out
    dayClassName(day),
    style.date
  );
  const styles = disabled ? {
    cursor: 'not-allowed'
  } : {};

  const tdProps = {
    className: classNames,
    onClick: disabled ? undefined : onClick,
    style: styles,
    ...props,
  };

  if (onClick) tdProps.role = 'button';

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <td {...tdProps} >
      {disabled ? <s>{format(day.date, dateFormat)}</s> : format(day.date, dateFormat)}
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
  dayClassName: PropTypes.func,
  dateFormat: PropTypes.string,
  onClick: PropTypes.func
};

Day.defaultProps = {
  dayClassName: defaultDayClassName
};

class Calendar extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    dayClassName: PropTypes.func,
    date: PropTypes.instanceOf(Date),
    dateFormat: PropTypes.string,
    dateEnabled: PropTypes.func,
    dateVisible: PropTypes.func,
    onSelect: PropTypes.func,
    weekDayFormat: PropTypes.string
  };

  static defaultProps = {
    className: '',
    date: new Date(),
    dateFormat: 'D',
    dateEnabled: () => true,
    dateVisible: () => true,
    weekDayFormat: 'dd',
    // onSelect: () => {}
  };

  // TODO extract as module to share or test easier?:

  visibleDays(currentDate) {
    const start = startOfWeek(startOfMonth(currentDate));
    const end = endOfWeek(addWeeks(start, 5));

    // Generate calendar days:
    return eachDay(start, end).map((date) => {
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
    const { date, dateFormat, onSelect, weekDayFormat, dayClassName, ...props } = this.props;
    const weeks = this.visibleWeeks(date);
    delete props.dateEnabled; // Table doesn't need dateVisible
    delete props.dateVisible; // Table doesn't need dateVisible
    const onClick = onSelect ? () => day.visible && onSelect(day.date) : undefined;

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
          <tr>
            {weeks[0].map((day, i) => <th key={i} className="text-center">{format(day.date, weekDayFormat)}</th>)}
          </tr>
        </thead>
        <tbody>
          {weeks.map((days, w) => (
            <tr key={w}>
              {days.map((day, d) => (
                <Day
                  day={day}
                  dateFormat={dateFormat}
                  key={d}
                  onClick={onClick}
                  dayClassName={dayClassName}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Calendar;
