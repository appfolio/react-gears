import { boolean, select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  UncontrolledDropdown,
} from '../src';
import { bgColors } from './colors';

export default {
  title: 'Navbar',
  component: Navbar,
};

export const LiveExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fixed = select('fixed', ['', 'top', 'bottom'], undefined);

  return (
    <div>
      <Navbar
        expand="md"
        light={boolean('light', false)}
        dark={boolean('dark', true)}
        fixed={fixed}
        color={select('color', bgColors, 'primary')}
      >
        <NavbarBrand href="/">react-gears</NavbarBrand>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/appfolio/react-gears">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar direction={fixed === 'bottom' ? 'up' : 'down'}>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
