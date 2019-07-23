import React from 'react';
import { storiesOf } from '@storybook/react';
import { Breadcrumb, BreadcrumbItem } from '../src';

storiesOf('Breadcrumb', module)
  .add('Live example', () => (
    <div>
      <Breadcrumb>
        <BreadcrumbItem tag="a" href="#">Home</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Library</BreadcrumbItem>
        <BreadcrumbItem tag="a" href="#">Data</BreadcrumbItem>
        <BreadcrumbItem active tag="span">Bootstrap</BreadcrumbItem>
      </Breadcrumb>
    </div>
  ));
