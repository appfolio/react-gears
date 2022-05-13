import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { action as mobxAction, makeObservable, observable } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import AddressInput from '../Address/AddressInput';
import { HasManyFields2, HasManyFields2Row } from './HasManyFields2';

export default {
  title: 'HasManyFields2',
  component: HasManyFields2,
};

type Address = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  postal: string;
  countryCode: string;
  rowId: string;
};
class AddressStore {
  addresses: Address[] = [
    {
      address1: '90 Castilian Dr.',
      address2: '',
      city: 'Goleta',
      state: 'CA',
      postal: '93117',
      countryCode: 'US',
      rowId: crypto.randomUUID(),
    },
    {
      address1: '70 Castilian Dr.',
      address2: '',
      city: 'Goleta',
      state: 'CA',
      postal: '93117',
      countryCode: 'US',
      rowId: crypto.randomUUID(),
    },
  ];

  order: string[] = this.addresses.map(address => address.rowId);

  constructor() {
    makeObservable(this, {
      addresses: observable,
      order: observable,
      addAddress: mobxAction,
      orderChanged: mobxAction,
    });
  }

  addAddress() {
    const defaultAddress = {
      address1: '90 Castilian Dr.',
      address2: '',
      city: 'Goleta',
      state: 'CA',
      postal: '93117',
      countryCode: 'US',
      rowId: crypto.randomUUID(),
    };
    this.addresses.push(defaultAddress);
    this.order.push(defaultAddress.rowId);
    console.log("addAddress", this.addresses);
  }

  orderChanged(order: string[]) {
    console.log("order changed", order);
    this.order = order;
  }
}
const addressStore = new AddressStore();

const HasManyAddresses: React.FC<{store: AddressStore}> = observer(({store}) => (
    <HasManyFields2
      label={text('label', 'Add an Address')}
      disabled={boolean('disabled', false)}
      onAdd={() => {
        store.addAddress();
        action('hasManyFields onAdd')();
      }}
      onOrderChanged={(order) => {
        store.orderChanged(order);
        action('order changed')();
      }}
      maximumRows={number('maximumRows', 5)}
      minimumRows={number('minimumRows', 0)}
      reorderable={boolean('reorderable', true)}
    >
      {store.addresses.map((address) => (
        <HasManyFields2Row
          key={address.rowId}
          rowId={address.rowId}
          disabled={boolean('disabled', false)}
          disabledReason={undefined}
          disabledReasonPlacement={undefined}
          onDelete={action(`hasManyFieldsRow onDelete: rowId=${address.rowId}`)}
        >
          <AddressInput value={address} />
        </HasManyFields2Row>
      ))}
    </HasManyFields2>
  ));

  export const LiveExample = () => (<HasManyAddresses store={addressStore} />);
