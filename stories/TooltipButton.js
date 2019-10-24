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
