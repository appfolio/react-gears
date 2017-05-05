import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { BlockPanel } from '../src';
import { select, text } from '@kadira/storybook-addon-knobs';

storiesOf('BlockPanel', module)
  .addWithInfo('with props', () => (
    <BlockPanel
      color={select('color', ['', 'primary', 'secondary', 'info', 'success', 'warning', 'danger'], 'primary')}
      title={text('title', 'Some simple content would go here')}
      onEdit={() => alert('Edit clicked!')}
    >
      Hello.
    </BlockPanel>
  ))
  .addWithInfo('with title', () => (
    <BlockPanel title={text('title', 'Some simple content would go here')}>
      Hello.
    </BlockPanel>
  ))
  .addWithInfo('with onEdit', () => (
    <BlockPanel onEdit={() => alert('Edit clicked!')}>
      Hello.
    </BlockPanel>
  ));

