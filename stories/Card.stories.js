import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Card, CardBody, CardFooter, CardHeader, CardTitle } from '../src/index';
import { colors } from './colors';

storiesOf('Card', module)
  .add('Live example', () => {
    const outline = boolean('outline', false);
    const footer = text('footer', '');

    return (
      <div>
        <Card
          inverse={boolean('inverse', false)}
          outline={outline}
        >
          <CardHeader>
            <CardTitle>{text('title', 'Hello World!')}</CardTitle>
          </CardHeader>
          <CardBody>
            {text('content', `Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua.  Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat.`)}
          </CardBody>
          {footer && (
            <CardFooter>
              {footer}
            </CardFooter>
          )}
        </Card>
      </div>
    );
  })
  .add('Colors', () => (
    <div>
      {[null, ...colors].map(color => (
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
  .add('Outline', () => {
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

        {colors.map(color => (
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
