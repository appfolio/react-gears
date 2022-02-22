import React from 'react';
import { Button, InputGroup, InputGroupAddon, Input, InputGroupText } from '../src';

export default {
  title: 'InputGroup',
  component: InputGroup,
};

export const WithProps = () => (
  <div>
    <InputGroup>
      <InputGroupAddon addonType="prepend">@</InputGroupAddon>
      <Input placeholder="username" />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>
          <input type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroupText>
      </InputGroupAddon>
      <Input placeholder="Check it out" />
    </InputGroup>
    <br />
    <InputGroup>
      <Input placeholder="username" />
      <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input placeholder="Dolla dolla billz!" />
      <InputGroupAddon addonType="append">$</InputGroupAddon>
      <InputGroupAddon addonType="append">$</InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">$</InputGroupAddon>
      <Input placeholder="Amount" type="number" step="1" />
      <InputGroupAddon addonType="append">.00</InputGroupAddon>
    </InputGroup>
  </div>
);

export const Addons = () => (
  <div>
    <InputGroup>
      <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">To the Left!</InputGroupAddon>
      <Input placeholder="and..." />
      <InputGroupAddon addonType="append">To the Right!</InputGroupAddon>
    </InputGroup>
  </div>
);

export const AddonSizing = () => (
  <div>
    <InputGroup size="lg">
      <InputGroupAddon addonType="prepend">@lg</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">@normal</InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup size="sm">
      <InputGroupAddon addonType="prepend">@sm</InputGroupAddon>
      <Input />
    </InputGroup>
  </div>
);

export const ButtonShorthand = () => (
  <div>
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <Button color="danger">To the Left!</Button>
      </InputGroupAddon>
      <Input />
    </InputGroup>
    <br />
    <InputGroup>
      <Input />
      <InputGroupAddon addonType="append">
        <Button color="secondary">To the Right!</Button>
      </InputGroupAddon>
    </InputGroup>
    <br />
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <Button addonType="prepend" color="success">
          To the Left!
        </Button>
      </InputGroupAddon>
      <Input placeholder="and..." />
      <InputGroupAddon addonType="append">
        <Button addonType="append" color="success">
          To the Right!
        </Button>
      </InputGroupAddon>
    </InputGroup>
  </div>
);
