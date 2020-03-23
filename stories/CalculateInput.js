import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { CalculateInput } from '../src';

storiesOf('CalculateInput', module)
  .add('calculate input props', () => (
    <CalculateInput />
  ));
