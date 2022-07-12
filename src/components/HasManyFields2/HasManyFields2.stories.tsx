import { action } from '@storybook/addon-actions';
import { boolean, text, select } from '@storybook/addon-knobs';
import { action as mobxAction, makeObservable, observable, runInAction } from 'mobx';
import { observer } from 'mobx-react-lite';
import React from 'react';
import AddressInput from '../Address/AddressInput';
import { HasManyFields2 } from './HasManyFields2';
import { HasManyFields2Row } from './HasManyFields2Row';

export default {
  title: 'HasManyFields2',
  component: HasManyFields2,
  argTypes: {
    minimumRows: { control: { type: 'number', min: 0, max: 10 } },
    maxiumRows: { control: { type: 'number', min: 0, max: 10 } },
    reorderable: {control: 'boolean' },
  },
  subcomponents: { HasManyFields2Row }
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

  maximumRows = 5;

  minimumRows = 1;

  reorderable = true;

  addButtonLabel = 'Add an Address';

  constructor() {
    makeObservable(this, {
      addresses: observable,
      addAddress: mobxAction,
      maximumRows: observable,
      minimumRows: observable,
      reorderable: observable,
      addButtonLabel: observable,
      orderChanged: mobxAction,
      rowDeleted: mobxAction,
    });
  }

  addAddress() {
    const defaultAddress = {
      address1: `${Math.floor(Math.random() * 1000)} Castilian Dr.`,
      address2: '',
      city: 'Goleta',
      state: 'CA',
      postal: '93117',
      countryCode: 'US',
      rowId: crypto.randomUUID(),
    };
    this.addresses.push(defaultAddress);
  }

  orderChanged(order: string[]) {
    // TODO: make this not O(n^2)
    const newAddresses = order
      .map((rowId) => this.addresses.find((address) => address.rowId === rowId))
      .filter((address) => address !== undefined) as Address[];

    this.addresses = newAddresses;
  }

  rowDeleted(rowId: string) {
    this.addresses = this.addresses.filter((address) => address.rowId !== rowId);
  }
}
const addressStore = new AddressStore();

const HasManyAddresses: React.FC<{ store: AddressStore }> = observer(({ store }) => (
  <HasManyFields2
    label={store.addButtonLabel}
    disabled={false}
    onAdd={() => {
      store.addAddress();
      action('hasManyFields onAdd')();
    }}
    onOrderChanged={(order) => {
      store.orderChanged(order);
      action('order changed')();
    }}
    maximumRows={store.maximumRows}
    minimumRows={store.minimumRows}
    reorderable={store.reorderable}
  >
    {store.addresses.map((address) => (
      <HasManyFields2Row
        key={address.rowId}
        rowId={address.rowId}
        disabled={boolean(`row ${address.rowId} disabled`, false)}
        disabledReason={text(`row ${address.rowId} disabledReason`, 'disabledReason')}
        disabledReasonPlacement={select(`row ${address.rowId} disabledReasonPlacement`, ['top', 'left', 'bottom', 'right'], 'right')}
        deleteable
        onDelete={() => {
          store.rowDeleted(address.rowId);
          action(`hasManyFieldsRow onDelete: rowId=${address.rowId}`)();
        }}
      >
        <AddressInput value={address} />
      </HasManyFields2Row>
    ))}
  </HasManyFields2>
));

interface Controls {
  minimumRows: number;
  maximumRows: number;
  reorderable: boolean;
  addButtonLabel: string;
}

export const LiveExample = (args: Controls) => {
  runInAction(() => {
    addressStore.minimumRows = args.minimumRows;
    addressStore.maximumRows = args.maximumRows;
    addressStore.reorderable = args.reorderable;
    addressStore.addButtonLabel = args.addButtonLabel;
  });

  return (<HasManyAddresses store={addressStore} />);
}

LiveExample.args = {
  minimumRows: 1,
  maximumRows: 5,
  reorderable: true,
  addButtonLabel: 'Add an Address',
}
