import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { CreditCardForm } from '../src';

const TODAY = new Date();

storiesOf('CreditCardForm', module)
  .addWithInfo('default props', () => (
    <CreditCardForm onSave={console.log} />
  ))
  .addWithInfo('pre-filled props', () => (
    <CreditCardForm
      firstName="John" lastName="Doe"
      cardNumber="4111 1111 1111 1111" cardCVV="12345"
      expirationMonth={TODAY.getMonth() + 1} expirationYear={TODAY.getFullYear() + 1}
      address1="123 Main St." address2=""
      city="Anytown" state="CA" postal="12345" countryCode="US"
      onSave={console.log}
    />
  ))
;
