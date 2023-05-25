/* eslint-disable jsx-a11y/anchor-is-valid */
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
  parameters: {
    sourceLink: 'CollapsableText/CollapsableText.tsx',
  },
};

export const LiveExample = () => (
  <CollapsableText
    collapsed={boolean('collapsed', CollapsableText.defaultProps.collapsed)}
    maxLines={number('maxLines', CollapsableText.defaultProps.maxLines)}
    moreLabel={text('showMore', CollapsableText.defaultProps.moreLabel)}
    lessLabel={text('lessLabel', CollapsableText.defaultProps.lessLabel)}
  >
    Some text <strong>with bold</strong> and <a href="#">links and other things</a>
    <br />
    {loremIpsum}
  </CollapsableText>
);

export const ShorterThanMaxLines = () => (
  <div>
    <CollapsableText maxLines={number('maxLines', 2)}>Short text</CollapsableText>
  </div>
);

export const CustomComponents = () => (
  <div>
    <CollapsableText
      moreLabel={<Icon name="circle-plus" className="text-success" />}
      lessLabel={<Icon name="circle-minus" className="text-danger" />}
    >
      {loremIpsum}
    </CollapsableText>
  </div>
);
