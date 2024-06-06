import React from 'react';
import Status from './Status';

const types = ['none', 'info', 'muted', 'success', 'danger', 'warning'];

export default {
  title: 'Status',
  component: Status,
  parameters: {
    sourceLink: 'Status/Status.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <Status {...args} />
    <Status type="info" />
    <Status type="muted" />
    <Status type="success" />
    <Status type="danger" />
    <Status type="warning" />
  </div>
);
LiveExample.args = {
  type: 'none',
};
LiveExample.argTypes = {
  type: {
    control: { type: 'select' },
    options: types,
  },
};
