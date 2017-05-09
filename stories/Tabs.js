import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { Nav, NavItem, NavLink } from '../src';
import { number } from '@kadira/storybook-addon-knobs';

storiesOf('Tabs', module)
  .addWithInfo('Live example', () => {
    const activeTab = number('activeTab', 1);
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              active={activeTab === 1}
              onClick={() => {}}
            >
              Tab1
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              active={activeTab === 2}
              onClick={() => { }}
            >
              Moar Tabs
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  });
