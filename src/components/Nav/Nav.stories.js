import { action } from '@storybook/addon-actions';
import React from 'react';
import Nav from './Nav';
import NavItem from './NavItem';
import NavLink from './NavLink';

export default {
  title: 'Nav',
  component: Nav,
  parameters: {
    sourceLink: 'Nav/Nav.tsx',
  },
};

export const Tabs = ({ activeTab, onClick, fill, justified }) => (
  <div>
    <Nav tabs fill={fill} justified={justified}>
      <NavItem>
        <NavLink href="#" active={activeTab === 1} onClick={onClick}>
          Receivables
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 2} onClick={onClick}>
          Payables
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 3} onClick={onClick}>
          Bank Accounts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 4} onClick={onClick}>
          Journal Entries
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 5} disabled onClick={onClick}>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);
Tabs.args = {
  activeTab: 1,
  fill: undefined,
  justified: undefined,
  onClick: action('onClick'),
};

export const Pills = ({ activeTab, onClick, fill, justified, vertical }) => (
  <div>
    <Nav pills fill={fill} justified={justified} vertical={vertical}>
      <NavItem>
        <NavLink href="#" active={activeTab === 1} onClick={onClick}>
          Receivables
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 2} onClick={onClick}>
          Payables
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 3} onClick={onClick}>
          Bank Accounts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 4} onClick={onClick}>
          Journal Entries
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 5} disabled onClick={onClick}>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);
Pills.args = {
  activeTab: 1,
  fill: undefined,
  justified: undefined,
  vertical: false,
  onClick: action('onClick'),
};

export const Default = ({ activeTab, onClick, fill, justified, vertical }) => (
  <div>
    <Nav vertical={vertical} fill={fill} justified={justified}>
      <NavItem>
        <NavLink href="#" active={activeTab === 1} onClick={onClick}>
          Receivables
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 2} onClick={onClick}>
          Payables
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 3} onClick={onClick}>
          Bank Accounts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 4} onClick={onClick}>
          Journal Entries
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#" active={activeTab === 5} disabled onClick={onClick}>
          Disabled
        </NavLink>
      </NavItem>
    </Nav>
  </div>
);
Default.args = {
  activeTab: 1,
  vertical: false,
  fill: undefined,
  justified: undefined,
  onClick: action('onClick'),
};
