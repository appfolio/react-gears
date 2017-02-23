import React from 'react';
import { LabelBadge } from '../src';
import { storiesOf } from '@kadira/storybook';
import { boolean, text } from '@kadira/storybook-addon-knobs';

storiesOf('LabelBadge', module)
  .addWithInfo('Live example', () => (
    <div>
    <LabelBadge
      label={text('label', 'User')}
      value={text('value', 'Guess the user name')}
      clearable={boolean('clearable', true)}
      onClear={() => ( console.log('clear clicked') )}
    />
    <LabelBadge
      label={text('label', 'User')}
      value={text('value', 'Guess the user name')}
      clearable={boolean('clearable', true)}
      onClear={() => ( console.log('clear clicked') )}
    />
    <LabelBadge
      label='User'
      value='Guess'
    />
    <LabelBadge
      label='User'
      value='Guess'
    />
    <LabelBadge
      label='User'
      value='Guess'
    />
    <LabelBadge
      label='User'
      value='Guess'
    />
    <LabelBadge
      label='User'
      value='Guess'
    />
    <LabelBadge
      label='User'
      value='Guess'
    />
    </div>
  ));
