import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '../src';

storiesOf('Badge', module)
  .add('with props', () => (
    <div>
      <Badge>default</Badge><br />
      <Badge color="primary">primary</Badge><br />
      <Badge color="success">success</Badge><br />
      <Badge color="info">info</Badge><br />
      <Badge color="warning">warning</Badge><br />
      <Badge color="danger">danger</Badge>
    </div>
  ));

