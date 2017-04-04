import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { CreditCardExpiration } from '../src';

storiesOf('CreditCardExpiration', module)
  .addWithInfo('default props', () => (
    <CreditCardExpiration />
  ))
;
