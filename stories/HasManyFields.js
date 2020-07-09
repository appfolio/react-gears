import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  AddressInput,
  HasManyFields,
  HasManyFieldsAdd,
  HasManyFieldsRow,
  Input,
  Select
} from '../src';
import COUNTRIES from '../src/components/address/Countries';

const items = [
  {
    address1: '50 Castilian Dr.',
    address2: '',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  },
  {
    address1: '70 Castilian Dr.',
    address2: '',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  },
  {
    address1: '90 Castilian Dr.',
    address2: '',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  },
];

const UncontrolledSelect = () => <Select options={COUNTRIES} />;

storiesOf('HasManyFields', module)
  .add('Uncontrolled inputs', () => (
    <HasManyFields
      template={UncontrolledSelect}
      label="Add a state"
      disabled={boolean('disabled', false)}
      onAdd={action('hasManyFields onAdd')}
      onRemove={action('hasManyFields onRemove')}
      onUpdate={action('hasManyFields onUpdate')}
      onChange={action('hasManyFields onChange')}
      minimumRows={number('minimumRows', 1)}
      maximumRows={number('maximumRows', 5)}
      reorderable={boolean('reorderable', false)}
    />
  ))
  .add('Live Example', () => (
    <HasManyFields
      defaultValue={items}
      template={AddressInput}
      blank={{
        address1: '',
        address2: '',
        city: '',
        state: '',
        postal: '',
        countryCode: 'US'
      }}
      label="Add an Address"
      disabled={boolean('disabled', false)}
      onAdd={action('hasManyFields onAdd')}
      onRemove={action('hasManyFields onRemove')}
      onUpdate={action('hasManyFields onUpdate')}
      onChange={action('hasManyFields onChange')}
      minimumRows={number('minimumRows', 1)}
      maximumRows={number('maximumRows', 5)}
      reorderable={boolean('reorderable', false)}
    />
  ))
  .add('Row Wrapper', () => (
    <HasManyFieldsRow
      onDelete={action('onDelete')}
      disabled={boolean('disabled', false)}
      disabledReason={text('disabledReason')}
      disabledReasonPlacement={select(
        'placement',
        ['top', 'left', 'bottom', 'right'],
        'top'
      )}
    >
      <Input defaultValue="I can put an input (or whatever else) inside a HasManyFieldsRow" />
    </HasManyFieldsRow>
  ))
  .add('Add Item Button', () => (
    <HasManyFieldsAdd onClick={action('onClick')}>
      Button Label Content
    </HasManyFieldsAdd>
  ));
