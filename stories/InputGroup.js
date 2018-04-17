import React from 'react';
import { InputGroup, InputGroupAddon, Input, InputGroupButton } from 'reactstrap';
import { storiesOf } from '@storybook/react';

storiesOf('InputGroup', module)
  .addWithInfo('with props', () => (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <Input type="checkbox" aria-label="Checkbox for following text input" />
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
  ))
  .addWithInfo('Addons', () => (
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
  ))
  .addWithInfo('Addon Sizing', () => (
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
  ))
// TODO after exporting Dropdown button with state:
//  .addWithInfo('Button Dropdown', () => (
//    <div>
//      <InputGroup>
//        <InputGroupButton><Button>I'm a button</Button></InputGroupButton>
//        <Input />
//      </InputGroup>
//      <br />
//      <InputGroup>
//        <Input />
//        <InputGroupButton>ButtonDropdownExample</InputGroupButton>
//      </InputGroup>
//      <br />
//      <InputGroup>
//        <InputGroupButton>ButtonDropdownExample</InputGroupButton>
//        <Input placeholder="and..." />
//        <InputGroupButton><Button color="secondary">I'm a button</Button></InputGroupButton>
//      </InputGroup>
//    </div>
//  ))
  .addWithInfo('Button Shorthand', () => (
    <div>
      <InputGroup>
        <InputGroupButton addonType="prepend">To the Left!</InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton addonType="append" color="secondary">To the Right!</InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton addonType="prepend" color="danger">To the Left!</InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton addonType="append" color="success">To the Right!</InputGroupButton>
      </InputGroup>
    </div>
  ));
