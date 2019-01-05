import React from 'react';
import { CollapsableText, Icon } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';

const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.`;

storiesOf('CollapsableText', module)
  .addWithInfo('Live example', () => (
    <CollapsableText
      collapsed={boolean('collapsed', CollapsableText.defaultProps.collapsed)}
      maxLength={number('maxLength', CollapsableText.defaultProps.maxLength)}
      moreLabel={text('moreLabel', CollapsableText.defaultProps.moreLabel)}
      lessLabel={text('lessLabel', CollapsableText.defaultProps.lessLabel)}
    >
      {loremIpsum}
    </CollapsableText>
  ))
  .addWithInfo('Shorter than maxLength', () => (
    <div>
      <CollapsableText
        maxLength={number('maxLength', 2048)}
      >
        {loremIpsum}
      </CollapsableText>
    </div>
  ))
  .addWithInfo('Custom components', () => (
    <div>
      <CollapsableText
        moreLabel={<Icon name="plus-circle" className="text-success" />}
        lessLabel={<Icon name="minus-circle" className="text-danger" />}
      >
        {loremIpsum}
      </CollapsableText>
    </div>
  ));
