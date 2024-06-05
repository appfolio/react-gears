import React from 'react';
import Pagination from './Pagination';
import PaginationItem from './PaginationItem';
import PaginationLink from './PaginationLink';

export default {
  title: 'Pagination',
  component: Pagination,
  parameters: {
    sourceLink: 'Pagination/Pagination.tsx',
  },
};

export const LiveExample = (args) => (
  <Pagination {...args}>
    <PaginationItem>
      <PaginationLink first href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink previous href="#" />
    </PaginationItem>
    <PaginationItem active>
      <PaginationLink href="#">G</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">O</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">O</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">G</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">L</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">E</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationLink next href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink last href="#" />
    </PaginationItem>
  </Pagination>
);
LiveExample.args = {
  size: undefined,
};
LiveExample.argTypes = {
  size: {
    control: {
      type: 'select',
      options: ['', 'sm', 'lg'],
    },
  },
};
