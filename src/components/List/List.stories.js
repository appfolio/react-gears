import { action } from '@storybook/addon-actions';
import React, { useState, useEffect } from 'react';
import Label from '../Label/Label';
import List from './List';
import data from './util/data';

export default {
  title: 'List',
  component: List,
  parameters: {
    sourceLink: 'List/List.tsx',
  },
};

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const HelloRow = () => <h1>Hello!</h1>;

const ItemRow = React.forwardRef(({ item }, ref) => (
  <div ref={ref} className="d-flex justify-content-between flex-column flex-sm-row">
    <div className="me-auto pb-2">
      <h4 className="m-0">
        {item.first} {item.last}
      </h4>
      <p>{item.address}</p>
      <Label className="text-muted">Base late fee for October 2019:</Label>{' '}
      {currency.format(item.fee)}
    </div>
    <div className="pe-3 pb-2">
      {currency.format(item.fee)}
      <Label className="text-muted d-block">Late Fee Amount</Label>
    </div>
    <div className="pe-3">
      {currency.format(item.fee)}
      <Label className="text-muted d-block">Balance Subject to Late Fees</Label>
    </div>
  </div>
));

export const JustItems = (args) => (
  <List items={data} {...args}>
    {(item) => <ItemRow item={item} />}
  </List>
);
JustItems.args = {
  height: '70vh',
  striped: false,
  flush: undefined,
};

export const ScrollToItem = ({ scrollToId, ...args }) => {
  const itemRef = React.createRef();

  useEffect(() => {
    itemRef.current.scrollIntoView();
  });

  return (
    <List items={data} {...args}>
      {(item) => <ItemRow ref={item.id === scrollToId ? itemRef : undefined} item={item} />}
    </List>
  );
};
ScrollToItem.args = {
  height: '70vh',
  striped: false,
  flush: undefined,
  scrollToId: 10,
};

export const SaveScrollPositionBetweenPageLoads = (args) => (
  <List {...args} items={data}>
    {(item) => <ItemRow item={item} />}
  </List>
);
SaveScrollPositionBetweenPageLoads.args = {
  height: '70vh',
  scrollPositionKey: 'list-example',
  striped: false,
  flush: undefined,
};

export const WithEverything = ({ onFilter, onSelect, onSort, ...args }) => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState({ property: 'last', ascending: true });
  return (
    <List
      filter={filter}
      items={data}
      onExpand={HelloRow}
      onFilter={(val) => {
        onFilter(val);
        setFilter(val);
      }}
      onSelect={onSelect}
      onSort={(sortVal) => {
        onSort(sortVal);
        setSort(sortVal);
      }}
      sort={sort}
      sortOptions={[
        { label: 'First Name', value: 'first' },
        { label: 'Last Name', value: 'last' },
        { label: 'Address', value: 'address' },
      ]}
      {...args}
    >
      {(item) => <ItemRow item={item} />}
    </List>
  );
};
WithEverything.args = {
  height: '50vh',
  select: 'checkbox',
  striped: false,
  flush: undefined,
  onFilter: action('onFilter'),
  onSelect: action('onSelect'),
  onSort: action('onSort'),
};
WithEverything.argTypes = {
  select: {
    control: {
      type: 'select',
      options: ['', 'checkbox', 'radio', 'switch'],
    },
  },
};

export const WithFiltering = ({ onFilter, ...args }) => {
  const [filter, setFilter] = useState('');
  return (
    <List
      items={data}
      filter={filter}
      onFilter={(val) => {
        onFilter(val);
        setFilter(val);
      }}
      {...args}
    >
      {(item) => <ItemRow item={item} />}
    </List>
  );
};
WithFiltering.args = {
  height: '50vh',
  striped: false,
  flush: undefined,
  onFilter: action('onFilter'),
};

export const WithSort = ({ onSort, ...args }) => {
  const [sort, setSort] = useState({ property: 'last', ascending: true });
  return (
    <List
      items={data}
      onExpand={HelloRow}
      onSort={(sortVal) => {
        onSort(sortVal);
        setSort(sortVal);
      }}
      sort={sort}
      sortOptions={[
        { label: 'First Name', value: 'first' },
        { label: 'Last Name', value: 'last' },
        { label: 'Address', value: 'address' },
      ]}
      {...args}
    >
      {(item) => <ItemRow item={item} />}
    </List>
  );
};
WithSort.args = {
  height: '50vh',
  striped: false,
  flush: undefined,
  onSort: action('onSort'),
};
