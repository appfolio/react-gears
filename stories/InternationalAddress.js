import React from 'react';
import uncontrollable from 'uncontrollable';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, text, select, object } from '@storybook/addon-knobs';
import { InternationalAddressInput, Label } from '../src';
import states from '../src/components/address/USStates.js';


storiesOf('InternationAddressInput', module)
  .add('Live Example', () => (
    <div>
      <InternationalAddressInput
        defaultValue={{
          address1: '123 No Way',
          address2: 'Suite 16',
          city: 'Smallsville',
          state: 'AL',
          postal: '12345-1234',
          countryCode: 'US'
        }}
        className={text('className')}
        disabled={boolean('disabled')}
        error={object('error', {})}
        hints={object('hints', InternationalAddressInput.defaultProps.hints)}
        onBlur={action('address onBlur')}
        onChange={action('address onChange')}
        showLabels={boolean('showLabels', false)}
      />
    </div>
  ))
  .add('with id', () => (
    <div>
      <Label for="myid_address1">Click This Label to Focus First Input:</Label>
      <InternationalAddressInput
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
      <InternationalAddressInput
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
  ));

