import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';

import { Progress } from '../src';

storiesOf('Progress', module)
  .addWithInfo('Live example', () => (
    <Progress
      color={select('color', ['', 'info', 'success', 'warning', 'danger'], '')}
      value={number('value', 50, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      })}
    />
  ));
