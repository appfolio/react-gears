import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import React from 'react';
import FilterList from './FilterList';

export default {
  title: 'FilterList',
  component: FilterList,
};

export const LiveExample = () => {
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
      <FilterList
        filters={filters}
        maxWidth={number('maxWidth', 14)}
        onRemove={(filter) => action('onRemove', filter)}
      />
    </div>
  );
};
