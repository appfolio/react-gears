import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Calendar from './Calendar';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  component: Calendar,
  parameters: {
    sourceLink: 'Calendar/Calendar.tsx',
  },
  argTypes: {
    weekDayFormat: {
      options: [undefined, 'dd', 'ddd', 'dddd'],
      control: { type: 'select' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const CalendarExample: Story = {
  args: {
    onSelect: action('onSelect'),
    weekDayFormat: undefined,
  },
};
