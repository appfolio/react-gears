import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { select, text } from '@kadira/storybook-addon-knobs';

import { Callout } from '../src/index';

storiesOf('Callout', module)
  .addWithInfo('Live example', () => (
    <div>
      <Callout
        color={select('color', ['primary', 'info', 'success', 'warning', 'danger', 'muted'], 'primary')}
        background={select('background', ['primary', 'info', 'success', 'warning', 'danger', 'faded'], 'faded')}
        placement={select('placement', ['top', 'right', 'bottom', 'left'], 'bottom')}
      >
        <h3>Hello World</h3>
        {text('content', `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.  Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.`)}
      </Callout>
    </div>
  ));
