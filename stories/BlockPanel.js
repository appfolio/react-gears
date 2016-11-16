import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { BlockPanel } from '../src';

storiesOf('BlockPanel', module)
  .addWithInfo('with props', () => (
    <BlockPanel
      title="Some simple content would go here"
      onEdit={() => alert('Edit clicked!')}
    >
      Hello.
    </BlockPanel>
  ))
  .addWithInfo('with title', () => (
    <BlockPanel title="Some simple content would go here">
      Hello.
    </BlockPanel>
  ))
  .addWithInfo('with onEdit', () => (
    <BlockPanel onEdit={() => alert('Edit clicked!')}>
      Hello.
    </BlockPanel>
  ));

