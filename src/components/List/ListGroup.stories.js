import { action } from '@storybook/addon-actions';
import { boolean, select } from '@storybook/addon-knobs';
import React from 'react';
import { colors } from '../../tooling/colors';
import DeprecationDecorator from '../../tooling/ReactComponentsDeprecation';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';

export default {
  title: 'List',
  component: ListGroup,
  decorators: [
    (Story) => (
      <DeprecationDecorator
        additionalInfo="Alternatively, use the ListGroup and ListGroupItem components directly
          from reactstrap."
        name="List"
        story={Story}
        storyPath="/story/components-list--basic"
      />
    ),
  ],
};

export const ListGroupExample = () => (
  <ListGroup flush={boolean('flush', false)} striped={boolean('striped', false)}>
    <ListGroupItem active>Alpha</ListGroupItem>
    <ListGroupItem action>Bravo</ListGroupItem>
    <ListGroupItem action onClick={action('onClick')}>
      Charlie
    </ListGroupItem>
    <ListGroupItem disabled>Delta (disabled)</ListGroupItem>
    <ListGroupItem action>Echo</ListGroupItem>
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
