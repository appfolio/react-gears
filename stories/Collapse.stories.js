import React, { useState } from 'react';
import { Button, Collapse, UncontrolledCollapse } from '../src';

export default {
  title: 'Collapse',
  component: Collapse,
};

export const Controlled = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Toggle Collapse
      </Button>
      <Collapse isOpen={open}>
        This content will fade in and out as the button is pressed
      </Collapse>
    </div>
  );
};

export const Uncontrolled = () => (
  <div>
    <Button color="primary" id="toggler" className="mb-3">
      Toggle
    </Button>
    <UncontrolledCollapse toggler="#toggler">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magni, voluptas debitis
      similique porro a molestias consequuntur earum odio officiis natus, amet hic, iste sed
      dignissimos esse fuga! Minus, alias.
    </UncontrolledCollapse>
  </div>
);
