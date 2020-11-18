import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from '../src';

storiesOf('Breadcrumb', module)
  .add('Live example', () => (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href="/">Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/">Library</a></BreadcrumbItem>
        <BreadcrumbItem><a href="/">Data</a></BreadcrumbItem>
        <BreadcrumbItem active>Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ));
