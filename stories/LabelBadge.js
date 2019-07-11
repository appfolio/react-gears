import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { LabelBadge } from '../src';

storiesOf('LabelBadge', module)
  .add('Live example', () => (
    <div>
      <LabelBadge
        label={text('label', 'User')}
        value={text('value', 'Mischa Lewis Norelle')}
        removable={boolean('removable', true)}
        maxWidth={number('max', 20)}
        onRemove={() => action('onRemove')}
      />
    </div>
  ));

