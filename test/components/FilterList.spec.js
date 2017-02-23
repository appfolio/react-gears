/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { FilterList, LabelBadge } from '../../src';

describe('<FilterList />', () => {
  it('renders number of LabelBadge based on filter length', () => {
    const filters = [
      {
        label: 'User',
        value: 'Hello World',
      },
      {
        label: 'Property',
        value: '1234 State Street',
      },
    ];
    const wrapper = mount(<FilterList filters={filters} />);
    assert.equal(wrapper.children().find(LabelBadge).length, filters.length);
  });

  it('passes classNames to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world' }]} classNames='cc' />);
    assert.equal(wrapper.children().find(LabelBadge).prop('classNames'), 'cc m-1');
  });

  it('passes label to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world' }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('label'), 'hello');
  });

  it('passes maxWidth to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world', maxWidth: 12 }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('maxWidth'), 12);
  });

  it('passes onRemove callback to LabelBadge', () => {
    const onRemove = () => {};
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world', onRemove: onRemove }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('onRemove'), onRemove);
  });

  it('passes removable to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world', removable: false }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('removable'), false);
  });

  it('passes value to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world' }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('value'), 'world');
  });
});
