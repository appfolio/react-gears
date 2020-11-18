import React from 'react';
import { storiesOf } from '@storybook/react';
import { select } from '@storybook/addon-knobs';
import { Pagination, PaginationItem, PaginationLink } from '../src';

storiesOf('Pagination', module).add('Live example', () => (
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
));
