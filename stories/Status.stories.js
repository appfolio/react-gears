import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Status } from '../src';

const types = [
  'none', 'info', 'muted', 'success', 'danger', 'warning'
];

export default {
  title: 'Status',
  component: Status,
};

export const LiveExample = () => (
  <div>
    <Status
      type={select('type', types, 'none')}
    />
    <Status
      type='info'
    />
    <Status
      type='muted'
    />
    <Status
      type='success'
    />
    <Status
      type='danger'
    />
    <Status
      type='warning'
    />
  </div>
);
