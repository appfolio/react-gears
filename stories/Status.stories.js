import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Status } from '../src';

const types = ['none', 'info', 'muted', 'success', 'danger', 'warning'];

export default {
  title: 'Status',
  component: Status,
};

export const LiveExample = () => (
  <ul className="list-unstyled">
    <li>
      <Status size="lg" type={select('type', types, 'none')} />
      Use the knob to change the icon for this
    </li>
    <li>
      <Status type="none" /> Task in progress
    </li>
    <li>
      <Status type="info" /> Help text here
    </li>
    <li>
      <Status type="muted" /> Unstarted task
    </li>
    <li>
      <Status type="success" /> Completed task
    </li>
    <li>
      <Status type="danger" /> Look at me now
    </li>
    <li>
      <Status type="warning" /> User should also look at this
    </li>
  </ul>
);
