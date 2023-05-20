import { action } from '@storybook/addon-actions';
import { number, select, text } from '@storybook/addon-knobs';
import React from 'react';
import Paginator from './Paginator';

export default {
  title: 'Pagination',
  component: Paginator,
  parameters: {
    sourceLink: 'Pagination/Paginator.tsx',
  },
};

export const PaginatorExample = () => (
  <Paginator
    currentPage={number('currentPage', 1, { min: 1, max: 19 })}
    onClick={action('onClick')}
    perPage={select('perPage', [5, 10, 20, 25], 20)}
    size={select('size', ['', 'sm', 'lg'], '')}
    summary={text('summary')}
    totalItems={100}
  />
);
