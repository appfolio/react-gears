import React from 'react';
import { storiesOf, action } from '@storybook/react';

import { AddressInput, HasManyFieldsAdd, HasManyFieldsRow } from '../src';
import { Input } from 'reactstrap';

const items = [{
  address1: '50 Castilian Dr.',
  city: 'Goleta',
  state: 'CA',
  postal: 93117,
  countryCode: 'US'
}];

const updateItem = i => e => {
  items[i] = e.target.value;
}

class HasManyFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: props.items.slice()
    }
  }

  updateItem = i => update => {
    let items = this.state.items.slice();
    items[i] = update;
    this.setState({ items });
  }

  addItem = () => {
    let items = this.state.items.slice();
    items.push({
      countryCode: 'US'
    });
    this.setState({ items });
  }

  deleteItem = i => () => {
    let items = this.state.items.slice();
    items.splice(i, 1);
    this.setState({ items });
  }

  render() {
    return (
      <div>
        { this.state.items.map((item, i, items) => (
          <HasManyFieldsRow onDelete={this.deleteItem(i)} key={i + '/' + items.length}>
            <AddressInput value={item} onChange={this.updateItem(i)} />
          </HasManyFieldsRow>
        )) }

        <HasManyFieldsAdd onClick={this.addItem}>Add An Address</HasManyFieldsAdd>
      </div>
    );
  }
}

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
    <HasManyFields items={items} />
  ));
