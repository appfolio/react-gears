import { action } from '@storybook/addon-actions';
import React from 'react';
import uncontrollable from 'uncontrollable';
import CreditCardNumber from './CreditCardNumber';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledCreditCardNumber = uncontrollable(CreditCardNumber, { value: 'onChange' });
UncontrolledCreditCardNumber.displayName = 'CreditCardNumber';
UncontrolledCreditCardNumber.propTypes = CreditCardNumber.propTypes;
UncontrolledCreditCardNumber.defaultProps = CreditCardNumber.defaultProps;

export default {
  title: 'CreditCardNumber',
  component: CreditCardNumber,
  parameters: {
    sourceLink: 'Input/CreditCardNumber.tsx',
  },
};

export const LiveExample = (args) => <UncontrolledCreditCardNumber {...args} />;
LiveExample.args = {
  onChange: action('onChange'),
  types: ['visa', 'master-card', 'american-express', 'discover', 'diners-club', 'jcb'],
};
