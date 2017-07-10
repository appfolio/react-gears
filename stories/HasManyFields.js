import React from 'react';
import { storiesOf, action } from '@storybook/react';

import { AddressInput, HasManyFields, HasManyFieldsAdd, HasManyFieldsRow } from '../src';
import { Input } from 'reactstrap';
import { boolean } from '@storybook/addon-knobs';

const items = [{
  address1: '50 Castilian Dr.',
  city: 'Goleta',
  state: 'CA',
  postal: '93117',
  countryCode: 'US'
}];

storiesOf('HasManyFields', module)
  .addWithInfo('Row Wrapper', () => (
    <HasManyFieldsRow onDelete={action('onDelete')}>
      <Input defaultValue="I can put an input (or whatever else) inside a HasManyFieldsRow" readOnly />
    </HasManyFieldsRow>
  ))
  .addWithInfo('Add Item Button', () => (
    <HasManyFieldsAdd onClick={action('onClick')}>Button Label Content</HasManyFieldsAdd>
  ))
  .addWithInfo('Full Example', () => (
    <HasManyFields defaultValue={items} template={AddressInput} blank={{ countryCode: 'US' }} label="Add an Address" disabled={boolean('disabled', false)} />
  ));
