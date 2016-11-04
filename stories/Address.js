import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Address } from '../src';

storiesOf('Address', module)
  .addWithInfo('with props', () => (
    <div>
      <Address />
    </div>
  ));

