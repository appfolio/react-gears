import { action } from '@storybook/addon-actions';
import React from 'react';
import LabelBadge from './LabelBadge';

export default {
  title: 'LabelBadge',
  component: LabelBadge,
  parameters: {
    sourceLink: 'LabelBadge/LabelBadge.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <LabelBadge {...args} />
  </div>
);
LiveExample.args = {
  label: 'User',
  value: 'Mischa Lewis Norelle',
  removable: true,
  maxWidth: 20,
  onRemove: action('onRemove'),
};
