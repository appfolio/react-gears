import React from 'react';
import { CreditCardNumber } from '../src';
import { action, storiesOf } from '@storybook/react';
import { array, text } from '@storybook/addon-knobs';

storiesOf('CreditCardNumber', module)
  .addWithInfo('Live Example', () => (
    <CreditCardNumber
      onChange={action('onChange')}
      value={text('value', null)}
      types={array('types', [
        'visa',
        'master-card',
        'american-express',
        'discover',
        'diners-club',
        'jcb'
      ])}
    />
  ));
