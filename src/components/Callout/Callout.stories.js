import { select, text } from '@storybook/addon-knobs';
import React from 'react';
import { colors } from '../../dev_util/colors';
import Callout from './Callout';

export default {
  title: 'Callout',
  component: Callout,
};

export const LiveExample = () => (
  <div>
    <Callout
      color={select('color', colors, Callout.defaultProps.color)}
      background={select('background', colors, Callout.defaultProps.background)}
      placement={select(
        'placement',
        ['top', 'right', 'bottom', 'left'],
        Callout.defaultProps.placement
      )}
    >
      <h3>Hello World</h3>
      {text(
        'content',
        `Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore
                          et dolore magna aliqua.  Ut enim ad minim veniam,
                          quis nostrud exercitation ullamco laboris nisi ut
                          aliquip ex ea commodo consequat.`
      )}
    </Callout>
  </div>
);
