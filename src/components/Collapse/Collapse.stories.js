import React, { useState } from 'react';
import Button from '../Button/Button';
import Collapse from './Collapse';
import UncontrolledCollapse from './UncontrolledCollapse';

export default {
  title: 'Collapse',
  component: Collapse,
  parameters: {
    sourceLink: 'Collapse/Collapse.tsx',
  },
};

export const Controlled = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Toggle Collapse
      </Button>
      <Collapse isOpen={open} {...args}>
        This content will fade in and out as the button is pressed
      </Collapse>
    </div>
  );
};

export const Uncontrolled = (args) => (
  <div>
    <Button color="primary" id="toggler" className="mb-3">
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler" {...args}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
      similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
      dignissimos esse fuga! Minus, alias.
    </UncontrolledCollapse>
  </div>
);
