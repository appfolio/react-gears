import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '../node_modules/@storybook/addon-actions';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, UncontrolledDropdown } from '../src';
import { colors } from './colors';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

export const Uncontrolled = () => (
  <UncontrolledDropdown
    direction={select('direction', ['', 'down', 'up', 'left', 'right'], '')}
  >
    <DropdownToggle
      color={select('color', colors, 'primary')}
      disabled={boolean('disabled', false)}
      outline={boolean('outline', false)}
      size={select('size', ['', 'sm', 'lg'])}
      caret
    >
      {text('text', 'Click Me')}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Disabled Action</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
);

export const Controlled = () => (
  <Dropdown
    direction={select('direction', ['', 'down', 'up', 'left', 'right'], '')}
    isOpen={boolean('isOpen', false)}
    toggle={action('toggle')}
  >
    <DropdownToggle
      color={select('color', colors, 'primary')}
      disabled={boolean('disabled', false)}
      outline={boolean('outline', false)}
      size={select('size', ['', 'sm', 'lg'])}
      caret
    >
      {text('text', 'Click Me')}
    </DropdownToggle>
    <DropdownMenu>
      <DropdownItem>Action</DropdownItem>
      <DropdownItem>Another Action</DropdownItem>
      <DropdownItem divider />
      <DropdownItem header>Header</DropdownItem>
      <DropdownItem disabled>Disabled Action</DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
