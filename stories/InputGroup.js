import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupButton, Input } from 'reactstrap';
import { storiesOf } from '@storybook/react';

storiesOf('InputGroup', module)
  .addWithInfo('with props', () => (
    <div>
      <InputGroup>
        <InputGroupAddon>@</InputGroupAddon>
        <Input placeholder="username" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>
          <Input addon type="checkbox" aria-label="Checkbox for following text input" />
        </InputGroupAddon>
        <Input placeholder="Check it out" />
      </InputGroup>
      <br />
      <InputGroup>
        <Input placeholder="username" />
        <InputGroupAddon>@example.com</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupAddon>$</InputGroupAddon>
        <Input placeholder="Dolla dolla billz!" />
        <InputGroupAddon>$</InputGroupAddon>
        <InputGroupAddon>$</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>$</InputGroupAddon>
        <Input placeholder="Amount" type="number" step="1" />
        <InputGroupAddon>.00</InputGroupAddon>
      </InputGroup>
    </div>
  ))
  .addWithInfo('Addons', () => (
    <div>
      <InputGroup>
        <InputGroupAddon>To the Left!</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupAddon>To the Right!</InputGroupAddon>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>To the Left!</InputGroupAddon>
        <Input placeholder="and..." />
        <InputGroupAddon>To the Right!</InputGroupAddon>
      </InputGroup>
    </div>
  ))
  .addWithInfo('Addon Sizing', () => (
    <div>
      <InputGroup size="lg">
        <InputGroupAddon>@lg</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon>@normal</InputGroupAddon>
        <Input />
      </InputGroup>
      <br />
      <InputGroup size="sm">
        <InputGroupAddon>@sm</InputGroupAddon>
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
        <InputGroupButton>To the Left!</InputGroupButton>
        <Input />
      </InputGroup>
      <br />
      <InputGroup>
        <Input />
        <InputGroupButton color="secondary">To the Right!</InputGroupButton>
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupButton color="danger">To the Left!</InputGroupButton>
        <Input placeholder="and..." />
        <InputGroupButton color="success">To the Right!</InputGroupButton>
      </InputGroup>
    </div>
  ));
