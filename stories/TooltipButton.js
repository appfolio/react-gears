import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import {
  TooltipButton,
} from '../src';
import { buttonColors } from './colors';

storiesOf('TooltipButton', module)
  .add('Live example', () => (
    <TooltipButton
      color={select('color', buttonColors, 'primary')}
      disabled={boolean('disabled', false)}
      tooltip="Here is a tooltip."
    >
      {text('Label', 'Click Me')}
    </TooltipButton>
  ));

// TODO
//  .add('with dropdowns', () => <h1>TODO</h1>)
//  .add('with split dropdowns', () => <h1>TODO</h1>)
//  .add('with dropups', () => <h1>TODO</h1>);
