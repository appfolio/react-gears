import React from 'react';
import uncontrollable from 'uncontrollable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, object } from '@storybook/addon-knobs';
import { AddressInput, InternationalAddressInput, Label } from '../src';
import states from '../src/components/address/USStates.js';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledInternationalAddressInput = uncontrollable(InternationalAddressInput, { value: 'onChange' });
UncontrolledInternationalAddressInput.displayName = 'InternationalAddressInput';

storiesOf('AddressInput', module)
  .add('Live Example', () => (
    <div>
      <AddressInput
        defaultValue={{
          address1: '123 No Way',
          address2: 'Suite 16',
          city: 'Smallsville',
          state: 'AL',
          postal: '12345-1234',
          countryCode: 'US'
        }}
        onBlur={action('address onBlur')}
        onChange={action('address onChange')}
        countries={object('countries', ['US'])}
        disabled={boolean('disabled')}
        error={object('error', {})}
        showCountry={boolean('showCountry', true)}
        showLabels={boolean('showLabels', false)}
        labels={object('labels', AddressInput.defaultProps.labels)}
        hints={object('hints', AddressInput.defaultProps.hints)}
      />
    </div>
  ))
  .add('with id', () => (
    <div>
      <Label for="myid_address1">Click This Label to Focus First Input:</Label>
      <AddressInput
        defaultValue={{
          address1: '123 No Way',
          address2: 'Suite 16',
          city: 'Smallsville',
          state: 'AL',
          postal: '12345-1234',
          countryCode: 'US'
        }}
        id="myid"
      />
    </div>
  ))
  .add('controlled', () => (
    <div>
      <AddressInput
        value={{
          address1: text('address1', '123 No Way'),
          address2: text('address2', 'Suite 16'),
          city: text('city', 'Smallsville'),
          state: select('state', states.map(s => s.value), 'AL'),
          postal: text('postal', '12345-1234'),
          countryCode: text('countryCode', 'US'),
        }}
        error={object('error', { address1: 'bad stuff', state: 'no' })}
        onChange={action('address onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ))
  .addWithInfo('InternationalAddressInput', () => (
    <div>
      <UncontrolledInternationalAddressInput
        showLabels={boolean('showLabel', InternationalAddressInput.defaultProps.showLabels)}
        onBlur={action('address onBlur')}
        onChange={action('address onChange')}
        disabled={boolean('disabled')}
        error={object('error', {})}
        labels={object('labels', InternationalAddressInput.defaultProps.labels)}
        hints={object('hints', InternationalAddressInput.defaultProps.hints)}
      />
    </div>
  ));

