import type { ComponentMeta } from '@storybook/react';
import React from 'react';
import { ListGroupItemHeading, ListGroupItemText } from 'reactstrap';
import data from '../../tooling/listData';
import type { UncontrolledListProps } from './UncontrolledList';
import UncontrolledList from './UncontrolledList';

type DataItem = typeof data[number];

function filterItem(filterText: string, item: DataItem) {
  return item.first.toLowerCase().includes(filterText.toLowerCase());
}

function renderItem(item: DataItem) {
  return (
    <>
      <ListGroupItemHeading>
        <a href={`mailto:${item.email}`}>
          {item.first} {item.last}
        </a>
      </ListGroupItemHeading>
      <div className="d-flex justify-content-between">
        <div>
          <ListGroupItemText>{item.address}</ListGroupItemText>
          <span className="text-muted me-2">Late fee:</span>
          <span>${item.fee}</span>
        </div>
        <div>
          <span className="text-muted me-2">Date of birth:</span>
          <span>{new Date(item.dob).toLocaleDateString()}</span>
        </div>
      </div>
    </>
  );
}

const sortOptions = Object.keys(data[0])
  .filter((key) => !['id', 'key', 'expanded', 'expandedColor'].includes(key))
  .map((key) => {
    return { label: key.toUpperCase(), value: key };
  });

export default {
  title: 'New List/Uncontrolled',
  component: UncontrolledList,
  argTypes: {
    comparisonKey: { table: { disable: true } },
    items: { table: { disable: true } },
    renderItem: { table: { disable: true } },
    sortOptions: { table: { disable: true } },
  },
} as ComponentMeta<typeof UncontrolledList>;

export const WithEverything = (args: UncontrolledListProps<DataItem>) => (
  <UncontrolledList {...args} />
);
WithEverything.args = {
  filterable: true,
  filterItem,
  flush: false,
  items: data,
  maxHeight: '40rem',
  renderItem,
  selectable: true,
  sortable: true,
  sortOptions,
};
