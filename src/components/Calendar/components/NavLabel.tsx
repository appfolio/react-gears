import type { FC, MouseEventHandler, ReactNode } from 'react';
import React from 'react';
import NavItem from '../../Nav/NavItem';
import NavLink from '../../Nav/NavLink';

export interface NavLabelProps {
  selected?: boolean;
  label?: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  visible?: boolean;
}

const NavLabel: FC<NavLabelProps> = ({ selected, label, onClick, visible }) => (
  <NavItem className={!visible ? 'invisible' : ''} data-testid="monthcalendar-navitem">
    <NavLink
      active={selected}
      className="text-center py-1 px-2"
      color="primary"
      onClick={onClick}
      style={{ cursor: 'pointer', listStyle: 'none' }}
    >
      {label}
    </NavLink>
  </NavItem>
);

export default NavLabel;
