import React from 'react';
import { CreditCardNumber } from '../src';
import { action, storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';
import uncontrollable from 'uncontrollable';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledCreditCardNumber = uncontrollable(CreditCardNumber, { value: 'onChange' });
UncontrolledCreditCardNumber.displayName = 'CreditCardNumber';
UncontrolledCreditCardNumber.propTypes = CreditCardNumber.propTypes;
UncontrolledCreditCardNumber.defaultProps = CreditCardNumber.defaultProps;

storiesOf('CreditCardNumber', module)
  .addWithInfo('Live Example', () => (
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
