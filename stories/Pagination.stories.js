import React from 'react';
import { select } from '@storybook/addon-knobs';
import { Pagination, PaginationItem, PaginationLink } from '../src';

export default {
  title: 'Pagination',
  component: Pagination,
};

export const LiveExample = () => (
  <Pagination size={select('size', ['', 'sm', 'lg'])}>
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
