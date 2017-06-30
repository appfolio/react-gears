import React from 'react';
import { storiesOf } from '@storybook/react';

import { Popover, PopoverContent, PopoverTitle } from '../src';
import { boolean, text, select } from '@storybook/addon-knobs';

storiesOf('Popover', module)
  .addWithInfo('Live example', () => (
    <div>
      <p>
        I can be placed in context to provide some contextual <strong id="popoverTarget">help</strong>!
      </p>
      <Popover
        isOpen={boolean('isOpen', true)}
        target="popoverTarget"
        toggle={() => {}}
        placement={select('placement', [
          'top', 'bottom', 'left', 'right'
        ], 'bottom')}
      >
        <PopoverTitle>
          {text('PopoverTitle', 'Hello World')}
        </PopoverTitle>
        <PopoverContent>
          {text('PopoverContent', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
        </PopoverContent>
      </Popover>
    </div>
  ));
