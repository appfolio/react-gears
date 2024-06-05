import React, { useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';

export default {
  title: 'Offcanvas',
  component: Offcanvas,
  parameters: {
    sourceLinkPrefix: 'https://github.com/reactstrap/reactstrap/tree/master/src/',
    sourceLink: 'Offcanvas.js',
  },
};

export const Example = (args) => {
  const [open, setOpen] = useState();
  const toggle = () => setOpen(!open);

  return (
    <div>
      <Button
        color="primary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open
      </Button>
      <Offcanvas isOpen={open} toggle={toggle} {...args}>
        <OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};
Example.args = {
  backdrop: true,
  fade: true,
  scrollable: false,
  direction: 'start',
};
Example.argTypes = {
  direction: {
    control: {
      type: 'select',
      options: ['top', 'start', 'end', 'bottom'],
    },
  },
};
