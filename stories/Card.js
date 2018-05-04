import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';

import { Card, CardBody, CardTitle } from '../src/index';

storiesOf('Card', module)
  .addWithInfo('Live example', () => {
    const outline = boolean('outline', false);

    return (
      <div>
        <Card
          color={select('color', [null, 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark', 'light'], null)}
          inverse={boolean('inverse', false)}
          outline={outline}
        >
          <CardBody>
            <CardTitle>{text('header', 'Hello World!')}</CardTitle>
            {text('content', `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.  Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.`)}
          </CardBody>
        </Card>
      </div>
    );
  })
  .addWithInfo('Colors', () => (
    <div>
      {[null, 'primary', 'secondary', 'info', 'success', 'warning', 'danger', 'dark', 'light'].map(color => (
        <Card color={color} className="mb-4">
          <CardBody>
            <CardTitle>{color || 'default'}</CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </CardBody>
        </Card>
        ))}
    </div>
  ))
  .addWithInfo('Outline', () => {
    const squareCorners = boolean('square corners', true);

    return (
      <div>
        <Card outline className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
          <CardBody>
            <CardTitle>Default</CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </CardBody>
        </Card>

        {['primary', 'secondary', 'info', 'success', 'warning', 'danger'].map(color => (
          <Card outline color={color} className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
            <CardBody>
              <CardTitle>{color}</CardTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </CardBody>
          </Card>
        ))}
      </div>
    );
  });
