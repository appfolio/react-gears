import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import Icon from '../Icon/Icon';
import CollapsableText from './CollapsableText';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.`;

export default {
  title: 'CollapsableText',
  component: CollapsableText,
};

export const LiveExample = () => (
  <CollapsableText
    collapsed={boolean('collapsed', CollapsableText.defaultProps.collapsed)}
    maxLength={number('maxLength', CollapsableText.defaultProps.maxLength)}
    moreLabel={text('showMore', CollapsableText.defaultProps.moreLabel)}
    lessLabel={text('lessLabel', CollapsableText.defaultProps.lessLabel)}
  >
    {loremIpsum}
  </CollapsableText>
);

export const ShorterThanMaxLength = () => (
  <div>
    <CollapsableText maxLength={number('maxLength', 2048)}>{loremIpsum}</CollapsableText>
  </div>
);

export const CustomComponents = () => (
  <div>
    <CollapsableText
      moreLabel={<Icon name="plus" className="text-success" />}
      lessLabel={<Icon name="circle-minus" className="text-danger" />}
    >
      {loremIpsum}
    </CollapsableText>
  </div>
);
