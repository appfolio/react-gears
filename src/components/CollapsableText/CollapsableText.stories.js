/* eslint-disable jsx-a11y/anchor-is-valid */
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

export const LiveExample = (args) => (
  <CollapsableText {...args}>
    Some text <strong>with bold</strong> and <a href="#">links and other things</a>
    <br />
    {loremIpsum}
  </CollapsableText>
);
LiveExample.args = {
  collapsed: CollapsableText.defaultProps.collapsed,
  maxLines: CollapsableText.defaultProps.maxLines,
  moreLabel: CollapsableText.defaultProps.moreLabel,
  lessLabel: CollapsableText.defaultProps.lessLabel,
  alignToggleButton: CollapsableText.defaultProps.alignToggleButton,
};
LiveExample.argTypes = {
  alignToggleButton: {
    options: ['start', 'center', 'end', 'auto'],
    control: { type: 'radio' },
  },
};

export const ShorterThanMaxLines = ({ maxLines }) => (
  <div>
    <CollapsableText maxLines={maxLines}>Short text</CollapsableText>
  </div>
);
ShorterThanMaxLines.args = {
  maxLines: 2,
};

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

export const AlignToggleButtonStart = () => (
  <div>
    <CollapsableText alignToggleButton="start">{loremIpsum}</CollapsableText>
  </div>
);

export const AlignToggleButtonCenter = () => (
  <div>
    <CollapsableText alignToggleButton="center">{loremIpsum}</CollapsableText>
  </div>
);

export const AlignToggleButtonEnd = () => (
  <div>
    <CollapsableText alignToggleButton="end">{loremIpsum}</CollapsableText>
  </div>
);

export const AlignToggleButtonAuto = () => (
  <div>
    <CollapsableText alignToggleButton="auto">{loremIpsum}</CollapsableText>
  </div>
);
