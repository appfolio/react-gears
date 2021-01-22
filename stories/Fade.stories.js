import React, { useState } from 'react';
import { Button, Fade } from '../src';

export default {
  title: 'Fade',
  component: Fade,
};

export const LiveExample = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Toggle Fade
      </Button>
      <Fade in={open} className="mt-3">
        This content will fade in and out as the button is pressed
      </Fade>
    </div>
  );
};
