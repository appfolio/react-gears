import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, select } from '@storybook/addon-knobs';
import { Popover, PopoverBody } from '../src';

storiesOf('Popover', module)
  .addWithInfo('Live example', () => (
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
  ));
