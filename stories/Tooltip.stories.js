import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Tooltip } from '../src';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const LiveExample = () => (
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
);
