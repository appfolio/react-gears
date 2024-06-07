import React from 'react';
import Breadcrumb from './Breadcrumb';
import BreadcrumbItem from './BreadcrumbItem';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  parameters: {
    sourceLink: 'Breadcrumb/Breadcrumb.tsx',
  },
};

export const LiveExample = (args) => (
  <div>
    <Breadcrumb {...args}>
      <BreadcrumbItem>
        <a href="/">Home</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/">Library</a>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <a href="/">Data</a>
      </BreadcrumbItem>
      <BreadcrumbItem active>Bootstrap</BreadcrumbItem>
    </Breadcrumb>
  </div>
);
