import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Offcanvas, OffcanvasBody, OffcanvasHeader, Button } from 'reactstrap';

export default {
  title: 'Offcanvas',
  component: Offcanvas,
};

export const Example = () => {
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
      <Offcanvas
        backdrop={boolean('backdrop', true)}
        fade={boolean('fade', true)}
        scrollable={boolean('scrollable', false)}
        direction={select('direction', ['top', 'start', 'end', 'bottom'], 'start')}
        isOpen={open}
        toggle={toggle}
      >
        <OffcanvasHeader toggle={toggle}>Offcanvas</OffcanvasHeader>
        <OffcanvasBody>
          <strong>This is the Offcanvas body.</strong>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};
