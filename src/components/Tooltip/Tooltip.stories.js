import React from 'react';
import Tooltip from './Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    sourceLink: 'Tooltip/Tooltip.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <p>
      Somewhere in here is a <span id="TooltipExample">tooltip</span>.
    </p>
    <Tooltip target="TooltipExample" {...args}>
      Hello world!
    </Tooltip>
  </div>
);
LiveExample.args = {
  placement: 'right',
};
LiveExample.argTypes = {
  placement: {
    control: { type: 'select' },
    options: ['top', 'left', 'bottom', 'right'],
  },
};
