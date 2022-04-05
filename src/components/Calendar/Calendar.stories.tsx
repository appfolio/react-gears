import { action } from '@storybook/addon-actions';
import { select } from '@storybook/addon-knobs';
import React from 'react';
import Calendar from './Calendar';

export default {
  title: 'Calendar',
  component: Calendar,
};

export const CalendarExample = () => (
  <Calendar
    onSelect={action('onSelect')}
    weekDayFormat={select('weekday format', ['eee', 'eeee', 'eeeee', 'eeeeee'], 'eeeeee')}
  />
);
