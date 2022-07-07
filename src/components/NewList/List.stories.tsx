import { action } from '@storybook/addon-actions';
import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Input from '../Input/Input';
import ListHeader from './ListHeader';
import ListHeaderCheckbox from './ListHeaderCheckbox';
import ListHeaderFilter from './ListHeaderFilter';
import ListHeaderSort from './ListHeaderSort';

export default {
  title: 'New List/Controlled',
};

const items = ['foo', 'bar'];

function renderItem(item: string) {
  return (
    <>
      <ListGroupItemHeading>{item.toUpperCase()}</ListGroupItemHeading>
      <ListGroupItemText>{item}</ListGroupItemText>
    </>
  );
}

const sortOptions = [
  { label: 'Other', value: 'other' },
  { label: 'Label', value: 'label' },
];

export const NewListExample = () => (
  <div>
    <ListHeader className="justify-content-between">
      <div className="d-flex">
        <ListHeaderCheckbox checkboxState="unchecked" onChange={action('Checkbox: onChange')} />
        <ListHeaderFilter
          placeholder="Search for an item"
          onChange={action('Filter: onChange')}
          value=""
        />
      </div>
      <ListHeaderSort
        direction="ascending"
        onDirectionClick={action('Sort: onDirectionClick')}
        onValueChange={action('Sort: onValueChange')}
        options={sortOptions}
        value="label"
      />
    </ListHeader>
    <ListGroup>
      {items.map((item) => (
        <ListGroupItem key={item} className="list-group-item-action">
          <div className="d-flex align-items-center">
            <Input type="checkbox" className="me-3" />
            <div>{renderItem(item)}</div>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);
