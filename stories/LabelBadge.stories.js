import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import { LabelBadge } from '../src';

export default {
  title: 'LabelBadge',
  component: LabelBadge,
};

export const LiveExample = () => (
  <div>
    <LabelBadge
      label={text('label', 'User')}
      value={text('value', 'Mischa Lewis Norelle')}
      removable={boolean('removable', true)}
      maxWidth={number('max', 20)}
      onRemove={() => action('onRemove')}
    />
  </div>
);
