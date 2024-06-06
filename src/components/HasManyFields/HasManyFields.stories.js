import { action } from '@storybook/addon-actions';
import React from 'react';
import AddressInput from '../Address/AddressInput';
import Input from '../Input/Input';
import HasManyFields from './HasManyFields';
import HasManyFieldsAdd from './HasManyFieldsAdd';
import HasManyFieldsRow from './HasManyFieldsRow';

const items = [
  {
    address1: '50 Castilian Dr.',
    address2: '',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US',
  },
  {
    address1: '70 Castilian Dr.',
    address2: '',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US',
  },
  {
    address1: '90 Castilian Dr.',
    address2: '',
    city: 'Goleta',
    state: 'CA',
    postal: '93117',
    countryCode: 'US',
  },
];

export default {
  title: 'HasManyFields',
  component: HasManyFields,
  parameters: {
    sourceLink: 'HasManyFields/HasManyFields.js',
  },
};

export const LiveExample = (args) => (
  <HasManyFields
    defaultValue={items}
    template={AddressInput}
    blank={{
      address1: '',
      address2: '',
      city: '',
      state: '',
      postal: '',
      countryCode: 'US',
    }}
    label="Add an Address"
    {...args}
  />
);
LiveExample.args = {
  disabled: false,
  onAdd: action('hasManyFields onAdd'),
  onRemove: action('hasManyFields onRemove'),
  onUpdate: action('hasManyFields onUpdate'),
  onChange: action('hasManyFields onChange'),
  minimumRows: 1,
  maximumRows: 5,
  reorderable: false,
};

export const RowWrapper = (args) => (
  <HasManyFieldsRow {...args}>
    <Input defaultValue="I can put an input (or whatever else) inside a HasManyFieldsRow" />
  </HasManyFieldsRow>
);
RowWrapper.args = {
  onDelete: action('onDelete'),
  disabled: false,
  disabledReason: undefined,
  disabledReasonPlacement: 'top',
};
RowWrapper.argTypes = {
  disabledReasonPlacement: {
    control: { type: 'select' },
    options: ['top', 'left', 'bottom', 'right'],
  },
};

export const AddItemButton = () => (
  <HasManyFieldsAdd onClick={action('onClick')}>Button Label Content</HasManyFieldsAdd>
);
