import React from 'react';
import Progress from './Progress';

export default {
  title: 'Progress',
  component: Progress,
  parameters: {
    sourceLink: 'Progress/Progress.js',
  },
};

export const LiveExample = (args) => <Progress {...args} />;
LiveExample.args = {
  color: '',
  animated: true,
  value: 50,
};
LiveExample.argTypes = {
  color: {
    control: {
      type: 'select',
      options: ['', 'info', 'success', 'warning', 'danger'],
    },
  },
  value: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
  },
};
