import { select } from '@storybook/addon-knobs';
import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    sourceLink: 'Tooltip/Tooltip.tsx',
  },
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
