import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { SortableList, Alert, Button, Label } from '../../src';
import data from './data';

export default {
  title: 'SortableList',
  component: SortableList,
};

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

export const WithEverything = () => (
  <SortableList
    className={text('className', '')}
    filterPlaceholder={text('filterPlaceholder', SortableList.defaultProps.filterPlaceholder)}
    flush={boolean('flush', SortableList.defaultProps.flush)}
    height={text('height', '70vh')}
    scrollPositionKey={text('scrollPositionKey', 'sortableList-example')}
    items={data.slice(0, 20)}
    striped={boolean('striped', false)}
    onExpand={item => (
      <>
        <Label className="text-muted">Base late fee for October 2019:</Label> {currency.format(item.fee)}
      </>
      )}
    onFilter={filterItems}
    onSelect={action('onSelect')}
    select={select('select', ['', 'checkbox', 'radio', 'switch'], 'checkbox')}
    sort={{ property: ['last', 'first'] }}
    sortByLabel={text('sortByLabel', SortableList.defaultProps.sortByLabel)}
    sortOptions={[
        { label: 'First Name', value: ['first', 'last'] },
        { label: 'Last Name', value: ['last', 'first'] },
        { label: 'Late Fee', value: 'fee' },
      ]}
    selectable={item => item.id % 2}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="me-auto pb-2">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p className="mb-0">{item.address}</p>
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
      )}
  </SortableList>
);
export const WithExpandableRow = () => (
  <SortableList
    items={data.slice(0, 10)}
    onExpand={item => (
      <>
        <Label className="text-muted">Base late fee for October 2019:</Label> {currency.format(item.fee)}
      </>
      )}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="me-auto">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p className="mb-0">{item.address}</p>
        </div>
      </div>
      )}
  </SortableList>
);
export const WithSelection = () => (
  <SortableList
    items={data.slice(0, 10)}
    select="checkbox"
    onSelect={action('onSelect')}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="me-auto">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p className="mb-0">{item.address}</p>
        </div>
      </div>
      )}
  </SortableList>
);
export const WithSort = () => (
  <SortableList
    items={data.slice(0, 10)}
    sort={{ property: 'last', ascending: true }}
    sortOptions={[
        { label: 'First Name', value: 'first' },
        { label: 'Last Name', value: 'last' },
        { label: 'Address', value: 'address' },
      ]}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="me-auto">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p className="mb-0">{item.address}</p>
        </div>
      </div>
      )}
  </SortableList>
);
export const WithFiltering = () => (
  <SortableList
    height="60vh"
    items={data}
    onFilter={filterItems}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="me-auto pb-2">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p>{item.address}</p>
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
      )}
  </SortableList>
);
export const WithCustomHeader = () => (
  <SortableList
    height="60vh"
    items={data}
    onFilter={filterItems}
    select="checkbox"
    onSelect={action('onSelect')}
    header={<h4 className="m-0 text-danger">Hey it's me, your custom header</h4>}
  >
    {item => (
      <div className="d-flex justify-content-between flex-column flex-sm-row">
        <div className="me-auto pb-2">
          <h4 className="m-0">{item.first} {item.last}</h4>
          <p>{item.address}</p>
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
      )}
  </SortableList>
);
export const Areas = () => (
  <SortableList
    height={text('height', '70vh')}
    items={data.slice(0, 20)}
    onExpand={() => (
      <>
        <Alert color="info" className="m-0 ">Expandable area</Alert>
      </>
      )}
    onSelect={action('onSelect')}
    select={select('select', ['checkbox', 'radio', 'switch'], 'checkbox')}
  >
    {() => (
      <Alert className="m-0">
        Item area
      </Alert>
      )}
  </SortableList>
);
export const WithOptionalExpand = () => (
  <SortableList
    items={data.slice(0, 10)}
    onExpand={item => (item.id % 2 === 0) ? (
      <>
        <Alert color="info" className="m-0 ">Expandable area</Alert>
      </>
      ) : undefined}
    onSelect={action('onSelect')}
    select={select('select', ['checkbox', 'radio', 'switch'], 'checkbox')}
  >
    {item => (item.id % 2 === 0) ? 'Expand Me' : 'I can\'t be expanded...'}
  </SortableList>
);
export const WithControlledSelection = () => {
  const [selection, setSelection] = useState(data.slice(1, 5));
  return (
    <>
      <SortableList
        items={data.slice(0, 10)}
        onSelect={setSelection}
        selected={selection}
        select="checkbox"
      >
        {item => <h3 className="m-0">{item.first} {item.last}</h3>}
      </SortableList>

      <h3>Current selection: </h3>
      <pre>
        {JSON.stringify(selection.map(item => `${item.first} ${item.last}`), null, '  ')}
      </pre>
      <Button onClick={() => setSelection(data.slice(2, 4))}>
        Replace the Selection
      </Button>
    </>
  );
};

