import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Calendar } from '../src';
import startOfWeek from 'date-fns/start_of_week';
import endOfWeek from 'date-fns/end_of_week';
import isSameDay from 'date-fns/is_same_day';

storiesOf('Calendar', module)
  .add('basic', () => (
    <div className="d-inline-flex">
      <Calendar
        dateFormat={text('dateFormat', Calendar.defaultProps.dateFormat)}
        onSelect={action('onSelect')}
      />
    </div>
  ))
  .add('highlight different days in same month', () => {
    const today = new Date();
    const dayClassName = ({ date }) => {
      if (isSameDay(date, startOfWeek(today))) return 'bg-primary text-white';
      else if (isSameDay(date, endOfWeek(today))) return 'bg-success text-white';
      return '';
    };
    return (
      <div className="d-inline-flex">
        <Calendar
          date={today}
          dayClassName={dayClassName}
        />
      </div>
    );
  });
