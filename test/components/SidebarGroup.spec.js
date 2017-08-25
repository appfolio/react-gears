import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import { SidebarGroup } from '../../src';

describe('<SidebarGroup />', () => {
  it('renders correctly', () => {
    const component = mount(
      <SidebarGroup icon='star' title='group title'>
        <p>Test</p>
      </SidebarGroup>
    );
    const header = component.find('h2');

    assert.equal(header.text(), ' group title');
    assert.equal(header.find('span').prop('className'), 'icon icon-star');
    assert.equal(component.find('ul').text(), 'Test');
  });
});
