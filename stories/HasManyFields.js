import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  AddressInput,
  HasManyFields,
  HasManyFieldsAdd,
  HasManyFieldsRow,
  Input
} from '../src';

const items = [
  {
    address1: '50 Castilian Dr.',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  },
  {
    address1: '70 Castilian Dr.',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  },
  {
    address1: '90 Castilian Dr.',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US'
  },
];

storiesOf('HasManyFields', module)
  .add('Live Example', () => (
    <HasManyFields
      animated={boolean('animated', false)}
      defaultValue={items}
      template={AddressInput}
      blank={{ countryCode: 'US' }}
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
      animated={boolean('animated', false)}
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
