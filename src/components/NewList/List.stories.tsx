import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import React from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import Input from '../Input/Input';
import ListHeader from './ListHeader';
import ListHeaderCheckbox from './ListHeaderCheckbox';
import ListHeaderChildren from './ListHeaderChildren';
import ListHeaderFilter from './ListHeaderFilter';
import ListHeaderSlots from './ListHeaderSlots';
import ListHeaderSortDirection from './ListHeaderSortDirection';
import ListHeaderSortOptions from './ListHeaderSortOptions';

export default {
  title: 'New List',
};

const items = ['foo', 'bar'];

function renderItem(item: string) {
  return item;
}

const sortOptions = [
  { label: 'Other', value: 'other' },
  { label: 'Label', value: 'label' },
];

const sortValues = sortOptions.map((option) => option.value);

export const NewListExample = () => (
  <div>
    <ListHeader
      checkbox={boolean('checkbox', true)}
      checkboxState={select(
        'checkboxState',
        ['checked', 'unchecked', 'indeterminate'],
        'unchecked'
      )}
      filterable={boolean('filterable', true)}
      filterValue={text('filterValue', '')}
      onCheckboxChange={action('onCheckboxChange')}
      onFilterChange={action('onFilterChange')}
      onSortDirectionToggle={action('onSortDirectionToggle')}
      onSortValueChange={action('onSortValueChange')}
      sortable={boolean('sortable', true)}
      sortDirection={select('sortDirection', ['ascending', 'descending'], 'ascending')}
      sortOptions={sortOptions}
      sortValue={select('sortValue', sortValues, 'label')}
    />
    <ListGroup className="rounded-bottom">
      {items.map((item) => (
        <ListGroupItem key={item}>{renderItem(item)}</ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export const FullyDecomposed = () => (
  <div>
    <ListHeaderSlots
      checkbox={
        <ListHeaderCheckbox checkboxState="unchecked" onChange={action('Checkbox: onChange')} />
      }
      filter={
        <ListHeaderFilter
          placeholder="Search for an item"
          onChange={action('Filter: onChange')}
          value=""
        />
      }
      sortOptions={
        <ListHeaderSortOptions
          options={[
            { label: 'Title', value: 'title' },
            { label: 'Text', value: 'text' },
          ]}
          value="text"
          onChange={action('Sort Options: onChange')}
        />
      }
      sortDirection={
        <ListHeaderSortDirection
          direction="ascending"
          onClick={action('Sort Direction: onClick')}
        />
      }
    />
    <ListGroup>
      {items.map((item) => (
        <ListGroupItem key={item} className="list-group-item-action">
          <input type="checkbox" className="form-check-input me-1" />
          <div>
            <ListGroupItemHeading>{item.toUpperCase()}</ListGroupItemHeading>
            <ListGroupItemText>{item}</ListGroupItemText>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export const NoSlotsAllChildren = () => (
  <div>
    <ListHeaderChildren>
      <ListHeaderCheckbox checkboxState="unchecked" onChange={action('Checkbox: onChange')} />
      <ListHeaderFilter
        placeholder="Search for an item"
        onChange={action('Filter: onChange')}
        value=""
      />
      <ListHeaderSortOptions
        options={[
          { label: 'Title', value: 'title' },
          { label: 'Text', value: 'text' },
        ]}
        value="text"
        onChange={action('Sort Options: onChange')}
      />
      <ListHeaderSortDirection direction="ascending" onClick={action('Sort Direction: onClick')} />
    </ListHeaderChildren>
    <ListGroup>
      {items.map((item) => (
        <ListGroupItem key={item} className="list-group-item-action">
          <Input type="checkbox" />
          <div>
            <ListGroupItemHeading>{item.toUpperCase()}</ListGroupItemHeading>
            <ListGroupItemText>{item}</ListGroupItemText>
          </div>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);
