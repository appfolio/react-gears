import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Flag } from '../src';

storiesOf('Flag', module)
  .addWithInfo('with props', () => (
    <div>
      <Flag>default</Flag>
      <Flag color="primary">primary</Flag>
      <Flag color="success">success</Flag>
      <Flag color="info">info</Flag>
      <Flag color="warning">warning</Flag>
      <Flag color="danger">danger</Flag>
    </div>
  ));

