import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Address } from '../src';

storiesOf('Address', module)
  .addWithInfo('defaults', () => (
    <div>
      <Address onChange={address => console.log('address', address)} />
    </div>
  ))
  .addWithInfo('with props', () => (
    <div>
      <Address
        address1="123 No Way"
        city="Smallsville"
        state="AL"
        postal="12345-1234"
        onChange={address => console.log('a', address)}
      />
    </div>
  ));

