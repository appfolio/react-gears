import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Label, List, SortableList } from '../src';
import data from './data';

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function filterItems(filter, item) {
  const f = filter.toLowerCase();
  return item.first.toLowerCase().includes(f) ||
         item.last.toLowerCase().includes(f) ||
         // eslint-disable-next-line eqeqeq
         item.fee == filter;
}

export default {
  title: 'List',
  component: List,
};

export const LiveExample = () => (
  <List
    height={text('height', '70vh')}
    items={data}
    onExpand={() => <h1>Hello!</h1>}
    onSelect={action('onSelect')}
    select={select('select', ['', 'checkbox', 'radio', 'switch'], 'checkbox')}
    flush={boolean('flush')}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="mr-auto pb-2">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p>{item.address}</p>
          <Label className="text-muted">Base late fee for October 2019:</Label> {currency.format(item.fee)}
        </div>
        <div className="pr-3 pb-2">
          <Label className="text-muted d-block">Late Fee Amount</Label>
          {currency.format(item.fee)}
        </div>
        <div className="pr-3">
          <Label className="text-muted d-block">Balance Subject to Late Fees</Label>
          {currency.format(item.fee)}
        </div>
      </div>
    )}
  </List>
);

export const SortableTableExample = () => (
  <SortableList
    className={text('className', '')}
    filterPlaceholder={text('filterPlaceholder', SortableList.defaultProps.filterPlaceholder)}
    flush={boolean('flush', true)}
    height={text('height', '70vh')}
    items={data.slice(0, 20)}
    onExpand={item => (
      <>
        <Label className="text-muted">Base late fee for October 2019:</Label> {currency.format(item.fee)}
      </>
    )}
    onFilter={filterItems}
    onSelect={action('onSelect')}
    select={select('select', ['', 'checkbox', 'radio', 'switch'], 'checkbox')}
    sort={{ property: 'last' }}
    sortByLabel={text('sortByLabel', SortableList.defaultProps.sortByLabel)}
    sortOptions={[
      { label: 'First Name', value: 'first' },
      { label: 'Last Name', value: 'last' },
      { label: 'Late Fee', value: 'fee' },
    ]}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="mr-auto pb-2">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p className="mb-0">{item.address}</p>
        </div>
        <div className="pr-3 pb-2">
          <Label className="text-muted d-block">Late Fee Amount</Label>
          {currency.format(item.fee)}
        </div>
        <div className="pr-3">
          <Label className="text-muted d-block">Balance Subject to Late Fees</Label>
          {currency.format(item.fee)}
        </div>
      </div>
    )}
  </SortableList>
);
