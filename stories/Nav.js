import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number, boolean } from '@storybook/addon-knobs';
import { Nav, NavItem, NavLink } from '../src';

storiesOf('Nav', module)
  .add('Tabs', () => {
    const activeTab = number('activeTab', 1);
    return (
      <div>
        <Nav tabs>
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
  })
  .add('Pills', () => {
    const activeTab = number('activeTab', 1);
    return (
      <div>
        <Nav pills vertical={boolean('vertical', false)}>
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
  });
