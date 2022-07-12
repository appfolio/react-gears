import { text, boolean } from '@storybook/addon-knobs';
import React from 'react';
import { Button } from 'reactstrap';
import { colors } from '../../tooling/colors';
import Alert from '../Alert/Alert';
import Card from './Card';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';

export default {
  title: 'Card',
  component: Card,
};

export const MyExample = () => {
  return (
    <Card>
      <CardHeader>
        <Button color="danger" className="float-end" onClick={() => undefined}>Delete</Button>
        <CardTitle>Edit Application</CardTitle>
        {/* <ErrorMessage message={this.state.error} /> */}
      </CardHeader>
      <CardBody>
        {true && <Alert dismissible color="success">Application Saved</Alert>}
        <div>Stub</div>
      </CardBody>
    </Card>
  );
}

export const LiveExample = () => {
  const outline = boolean('outline', false);
  const footer = text('footer', '');

  return (
    <div>
      <Card inverse={boolean('inverse', false)} outline={outline}>
        <CardHeader>
          <CardTitle>{text('title', 'Hello World!')}</CardTitle>
        </CardHeader>
        <CardBody>
          {text(
            'content',
            `Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua.  Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.`
          )}
        </CardBody>
        {footer && <CardFooter>{footer}</CardFooter>}
      </Card>
    </div>
  );
};

export const Colors = () => (
  <div>
    {[null, ...colors].map((color) => (
      <Card color={color} className="mb-4">
        <CardBody>
          <CardTitle>{color || 'default'}</CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </CardBody>
      </Card>
    ))}
  </div>
);

export const Outline = () => {
  const squareCorners = boolean('square corners', true);

  return (
    <div>
      <Card outline className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
        <CardBody>
          <CardTitle>Default</CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </CardBody>
      </Card>

      {colors.map((color) => (
        <Card outline color={color} className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
          <CardBody>
            <CardTitle>{color}</CardTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
