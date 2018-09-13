import React from 'react';
import { TextCollapseByLength } from '../src';
import { action, storiesOf } from '@storybook/react';
import { boolean, number, text } from '@storybook/addon-knobs';

const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

storiesOf('TextCollapseByLength', module)
  .addWithInfo('default', () => (
    <div>
      <TextCollapseByLength
        text={text('text', loremIpsum)}
      />
    </div>
  ))
  .addWithInfo('shorter than maxLength', () => (
    <div>
      <TextCollapseByLength
        text={text('text', loremIpsum)}
        maxLength={number('maxLength', 2048)}
      />
    </div>
  ))
  .addWithInfo('with props', () => (
    <div>
      <TextCollapseByLength
        text={text('text', loremIpsum)}
        maxLength={number('maxLength', 64)}
        showMore={text('showMore', 'Gimme all')}
        showLess={text('showLess', "I don't wanna see it")}
        collapsedByDefault={boolean('collapsedByDefault', false)}
      />
    </div>
  ));
