import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import data from '../List/util/data';
import List from './List';
import type {
  ExpandedItemBodyComponent,
  FilterItemCallback,
  ItemBodyComponent,
} from './List.types';

type ListStory = ComponentStory<typeof List>;
type DataItem = typeof data[number];

export default {
  title: 'List2/Electric Boogaloo',
  component: List,
} as ComponentMeta<typeof List>;

const sortOptions = Object.keys(data[0])
  .filter((key) => !['id', 'key', 'expanded', 'expandedColor'].includes(key))
  .map((key) => {
    return { label: key.toUpperCase(), value: key };
  });

const MyItemBody: ItemBodyComponent<DataItem> = ({ item }) => (
  <div>
    {item.first} {item.last}
  </div>
);

const MyExpandedItemBody: ExpandedItemBodyComponent<DataItem> = ({ item }) => (
  <div>{item.email}</div>
);

const filterItemCallback: FilterItemCallback<DataItem> = (filterText, item) => {
  const filterTextLower = filterText.toLowerCase();
  return (
    item.address.toLowerCase().includes(filterTextLower) ||
    item.email.toLowerCase().includes(filterTextLower) ||
    item.first.toLowerCase().includes(filterTextLower) ||
    item.last.toLowerCase().includes(filterTextLower)
  );
};

export const AllDefaults: ListStory = () => (
  <List
    components={{
      ItemBody: MyItemBody,
      ExpandedItemBody: MyExpandedItemBody,
    }}
    expandable
    filterable
    filterItem={filterItemCallback}
    initialExpandedIds={[21, 41]}
    initialSelectionIds={[2, 45, 41, 1]}
    itemComparisonKey="id"
    items={data}
    maxItemsHeight="40rem"
    selectable
    sortable
    sortOptions={sortOptions}
  />
);
