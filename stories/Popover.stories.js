import React from 'react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Button, Popover, PopoverBody, PopoverHeader, UncontrolledPopover } from '../src';

export default {
  title: 'Popover',
  component: Popover,
};

export const LiveExample = () => (
  <div>
    <p>
      I can be placed in context to provide some contextual <strong id="popoverTarget">help</strong>!
    </p>
    <Popover
      isOpen={boolean('isOpen', false)}
      target="popoverTarget"
      toggle={() => {}}
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
