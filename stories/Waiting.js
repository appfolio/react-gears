import React from 'react';
import { Icon, Waiting } from '../src';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('Waiting', module)
  .addWithInfo('Default', () => (
    <Waiting isOpen={boolean('isOpen', true)} backdrop={boolean('backdrop', true)} />
  ))
  .addWithInfo('Custom Title', () => (
    <Waiting
      isOpen={boolean('isOpen', true)}
      backdrop={boolean('backdrop', true)}
      title={text('text', 'Please wait for this thing')}
    />
  ))
  .addWithInfo('Children', () => (
    <Waiting
      isOpen={boolean('isOpen', true)}
      backdrop={boolean('backdrop', true)}
    >
      <Icon name="clock-o" size="4x" />
    </Waiting>
  ));
