import React from 'react';
import { storiesOf } from '@storybook/react';

import { Flag } from '../src';

storiesOf('Flag', module)
  .addWithInfo('with props', () => (
    <div>
      <Flag>default</Flag><br />
      <Flag color="primary">primary</Flag><br />
      <Flag color="success">success</Flag><br />
      <Flag color="info">info</Flag><br />
      <Flag color="warning">warning</Flag><br />
      <Flag color="danger">danger</Flag>
    </div>
  ));

