import React, { useState } from 'react';
import Button from '../Button/Button';
import Fade from './Fade';

export default {
  title: 'Fade',
  component: Fade,
  parameters: {
    sourceLink: 'Fade/Fade.tsx',
  },
};

export const LiveExample = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button color="primary" onClick={() => setOpen(!open)}>
        Toggle Fade
      </Button>
      <Fade in={open} className="mt-3" {...args}>
        This content will fade in and out as the button is pressed
      </Fade>
    </div>
  );
};
