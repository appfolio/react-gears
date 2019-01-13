import React from 'react';
import { storiesOf } from '@storybook/react';

import { Flag } from '../src';

storiesOf('Badge (Flag)', module)
  .addWithInfo('Badge', () => (
    <div>
      <Flag>default</Flag><br />
      <Flag color="primary">primary</Flag><br />
      <Flag color="secondary">secondary</Flag><br />
      <Flag color="success">success</Flag><br />
      <Flag color="info">info</Flag><br />
      <Flag color="warning">warning</Flag><br />
      <Flag color="danger">danger</Flag><br />
      <Flag color="light">light</Flag><br />
      <Flag color="dark">dark</Flag>
    </div>
  ))
  .addWithInfo('Pills', () => (
    <div>
      <Flag pill>default</Flag><br />
      <Flag pill color="primary">primary</Flag><br />
      <Flag pill color="secondary">secondary</Flag><br />
      <Flag pill color="success">success</Flag><br />
      <Flag pill color="info">info</Flag><br />
      <Flag pill color="warning">warning</Flag><br />
      <Flag pill color="danger">danger</Flag><br />
      <Flag pill color="light">light</Flag><br />
      <Flag pill color="dark">dark</Flag>
    </div>
  ));

