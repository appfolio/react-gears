import React from 'react';
import { Button } from 'reactstrap';
import { storiesOf } from '@kadira/storybook';
import { text, boolean, select } from '@kadira/storybook-addon-knobs';

import { Card, CardBlock, CardHeader, CardTitle } from '../src/index';

storiesOf('Card', module)
  .addWithInfo('Live example', () => {
    const outline = boolean('outline', false);
    return (
      <div className={outline ? 'px-4 py-4' : 'bg-faded px-4 pb-5 pt-2'}>
        <div className="text-muted mb-3">
          {outline ? null : <em>(Darker background added for contrast)</em>}
        </div>
        <Card
          color={select('color', ['primary', 'secondary', 'info', 'success', 'warning', 'danger'], 'info')}
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
    )
  })
  .addWithInfo('Colors', () => (
    <div>
      <div className="bg-faded p-4">
        <div className="text-muted mb-3">
          <em>(Darker background added for contrast)</em>
        </div>
        {['primary', 'secondary', 'info', 'success', 'warning', 'danger'].map(color => (
          <Card color={color} className="mb-4">
            <CardBlock>
              <CardTitle>{color}</CardTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore
              et dolore magna aliqua.
            </CardBlock>
          </Card>
         ))}
      </div>
    </div>
  ))
  .addWithInfo('Outline', () => (
    <div>
      <Card outline className="mb-4">
        <CardBlock>
          <CardTitle>Default</CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua.
        </CardBlock>
      </Card>

      {['primary', 'secondary', 'info', 'success', 'warning', 'danger'].map(color => (
        <Card outline color={color} className="mb-4">
          <CardBlock>
            <CardTitle>{color}</CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua.
          </CardBlock>
        </Card>
       ))}
    </div>
  ));
