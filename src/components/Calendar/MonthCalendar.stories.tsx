import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import MonthCalendar from './MonthCalendar';

const meta: Meta<typeof MonthCalendar> = {
  title: 'MonthCalendar',
  component: MonthCalendar,
  parameters: {
    sourceLink: 'Calendar/MonthCalendar.tsx',
  },
  argTypes: {
    monthFormat: {
      options: ['M', 'MM', 'MMM', 'MMMM'],
      control: {
        type: 'select',
      },
    },
    yearFormat: {
      options: ['YY', 'YYYY'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MonthCalendar>;

export const MonthCalendarExample: Story = {
  args: {
    centerYearSelection: false,
    monthFormat: 'MMM',
    yearFormat: 'YYYY',
  },
  render: function Render({ centerYearSelection, monthFormat, yearFormat }) {
    const [date, setDate] = useState(new Date());
    return (
      <MonthCalendar
        date={date}
        onSelect={(e) => {
          setDate(e);
          action('onSelect')(e);
        }}
        centerYearSelection={centerYearSelection}
        monthFormat={monthFormat}
        yearFormat={yearFormat}
      />
    );
  },
};
