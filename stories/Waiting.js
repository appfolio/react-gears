import React from 'react';
import { Waiting } from '../src';
import { storiesOf } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';

storiesOf('Waiting', module)
  .addWithInfo('Default', () => (
    <Waiting isOpen={boolean('isOpen', true)} backdrop={boolean('backdrop', true)} />
  ))
  .addWithInfo('Custom Title', () => (
    <Waiting isOpen={boolean('isOpen', true)} backdrop={boolean('backdrop', true)} title="Please wait for this thing" />
  ));
