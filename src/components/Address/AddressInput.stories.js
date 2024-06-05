import { action } from '@storybook/addon-actions';
import React from 'react';
import Label from '../Label/Label';
import AddressInput from './AddressInput';
import states from './util/USStates.ts';

export default {
  title: 'AddressInput',
  component: AddressInput,
  parameters: {
    sourceLink: 'Address/AddressInput.tsx',
  },
};

const defaultLabels = {
  address1: 'Address',
  address2: 'Address 2',
  city: 'City',
  state: 'State',
  postal: 'Zip',
  countryCode: 'Country',
};

export const Default = (args) => (
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
      {...args}
    />
  </div>
);
Default.args = {
  compact: false,
  onBlur: action('address onBlur'),
  onChange: action('address onChange'),
  countries: ['US'],
  disabled: false,
  error: {},
  showCountry: true,
  showLabels: false,
  labels: defaultLabels,
  hints: {},
};

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

export const Controlled = ({ address1, address2, city, state, postal, countryCode, ...args }) => (
  <div>
    <AddressInput
      value={{
        address1,
        address2,
        city,
        state,
        postal,
        countryCode,
      }}
      {...args}
    />
  </div>
);
Controlled.args = {
  address1: '123 No Way',
  address2: 'Suite 16',
  city: 'Smallsville',
  state: 'AL',
  postal: '12345-1234',
  countryCode: 'US',
  error: { address1: 'bad stuff', state: 'no' },
  onChange: action('address onChange'),
  disabled: undefined,
};
Controlled.argTypes = {
  state: {
    control: 'select',
    options: states.map((s) => s.value),
  },
  disabled: {
    control: 'boolean',
  },
};
