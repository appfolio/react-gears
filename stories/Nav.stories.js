import React from 'react';
import { action } from '@storybook/addon-actions';
import { number, boolean } from '@storybook/addon-knobs';
import { Nav, NavItem, NavLink } from '../src';

export default {
  title: 'Nav',
  component: Nav,
};

export const Tabs = () => {
  const activeTab = number('activeTab', 1);
  return (
    <div>
      <Nav tabs fill={boolean('fill', undefined)} justified={boolean('justified', undefined)}>
        <NavItem>
          <NavLink href="#" active={activeTab === 1} onClick={action('onClick')}>
            Receivables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 2} onClick={action('onClick')}>
            Payables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 3} onClick={action('onClick')}>
            Bank Accounts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 4} onClick={action('onClick')}>
            Journal Entries
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 5} disabled onClick={action('onClick')}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export const Pills = () => {
  const activeTab = number('activeTab', 1);
  return (
    <div>
      <Nav
        pills
        fill={boolean('fill', undefined)}
        justified={boolean('justified', undefined)}
        vertical={boolean('vertical', false)}
      >
        <NavItem>
          <NavLink href="#" active={activeTab === 1} onClick={action('onClick')}>
            Receivables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 2} onClick={action('onClick')}>
            Payables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 3} onClick={action('onClick')}>
            Bank Accounts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 4} onClick={action('onClick')}>
            Journal Entries
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 5} disabled onClick={action('onClick')}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};

export const Default = () => {
  const activeTab = number('activeTab', 1);
  return (
    <div>
      <Nav
        vertical={boolean('vertical', false)}
        fill={boolean('fill', undefined)}
        justified={boolean('justified', undefined)}
      >
        <NavItem>
          <NavLink href="#" active={activeTab === 1} onClick={action('onClick')}>
            Receivables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 2} onClick={action('onClick')}>
            Payables
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 3} onClick={action('onClick')}>
            Bank Accounts
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 4} onClick={action('onClick')}>
            Journal Entries
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" active={activeTab === 5} disabled onClick={action('onClick')}>
            Disabled
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
};
