import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { CreditCardForm } from '../src';

storiesOf('CreditCardForm', module)
  .addWithInfo('default props', () => (
    <CreditCardForm onSave={console.log} />
  ))
;
