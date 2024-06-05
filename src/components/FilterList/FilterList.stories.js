import { action } from '@storybook/addon-actions';
import React from 'react';
import FilterList from './FilterList';

export default {
  title: 'FilterList',
  component: FilterList,
  parameters: {
    sourceLink: 'FilterList/FilterList.js',
  },
};

export const LiveExample = (args) => {
  const filters = [
    {
      label: 'User',
      value: 'Hello World',
      removable: false,
    },
    {
      label: 'Property',
      value: '1234 State Street',
    },
    {
      label: 'People',
      value: 'Lalalala',
    },
  ];
  return (
    <div>
      <FilterList filters={filters} {...args} />
    </div>
  );
};
LiveExample.args = {
  maxWidth: 14,
  onRemove: action('onRemove'),
};
