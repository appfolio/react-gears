import { action } from '@storybook/addon-actions';
import React from 'react';
import Paginator from './Paginator';

export default {
  title: 'Pagination',
  component: Paginator,
  parameters: {
    sourceLink: 'Pagination/Paginator.tsx',
  },
};

export const PaginatorExample = (args) => <Paginator totalItems={100} {...args} />;
PaginatorExample.args = {
  currentPage: 1,
  onClick: action('onClick'),
  perPage: 20,
  size: '',
  summary: undefined,
};
PaginatorExample.argTypes = {
  currentPage: {
    control: {
      type: 'number',
      min: 1,
      max: 19,
    },
  },
};
