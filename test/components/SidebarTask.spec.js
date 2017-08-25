import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';
import { SidebarTask } from '../../src';

describe('<SidebarTask />', () => {
  it('renders as as list item', () => {
    const wrapper = mount(<SidebarTask />);
    assert.equal(wrapper.find('li').length, 1);
  });

  it('renders a link with the passed children as content', () => {
    const wrapper = mount(<SidebarTask link="http://some.url">Hi</SidebarTask>);
    const link = wrapper.find('a');
    assert.equal(link.text(), 'Hi');
    assert.equal(link.prop('href'), 'http://some.url');
  });

  it('calls the passed callback when the link is pressed', () => {
    const callback = sinon.stub();

    const wrapper = mount(<SidebarTask callback={callback}>Hi</SidebarTask>);
    const link = wrapper.find('a');
    link.simulate('click');
    sinon.assert.called(callback);
  });
});
