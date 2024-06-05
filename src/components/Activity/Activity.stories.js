import { action as sbAction } from '@storybook/addon-actions';
import React from 'react';
import { colors } from '../../tooling/colors';
import Activity from './Activity';

export default {
  title: 'ActivityOnly',
  component: Activity,
  parameters: {
    sourceLink: 'Activity/Activity.tsx',
  },
};

export const ActivityOnly = ({ content, ...args }) => (
  <Activity date={new Date()} {...args}>
    {content}
  </Activity>
);
ActivityOnly.args = {
  action: 'Published',
  active: false,
  by: 'Joel Bandi',
  color: '',
  dateFormat: undefined,
  disabled: false,
  onClick: sbAction('onClick'),
  content: '',
};
ActivityOnly.argTypes = {
  color: {
    options: ['', ...colors],
    control: { type: 'select' },
  },
  dateFormat: {
    control: 'text',
  },
};
