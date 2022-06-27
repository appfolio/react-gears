import type { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ListHeader, { ListHeaderProps } from './ListHeader';

const sortOptions = [
  { label: 'Other', value: 'other' },
  { label: 'Label', value: 'label' },
];

const sortValues = sortOptions.map((option) => option.value);

export default {
  title: 'New List',
  component: ListHeader,
  argTypes: {
    sortValue: { control: 'select', options: sortValues },
    onCheckboxChange: { action: 'onCheckboxChange', table: { disable: true } },
    onFilterChange: { action: 'onFilterChange', table: { disable: true } },
    onSortDirectionToggle: { action: 'onSortDirectionToggle', table: { disable: true } },
    onSortValueChange: { action: 'onSortValueChange', table: { disable: true } },
  },
} as ComponentMeta<typeof ListHeader>;

export const Header: ComponentStory<typeof ListHeader> = (args: ListHeaderProps) => (
  <ListHeader {...args} />
);
Header.args = {
  checkbox: true,
  checkboxState: 'unchecked',
  filterable: true,
  filterPlaceholder: 'Search for an item',
  filterValue: '',
  sortable: true,
  sortDirection: 'ascending',
  sortOptions,
  sortValue: 'label',
};
