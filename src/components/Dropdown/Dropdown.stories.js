import { action } from '@storybook/addon-actions';
import React from 'react';
import { colors } from '../../tooling/colors';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';
import UncontrolledDropdown from './UncontrolledDropdown';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    sourceLink: 'Dropdown/Dropdown.tsx',
  },
  argTypes: {
    direction: {
      options: ['', 'down', 'up', 'left', 'right'],
      control: { type: 'select' },
    },
    color: {
      options: colors,
      control: { type: 'select' },
    },
    size: {
      options: ['', 'sm', 'lg'],
      control: { type: 'select' },
    },
  },
};
export default meta;

export const Uncontrolled = {
  args: {
    direction: '',
    color: 'primary',
    disabled: false,
    outline: false,
    size: undefined,
    text: 'Click Me',
  },
  render: ({ direction, color, disabled, outline, size, text }) => (
    <UncontrolledDropdown direction={direction}>
      <DropdownToggle color={color} disabled={disabled} outline={outline} size={size} caret>
        {text}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Disabled Action</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  ),
};

export const Controlled = {
  args: {
    direction: '',
    isOpen: false,
    toggle: action('toggle'),
    color: 'primary',
    disabled: false,
    outline: false,
    size: undefined,
    text: 'Click Me',
  },
  render: ({ direction, isOpen, toggle, color, disabled, outline, size, text }) => (
    <Dropdown direction={direction} isOpen={isOpen} toggle={toggle}>
      <DropdownToggle color={color} disabled={disabled} outline={outline} size={size} caret>
        {text}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Action</DropdownItem>
        <DropdownItem>Another Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem header>Header</DropdownItem>
        <DropdownItem disabled>Disabled Action</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  ),
};
