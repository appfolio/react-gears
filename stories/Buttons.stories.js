import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, boolean, select } from '@storybook/addon-knobs';
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  TooltipButton
} from '../src';
import { buttonColors } from './colors';

export default {
  title: 'Buttons',
  component: Button,
};

export const LiveExample = () => (
  <Button
    color={select('color', buttonColors, 'primary')}
    block={boolean('block', false)}
    disabled={boolean('disabled', false)}
    outline={boolean('outline', false)}
    active={boolean('active', false)}
    size={select('size', ['', 'sm', 'lg'])}
  >
    {text('Label', 'Click Me')}
  </Button>
);

export const Colors = () => (
  <ButtonToolbar>
    <Button>Default</Button>
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="info">Info</Button>
    <Button color="warning">Warning</Button>
    <Button color="danger">Danger</Button>
    <Button color="dark">Dark</Button>
    <Button color="light">Light</Button>
    <Button color="link">Link</Button>
  </ButtonToolbar>
);

export const Disabled = () => (
  <ButtonToolbar>
    <Button disabled>Default</Button>
    <Button disabled color="primary">Primary</Button>
    <Button disabled color="secondary">Secondary</Button>
    <Button disabled color="success">Success</Button>
    <Button disabled color="info">Info</Button>
    <Button disabled color="warning">Warning</Button>
    <Button disabled color="danger">Danger</Button>
    <Button disabled color="dark">Dark</Button>
    <Button disabled color="light">Light</Button>
    <Button disabled color="link">Link</Button>
  </ButtonToolbar>
);

export const Outline = () => (
  <ButtonToolbar>
    <Button outline>Default</Button>
    <Button outline color="primary">Primary</Button>
    <Button outline color="secondary">Secondary</Button>
    <Button outline color="success">Success</Button>
    <Button outline color="info">Info</Button>
    <Button outline color="warning">Warning</Button>
    <Button outline color="danger">Danger</Button>
    <Button outline color="dark">Dark</Button>
    <Button outline color="light">Light</Button>
    <Button outline color="link">Link</Button>
  </ButtonToolbar>
);

export const Sizes = () => (
  <div>
    <Button color="primary" size="lg">Large button</Button>&nbsp;
    <Button color="primary" size="md">Medium button</Button>&nbsp;
    <Button color="primary" size="sm">Small button</Button>
  </div>
);

export const TooltipButtonExample = () => (
  <TooltipButton
    color={select('color', buttonColors, 'primary')}
    disabled={boolean('disabled', false)}
    onClick={action('onClick')}
    tooltip={text('tooltip', 'Here is a tooltip.')}
    tooltipPlacement={select('placement', ['top', 'left', 'bottom', 'right'], 'top')}
  >
    {text('Label', 'Click Me')}
  </TooltipButton>
);

export const ButtonGroupExample = () => (
  <div>
    <div className="mb-1">
      <Button size="lg" block>Block level button</Button>
    </div>
    <div className="mb-1">
      <ButtonGroup>
        <Button>Left</Button>
        <Button active>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
    <div className="mb-1">
      <ButtonToolbar>
        <ButtonGroup>
          <Button>1</Button>
          <Button active>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>5</Button>
          <Button active>6</Button>
          <Button>7</Button>
        </ButtonGroup>

        <ButtonGroup>
          <Button>8</Button>
          <ButtonDropdown toggle={() => {}}>
            <DropdownToggle caret>
              Dropdown
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </ButtonDropdown>
        </ButtonGroup>
      </ButtonToolbar>
    </div>
    <div>
      <ButtonGroup vertical>
        <Button>Button</Button>
        <Button active>Button</Button>
        <Button>Button</Button>
        <Button>Button</Button>
      </ButtonGroup>
    </div>
  </div>
);
