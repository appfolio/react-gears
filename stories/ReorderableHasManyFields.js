import { boolean, number, select, text } from '@storybook/addon-knobs';
import { action, storiesOf } from '@storybook/react';
import React from 'react';
import { Input } from 'reactstrap';

import {
  AddressInput,
  ReorderableHasManyFields,
  HasManyFieldsAdd,
  HasManyFieldsRow
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

storiesOf('ReorderableHasManyFields', module)
  .addWithInfo('Live Example', () => (
    <ReorderableHasManyFields
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
    />
  ))
  .addWithInfo('Row Wrapper', () => (
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
  .addWithInfo('Add Item Button', () => (
    <HasManyFieldsAdd onClick={action('onClick')}>
      Button Label Content
    </HasManyFieldsAdd>
  ));
