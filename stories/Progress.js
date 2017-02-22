import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { number, select } from '@kadira/storybook-addon-knobs';

import { Progress } from '../src';

storiesOf('Progress', module)
  .addWithInfo('Live example', () => (
    <Progress
      color={select('color', ['info', 'success', 'warning', 'danger'], 'info')}
      value={number('value', 50, {
        range: true,
        min: 0,
        max: 100,
        step: 1,
      })}
    />
  ));
