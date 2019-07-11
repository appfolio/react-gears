import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Tooltip } from '../src';

storiesOf('Tooltip', module)
  .add('Live example', () => (
    <div>
      <p>
        Somewhere in here is a <span id="TooltipExample">tooltip</span>.
      </p>
      <Tooltip
        placement={select('placement', ['top', 'left', 'bottom', 'right'], 'right')}
        target="TooltipExample"
      >
        Hello world!
      </Tooltip>
    </div>
  ));
