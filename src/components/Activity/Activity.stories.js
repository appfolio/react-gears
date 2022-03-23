import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { colors } from '../../../util/colors';
import Activity from './Activity';

export default {
  title: 'ActivityLog',
  component: Activity,
};

export const ActivityOnly = () => (
  <Activity
    action={text('action', 'Published')}
    active={boolean('active', false)}
    by={text('by', 'Joel Bandi')}
    color={select('color', ['', ...colors], '')}
    date={new Date()}
    dateFormat={text('dateFormat')}
    disabled={boolean('disabled', false)}
    onClick={action('onClick')}
  >
    {text('content')}
  </Activity>
);
