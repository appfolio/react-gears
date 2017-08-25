import React from 'react';
import { SidebarGroup, SidebarTask } from '../src';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

storiesOf('Sidebar', module)
  .addWithInfo('Live example', () => {
    const icon = select('Icon', ['star', 'calendar', 'home']);
    return (
      <div>
        <SidebarGroup title={text('Title', 'tasks')} icon={icon}>
          <SidebarTask callback={() => { alert('ouch!'); }}>
            Callback Task
          </SidebarTask>
          <SidebarTask link='https://github.com/appfolio/react-gears' target='_blank'>
            Link Task
          </SidebarTask>
        </SidebarGroup>
      </div>
    );
  });
