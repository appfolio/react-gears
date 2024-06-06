import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import Alert from '../Alert/Alert';
import Button from '../Button/Button';
import Label from '../Label/Label';
import SortableList from './SortableList';
import data from './util/data';

const meta = {
  title: 'SortableList',
  component: SortableList,
  parameters: {
    sourceLink: 'List/SortableList.tsx',
  },
  argTypes: {
    select: {
      control: { type: 'select' },
      options: ['', 'checkbox', 'radio', 'switch'],
    },
    flush: {
      control: 'boolean',
    },
  },
};
export default meta;

const currency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function filterItems(filter, item) {
  const f = filter.toLowerCase();
  return (
    item.first.toLowerCase().includes(f) ||
    item.last.toLowerCase().includes(f) ||
    // eslint-disable-next-line eqeqeq
    item.fee == filter
  );
}

const ExpandoOne = (item) => (
  <>
    <Label className="text-muted">Base late fee for October 2019:</Label>{' '}
    {currency.format(item.fee)}
  </>
);

const ExpandoTwo = () => (
  <Alert color="info" className="m-0 ">
    Expandable area
  </Alert>
);

export const WithEverything = {
  args: {
    className: '',
    filterPlaceholder: SortableList.defaultProps.filterPlaceholder,
    flush: SortableList.defaultProps.flush,
    height: '70vh',
    scrollPositionKey: 'sortableList-example',
    striped: false,
    onSelect: action('onSelect'),
    select: 'checkbox',
    sortByLabel: SortableList.defaultProps.sortByLabel,
  },
  render: (args) => (
    <SortableList
      items={data.slice(0, 20)}
      onExpand={ExpandoOne}
      onFilter={filterItems}
      sort={{ property: ['last', 'first'] }}
      sortOptions={[
        { label: 'First Name', value: ['first', 'last'] },
        { label: 'Last Name', value: ['last', 'first'] },
        { label: 'Late Fee', value: 'fee' },
      ]}
      selectable={(item) => item.id % 2}
      {...args}
    >
      {(item) => (
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="me-auto pb-2">
            <h4 className="m-0">
              {item.first} {item.last}
            </h4>
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
  ),
};
export const WithExpandableRow = {
  render: () => (
    <SortableList items={data.slice(0, 10)} onExpand={ExpandoOne}>
      {(item) => (
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="me-auto">
            <h4 className="m-0">
              {item.first} {item.last}
            </h4>
            <p className="mb-0">{item.address}</p>
          </div>
        </div>
      )}
    </SortableList>
  ),
};
export const WithSelection = {
  args: {
    onSelect: action('onSelect'),
  },
  render: (args) => (
    <SortableList items={data.slice(0, 10)} select="checkbox" {...args}>
      {(item) => (
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="me-auto">
            <h4 className="m-0">
              {item.first} {item.last}
            </h4>
            <p className="mb-0">{item.address}</p>
          </div>
        </div>
      )}
    </SortableList>
  ),
};
export const WithSort = {
  render: () => (
    <SortableList
      items={data.slice(0, 10)}
      sort={{ property: 'last', ascending: true }}
      sortOptions={[
        { label: 'First Name', value: 'first' },
        { label: 'Last Name', value: 'last' },
        { label: 'Address', value: 'address' },
      ]}
    >
      {(item) => (
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="me-auto">
            <h4 className="m-0">
              {item.first} {item.last}
            </h4>
            <p className="mb-0">{item.address}</p>
          </div>
        </div>
      )}
    </SortableList>
  ),
};
export const WithFiltering = {
  render: () => (
    <SortableList height="60vh" items={data} onFilter={filterItems}>
      {(item) => (
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="me-auto pb-2">
            <h4 className="m-0">
              {item.first} {item.last}
            </h4>
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
  ),
};
export const WithCustomHeader = {
  args: {
    onSelect: action('onSelect'),
  },
  render: (args) => (
    <SortableList
      height="60vh"
      items={data}
      onFilter={filterItems}
      select="checkbox"
      header={<h4 className="m-0 text-danger">Hey it&apos;s me, your custom header</h4>}
      {...args}
    >
      {(item) => (
        <div className="d-flex justify-content-between flex-column flex-sm-row">
          <div className="me-auto pb-2">
            <h4 className="m-0">
              {item.first} {item.last}
            </h4>
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
  ),
};
export const Areas = {
  args: {
    height: '70vh',
    onSelect: action('onSelect'),
    select: 'checkbox',
  },
  render: (args) => (
    <SortableList items={data.slice(0, 20)} onExpand={ExpandoTwo} {...args}>
      {() => <Alert className="m-0">Item area</Alert>}
    </SortableList>
  ),
};
export const WithOptionalExpand = {
  args: {
    select: 'checkbox',
    onSelect: action('onSelect'),
  },
  render: (args) => (
    <SortableList
      items={data.slice(0, 10)}
      onExpand={(item) => (item.id % 2 === 0 ? ExpandoTwo() : undefined)}
      {...args}
    >
      {(item) => (item.id % 2 === 0 ? 'Expand Me' : "I can't be expanded...")}
    </SortableList>
  ),
};
export const WithControlledSelection = {
  render: function Render() {
    const [selection, setSelection] = useState(data.slice(1, 5));
    return (
      <>
        <SortableList
          items={data.slice(0, 10)}
          onSelect={setSelection}
          selected={selection}
          select="checkbox"
        >
          {(item) => (
            <h3 className="m-0">
              {item.first} {item.last}
            </h3>
          )}
        </SortableList>

        <h3>Current selection: </h3>
        <pre>
          {JSON.stringify(
            selection.map((item) => `${item.first} ${item.last}`),
            null,
            '  '
          )}
        </pre>
        <Button onClick={() => setSelection(data.slice(2, 4))}>Replace the Selection</Button>
      </>
    );
  },
};
