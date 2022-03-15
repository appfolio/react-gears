import { action } from '@storybook/addon-actions';
import { array } from '@storybook/addon-knobs';
import React from 'react';
import uncontrollable from 'uncontrollable';
import { CreditCardNumber } from '../src';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledCreditCardNumber = uncontrollable(CreditCardNumber, { value: 'onChange' });
UncontrolledCreditCardNumber.displayName = 'CreditCardNumber';
UncontrolledCreditCardNumber.propTypes = CreditCardNumber.propTypes;
UncontrolledCreditCardNumber.defaultProps = CreditCardNumber.defaultProps;

export default {
  title: 'CreditCardNumber',
  component: CreditCardNumber,
};

export const LiveExample = () => (
  <UncontrolledCreditCardNumber
    onChange={action('onChange')}
    types={array('types', [
      'visa',
      'master-card',
      'american-express',
      'discover',
      'diners-club',
      'jcb',
    ])}
  />
);
