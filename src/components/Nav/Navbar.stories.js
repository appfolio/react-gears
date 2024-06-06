import React, { useState } from 'react';
import { bgColors } from '../../tooling/colors';
import Collapse from '../Collapse/Collapse';
import DropdownItem from '../Dropdown/DropdownItem';
import DropdownMenu from '../Dropdown/DropdownMenu';
import DropdownToggle from '../Dropdown/DropdownToggle';
import UncontrolledDropdown from '../Dropdown/UncontrolledDropdown';
import Nav from './Nav';
import Navbar from './Navbar';
import NavbarBrand from './NavbarBrand';
import NavbarToggler from './NavbarToggler';
import NavItem from './NavItem';
import NavLink from './NavLink';

export default {
  title: 'Navbar',
  component: Navbar,
  parameters: {
    sourceLink: 'Nav/Navbar.tsx',
  },
};

export const LiveExample = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar expand="md" {...args}>
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
            <UncontrolledDropdown nav inNavbar direction={args.fixed === 'bottom' ? 'up' : 'down'}>
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
LiveExample.args = {
  fixed: undefined,
  light: false,
  dark: true,
  color: 'primary',
};
LiveExample.argTypes = {
  fixed: {
    control: { type: 'select' },
    options: ['', 'top', 'bottom'],
  },
  color: {
    control: { type: 'select' },
    options: bgColors,
  },
};
