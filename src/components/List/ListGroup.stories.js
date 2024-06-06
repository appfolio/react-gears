import { action } from '@storybook/addon-actions';
import React from 'react';
import { colors } from '../../tooling/colors';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';

export default {
  title: 'List',
  component: ListGroup,
  parameters: {
    sourceLink: 'List/ListGroup.tsx',
  },
};

export const ListGroupExample = ({ onClick, ...args }) => (
  <ListGroup {...args}>
    <ListGroupItem active>Alpha</ListGroupItem>
    <ListGroupItem action>Bravo</ListGroupItem>
    <ListGroupItem action onClick={onClick}>
      Charlie
    </ListGroupItem>
    <ListGroupItem disabled>Delta (disabled)</ListGroupItem>
    <ListGroupItem action>Echo</ListGroupItem>
  </ListGroup>
);
ListGroupExample.args = {
  flush: false,
  striped: false,
  onClick: action('onClick'),
};

export const ListGroupItemExample = ({ flush, ...args }) => (
  <ListGroup flush={flush}>
    <ListGroupItem {...args}>Button Action</ListGroupItem>
  </ListGroup>
);
ListGroupItemExample.args = {
  flush: false,
  active: false,
  action: false,
  color: undefined,
  disabled: false,
  onClick: action('onClick'),
};
ListGroupItemExample.argTypes = {
  color: {
    control: { type: 'select' },
    options: ['', ...colors],
  },
};
