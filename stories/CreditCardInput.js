import React from 'react';
import { CreditCardExpiration, CreditCardInput, CreditCardNumber } from '../src';
import { storiesOf } from '@storybook/react';
import { array, number, text } from '@storybook/addon-knobs';

const TODAY = new Date();

storiesOf('CreditCardInput', module)
  .addWithInfo('Live example', () => (
    <CreditCardInput
      cardNumber={text('cardNumber', '4111 1111 1111 1111')}
      cardCVV={text('cardCVV', '12345')}
      expirationMonth={number('expirationMonth', TODAY.getMonth() + 1)}
      expirationYear={number('expirationYear', TODAY.getFullYear() + 1)}
    />
  ))
  .addWithInfo('CreditCardExpiration', () => (
    <CreditCardExpiration />
  ))
  .addWithInfo('CreditCardNumber', () => (
    <CreditCardNumber
      value={text('value', '4111111111111111')}
      allowedBrands={array('allowedBrands', [
        'american-express',
        'diners-club',
        'master-card',
        'discover',
        'jcb',
        'visa'
      ])}
    />
  ));
