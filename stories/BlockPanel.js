import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { BlockPanel } from '../src';

storiesOf('BlockPanel', module)
  .addWithInfo('with props', () => (
    <BlockPanel title="Some simple content would go here" url="http://www.google.com">
      Hello.
    </BlockPanel>
  ));

