import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { text, boolean, select } from '@kadira/storybook-addon-knobs';

import { Card, CardBlock, CardTitle } from '../src/index';

storiesOf('Card', module)
  .addWithInfo('Live example', () => {
    const outline = boolean('outline', false);

    return (
      <div>
        <Card
          color={select('color', [null, 'primary', 'secondary', 'info', 'success', 'warning', 'danger'], 'info')}
          inverse={boolean('inverse', false)}
          outline={outline}
        >
          <CardBlock>
            <CardTitle>{text('header', 'Hello World!')}</CardTitle>
            {text('content', `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.  Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.`)}
          </CardBlock>
        </Card>
      </div>
    );
  })
  .addWithInfo('Colors', () => (
    <div>
      {[null, 'primary', 'secondary', 'info', 'success', 'warning', 'danger'].map(color => (
        <Card color={color} className="mb-4">
          <CardBlock>
            <CardTitle>{color || 'default'}</CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </CardBlock>
        </Card>
        ))}
    </div>
  ))
  .addWithInfo('Outline', () => {
    const squareCorners = boolean('square corners', false);

    return (
      <div>
        <Card outline className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
          <CardBlock>
            <CardTitle>Default</CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </CardBlock>
        </Card>

        {['primary', 'secondary', 'info', 'success', 'warning', 'danger'].map(color => (
          <Card outline color={color} className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
            <CardBlock>
              <CardTitle>{color}</CardTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </CardBlock>
          </Card>
        ))}
      </div>
    );
  });
