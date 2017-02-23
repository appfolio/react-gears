import React from 'react';
import { LabelBadge } from '../src';
import { storiesOf } from '@kadira/storybook';
import { boolean, number, text } from '@kadira/storybook-addon-knobs';

storiesOf('LabelBadge', module)
  .addWithInfo('Live example', () => (
    <div>
      <LabelBadge
        label={text('label', 'User')}
        value={text('value', 'Mischa Lewis Norelle')}
        removable={boolean('removable', true)}
        maxWidth={number('max', 20)}
        onRemove={() => alert('remove clicked')}
      />
    </div>
  ));

