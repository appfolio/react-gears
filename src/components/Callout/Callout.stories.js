import React from 'react';
import { colors } from '../../tooling/colors';
import Callout from './Callout';

export default {
  title: 'Callout',
  component: Callout,
  parameters: {
    sourceLink: 'Callout/Callout.tsx',
  },
};

export const LiveExample = ({ content, ...args }) => (
  <div>
    <Callout {...args}>
      <h3>Hello World</h3>
      {content}
    </Callout>
  </div>
);
LiveExample.args = {
  color: Callout.defaultProps.color,
  background: Callout.defaultProps.background,
  placement: Callout.defaultProps.placement,
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua.  Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat.`,
};
LiveExample.argTypes = {
  color: {
    options: [...colors],
    control: { type: 'select' },
  },
  background: {
    options: [...colors],
    control: { type: 'select' },
  },
  placement: {
    options: ['top', 'right', 'bottom', 'left'],
    control: { type: 'select' },
  },
};
