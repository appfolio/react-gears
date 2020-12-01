import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import { ListGroup, ListGroupItem } from '../src';
import { colors } from './colors';

export default {
  title: 'ListGroup',
  component: ListGroup,
};

export const LiveExample = () => (
  <ListGroup flush={boolean('flush', false)}>
    <ListGroupItem active>Active</ListGroupItem>
    <ListGroupItem
      tag="a"
      href="https://www.google.com"
      target="_blank"
      action
    >
      Link
    </ListGroupItem>
    <ListGroupItem tag="button" action onClick={action('onClick')}>
      Button Action
    </ListGroupItem>
    <ListGroupItem disabled>Disabled</ListGroupItem>
  </ListGroup>
);

export const ListGroupItemExample = () => (
  <ListGroup flush={boolean('flush (ListGroup)', false)}>
    <ListGroupItem
      active={boolean('active', false)}
      action={boolean('action', false)}
      color={select('color', ['', ...colors], undefined)}
      disabled={boolean('disabled', false)}
      onClick={action('onClick')}
    >
      Button Action
    </ListGroupItem>
  </ListGroup>
);
