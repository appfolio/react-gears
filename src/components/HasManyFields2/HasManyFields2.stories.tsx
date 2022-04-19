import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import AddressInput from '../Address/AddressInput';
import { HasManyFields2, HasManyFields2Row } from './HasManyFields2';



export default {
  title: 'HasManyFields2',
  component: HasManyFields2,
};

export const LiveExample = () => (
  <HasManyFields2
    label={text("label", "Add an Address")}
    disabled={boolean('disabled', false)}
    onAdd={action('hasManyFields onAdd')}
    maximumRows={number('maximumRows', 5)}
    minimumRows={number('minimumRows', 0)}
    reorderable={boolean('reorderable', true)}
  >
    <HasManyFields2Row rowId="row1" disabled={false}>
      <AddressInput
        value={{
          address1: '70 Castilian Dr.',
          address2: '',
          city: 'Goleta',
          state: 'CA',
          postal: '93117',
          countryCode: 'US',
        }}
      />
    </HasManyFields2Row>
    <HasManyFields2Row rowId="row2">
      <AddressInput
        value={{
          address1: '90 Castilian Dr.',
          address2: '',
          city: 'Goleta',
          state: 'CA',
          postal: '93117',
          countryCode: 'US',
        }}
      />
    </HasManyFields2Row>
  </HasManyFields2>
);

// export const RowWrapper = () => (
//   <HasManyFieldsRow
//     onDelete={action('onDelete')}
//     disabled={boolean('disabled', false)}
//     disabledReason={text('disabledReason')}
//     disabledReasonPlacement={select('placement', ['top', 'left', 'bottom', 'right'], 'top')}
//   >
//     <Input defaultValue="I can put an input (or whatever else) inside a HasManyFieldsRow" />
//   </HasManyFieldsRow>
// );

// export const AddItemButton = () => (

// );
