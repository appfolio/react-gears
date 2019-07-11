import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { array } from '@storybook/addon-knobs';
import uncontrollable from 'uncontrollable';
import { CreditCardNumber } from '../src';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledCreditCardNumber = uncontrollable(CreditCardNumber, { value: 'onChange' });
UncontrolledCreditCardNumber.displayName = 'CreditCardNumber';
UncontrolledCreditCardNumber.propTypes = CreditCardNumber.propTypes;
UncontrolledCreditCardNumber.defaultProps = CreditCardNumber.defaultProps;

storiesOf('CreditCardNumber', module)
  .add('Live Example', () => (
    <UncontrolledCreditCardNumber
      onChange={action('onChange')}
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
