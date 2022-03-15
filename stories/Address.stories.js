import { action } from '@storybook/addon-actions';
import { boolean, text, select, object } from '@storybook/addon-knobs';
import React from 'react';
import uncontrollable from 'uncontrollable';
import { AddressInput, InternationalAddressInput, Label } from '../src';
import states from '../src/components/address/USStates.ts';

// Wrapping as uncontrolled so that story is easier to use:
const UncontrolledInternationalAddressInput = uncontrollable(InternationalAddressInput, {
  value: 'onChange',
});
UncontrolledInternationalAddressInput.displayName = 'InternationalAddressInput';

export default {
  title: 'AddressInput',
  component: AddressInput,
};

const defaultLabels = {
  address1: 'Address',
  address2: 'Address 2',
  city: 'City',
  state: 'State',
  postal: 'Zip',
  countryCode: 'Country',
};

export const LiveExample = () => (
  <div>
    <AddressInput
      defaultValue={{
        address1: '123 No Way',
        address2: 'Suite 16',
        city: 'Smallsville',
        state: 'AL',
        postal: '12345-1234',
        countryCode: 'US',
      }}
      compact={boolean('compact', false)}
      onBlur={action('address onBlur')}
      onChange={action('address onChange')}
      countries={object('countries', ['US'])}
      disabled={boolean('disabled')}
      error={object('error', {})}
      showCountry={boolean('showCountry', true)}
      showLabels={boolean('showLabels', false)}
      labels={object('labels', defaultLabels)}
      hints={object('hints', {})}
    />
  </div>
);

export const WithId = () => (
  <div>
    <Label for="myid_address1">Click This Label to Focus First Input:</Label>
    <AddressInput
      defaultValue={{
        address1: '123 No Way',
        address2: 'Suite 16',
        city: 'Smallsville',
        state: 'AL',
        postal: '12345-1234',
        countryCode: 'US',
      }}
      id="myid"
    />
  </div>
);

export const Controlled = () => (
  <div>
    <AddressInput
      value={{
        address1: text('address1', '123 No Way'),
        address2: text('address2', 'Suite 16'),
        city: text('city', 'Smallsville'),
        state: select(
          'state',
          states.map((s) => s.value),
          'AL'
        ),
        postal: text('postal', '12345-1234'),
        countryCode: text('countryCode', 'US'),
      }}
      error={object('error', { address1: 'bad stuff', state: 'no' })}
      onChange={action('address onChange')}
      disabled={boolean('disabled')}
    />
  </div>
);

export const International = () => (
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
);
