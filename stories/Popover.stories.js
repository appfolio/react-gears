import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { text, select } from '@storybook/addon-knobs';
import { Button, Popover, PopoverBody, PopoverHeader, UncontrolledPopover } from '../src';

export default {
  title: 'Popover',
  component: Popover,
};

export const LiveExample = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <p>
        I can be placed in context to provide some contextual <strong id="PopoverExample">help</strong>!
      </p>
      <Popover
        isOpen={open}
        target="PopoverExample"
        trigger={select('trigger', ['click', 'hover', 'focus'], 'click')}
        toggle={(e) => { setOpen(!open); action('toggle')(e); }}
        placement={select('placement', [
        'top', 'bottom', 'left', 'right'
      ], 'bottom')}
      >
        <PopoverBody>
          <h5>
            {text('PopoverTitle', 'Hello World')}
          </h5>
          {text('PopoverBody', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
        </PopoverBody>
      </Popover>
    </div>
  );
};

export const Uncontrolled = () => (
  <div>
    <Button id="UncontrolledPopover" type="button">
      Launch Popover
    </Button>
    <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
      <PopoverHeader>Popover Title</PopoverHeader>
      <PopoverBody>Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</PopoverBody>
    </UncontrolledPopover>
  </div>
);
