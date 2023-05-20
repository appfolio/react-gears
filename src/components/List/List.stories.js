import { action } from '@storybook/addon-actions';
import { boolean, select, text, number } from '@storybook/addon-knobs';
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

export const JustItems = () => (
  <List
    height={text('height', '70vh')}
    items={data}
    striped={boolean('striped', false)}
    flush={boolean('flush')}
  >
    {(item) => <ItemRow item={item} />}
  </List>
);

export const ScrollToItem = () => {
  const itemRef = React.createRef();

  useEffect(() => {
    itemRef.current.scrollIntoView();
  });

  return (
    <List
      height={text('height', '70vh')}
      items={data}
      striped={boolean('striped', false)}
      flush={boolean('flush')}
    >
      {(item) => (
        <ItemRow ref={item.id === number('scrollToId', 10) ? itemRef : undefined} item={item} />
      )}
    </List>
  );
};

export const SaveScrollPositionBetweenPageLoads = () => (
  <List
    height={text('height', '70vh')}
    scrollPositionKey={text('scrollPositionKey', 'list-example')}
    items={data}
    striped={boolean('striped', false)}
    flush={boolean('flush')}
  >
    {(item) => <ItemRow item={item} />}
  </List>
);

export const WithEverything = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState({ property: 'last', ascending: true });
  return (
    <List
      filter={filter}
      height={text('height', '50vh')}
      items={data}
      onExpand={HelloRow}
      onFilter={(val) => {
        action('onFilter')(val);
        setFilter(val);
      }}
      onSelect={action('onSelect')}
      onSort={(sortVal) => {
        action('onSort')(sortVal);
        setSort(sortVal);
      }}
      select={select('select', ['', 'checkbox', 'radio', 'switch'], 'checkbox')}
      sort={sort}
      sortOptions={[
        { label: 'First Name', value: 'first' },
        { label: 'Last Name', value: 'last' },
        { label: 'Address', value: 'address' },
      ]}
      striped={boolean('striped', false)}
      flush={boolean('flush')}
    >
      {(item) => <ItemRow item={item} />}
    </List>
  );
};

export const WithFiltering = () => {
  const [filter, setFilter] = useState('');
  return (
    <List
      height={text('height', '50vh')}
      items={data}
      striped={boolean('striped', false)}
      flush={boolean('flush')}
      filter={filter}
      onFilter={(val) => {
        action('onFilter')(val);
        setFilter(val);
      }}
    >
      {(item) => <ItemRow item={item} />}
    </List>
  );
};

export const WithSort = () => {
  const [sort, setSort] = useState({ property: 'last', ascending: true });
  return (
    <List
      height={text('height', '50vh')}
      items={data}
      onExpand={HelloRow}
      onSort={(sortVal) => {
        action('onSort')(sortVal);
        setSort(sortVal);
      }}
      sort={sort}
      sortOptions={[
        { label: 'First Name', value: 'first' },
        { label: 'Last Name', value: 'last' },
        { label: 'Address', value: 'address' },
      ]}
      striped={boolean('striped', false)}
      flush={boolean('flush')}
    >
      {(item) => <ItemRow item={item} />}
    </List>
  );
};
