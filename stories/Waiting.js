import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs';
import { Icon, Waiting } from '../src';

storiesOf('Waiting', module)
  .add('Default', () => (
    <Waiting isOpen={boolean('isOpen', true)} backdrop={boolean('backdrop', true)} />
  ))
  .add('Custom Title', () => (
    <Waiting
      isOpen={boolean('isOpen', true)}
      backdrop={boolean('backdrop', true)}
      title={text('text', 'Please wait for this thing')}
    />
  ))
  .add('Children', () => (
    <Waiting
      isOpen={boolean('isOpen', true)}
      backdrop={boolean('backdrop', true)}
    >
      <Icon name="clock-o" size="4x" />
    </Waiting>
  ));
