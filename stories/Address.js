import React from 'react';
import { storiesOf, action } from '@storybook/react';
import { boolean, text, select, object } from '@storybook/addon-knobs';
import { AddressInput } from '../src';
import states from '../src/components/address/USStates.js';

storiesOf('AddressInput', module)
  .addWithInfo('uncontrolled', () => (
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
        onChange={action('address onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ))
  .addWithInfo('controlled', () => (
    <div>
      <AddressInput
        value={{
          address1: text('address1', '123 No Way'),
          address2: text('address2', 'Suite 16'),
          city: text('city', 'Smallsville'),
          state: select('state', states.map(s => s.value), 'AL'),
          postal: text('postal', '12345-1234'),
          countryCode: 'US'
        }}
        error={object('error', { address1: 'bad stuff', state: 'no' })}
        onChange={action('address onChange')}
        disabled={boolean('disabled')}
      />
    </div>
  ));
