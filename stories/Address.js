import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Select from '../src/components/Select';
import { Address } from '../src';

storiesOf('Address', module)
  .addWithInfo('uncontrolled', () => (
    <div>
      <Address
        defaultValue={{
          address1: '123 No Way',
          address2: 'Suite 16',
          city: 'Smallsville',
          state: 'AL',
          postal: '12345-1234',
          country: 'US'
        }}
        onChange={address => console.log('address', address)}
      />
    </div>
  ))
  .addWithInfo('controlled', () => (
    <div>
      <Address
        value={{
          address1: '123 No Way',
          address2: 'Suite 16',
          city: 'Smallsville',
          state: 'AL',
          postal: '12345-1234',
          country: 'US'
        }}
        onChange={address => console.log('address', address)}
      />
    </div>
  ));

