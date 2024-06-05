import React from 'react';
import { colors } from '../../tooling/colors';
import Card from './Card';
import CardBody from './CardBody';
import CardFooter from './CardFooter';
import CardHeader from './CardHeader';
import CardTitle from './CardTitle';

export default {
  title: 'Card',
  component: Card,
  parameters: {
    sourceLink: 'Card/Card.tsx',
  },
};

export const LiveExample = ({ outline, footer, inverse, title, content }) => (
  <div>
    <Card inverse={inverse} outline={outline}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardBody>{content}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  </div>
);
LiveExample.args = {
  outline: false,
  footer: '',
  inverse: false,
  title: 'Hello World!',
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua.  Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat.`,
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

export const Outline = ({ squareCorners }) => (
  <div>
    <Card outline className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
      <CardBody>
        <CardTitle>Default</CardTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </CardBody>
    </Card>

    {colors.map((color) => (
      <Card outline color={color} className={`mb-4 ${squareCorners ? 'rounded-0' : ''}`}>
        <CardBody>
          <CardTitle>{color}</CardTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </CardBody>
      </Card>
    ))}
  </div>
);
Outline.args = {
  squareCorners: true,
};
