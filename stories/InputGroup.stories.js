import React from 'react';
import { Button, InputGroup, Input, InputGroupText } from '../src';

export default {
  title: 'InputGroup',
  component: InputGroup,
};

export const WithProps = () => (
  <div>
    <InputGroup>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>
        <input type="checkbox" aria-label="Checkbox for following text input" />
      </InputGroupText>
      <Input placeholder="Check it out" />
    </InputGroup>
    <br />
    <InputGroup>
      <Input placeholder="username" />
      <InputGroupText>@example.com</InputGroupText>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>$</InputGroupText>
      <InputGroupText>$</InputGroupText>
      <Input placeholder="Dolla dolla billz!" />
      <InputGroupText>$</InputGroupText>
      <InputGroupText>$</InputGroupText>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>$</InputGroupText>
      <Input placeholder="Amount" type="number" step="1" />
      <InputGroupText>.00</InputGroupText>
    </InputGroup>
  </div>
);

export const Addons = () => (
  <div>
    <InputGroup>
      <InputGroupText>To the Left!</InputGroupText>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <InputGroupText>To the Right!</InputGroupText>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>To the Left!</InputGroupText>
      <Input placeholder="and..." />
      <InputGroupText>To the Right!</InputGroupText>
    </InputGroup>
  </div>
);

export const AddonSizing = () => (
  <div>
    <InputGroup size="lg">
      <InputGroupText>@lg</InputGroupText>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupText>@normal</InputGroupText>
      <Input />
    </InputGroup>
    <br />
    <InputGroup size="sm">
      <InputGroupText>@sm</InputGroupText>
      <Input />
    </InputGroup>
  </div>
);

export const ButtonShorthand = () => (
  <div>
    <InputGroup>
      <Button color="danger">To the Left!</Button>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <Button color="secondary">To the Right!</Button>
    </InputGroup>
    <br />
    <InputGroup>
      <Button addonType="prepend" color="success">To the Left!</Button>
      <Input placeholder="and..." />
      <Button addonType="append" color="success">To the Right!</Button>
    </InputGroup>
  </div>
);
