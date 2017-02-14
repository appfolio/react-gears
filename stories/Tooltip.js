import React from 'react';
import { Tooltip } from '../src';
import { storiesOf } from '@kadira/storybook';
import { select } from '@kadira/storybook-addon-knobs';

storiesOf('Tooltip', module)
  .addWithInfo('Live example', () => (
    <div>
      <p>
        Somewhere in here is a <a id="TooltipExample">tooltip</a>.
      </p>
      <Tooltip
        placement={select('placement', ['top', 'left', 'bottom', 'right'], 'right')}
        target="TooltipExample"
      >
        Hello world!
      </Tooltip>
    </div>
  )
);
