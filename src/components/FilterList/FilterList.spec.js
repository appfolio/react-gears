import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import LabelBadge from '../LabelBadge/LabelBadge';
import FilterList from './FilterList';

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

  it('adds className prop to className', () => {
    const wrapper = mount(
      <FilterList filters={[{ label: 'hello', value: 'world' }]} className="cc" />
    );
    assert(wrapper.hasClass('cc'));
  });

  it('passes label to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world' }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('label'), 'hello');
  });

  it('passes maxWidth to LabelBadge', () => {
    const wrapper = mount(
      <FilterList maxWidth={12} filters={[{ label: 'hello', value: 'world' }]} />
    );
    assert.equal(wrapper.children().find(LabelBadge).prop('maxWidth'), 12);
  });

  it('passes onRemove callback to LabelBadge', () => {
    const onRemove = sinon.stub();
    const wrapper = mount(
      <FilterList filters={[{ label: 'hello', value: 'world' }]} onRemove={onRemove} />
    );
    wrapper.find('.btn-close').simulate('click');
    sinon.assert.calledWith(onRemove);
  });

  it('passes removable to LabelBadge', () => {
    const wrapper = mount(
      <FilterList filters={[{ label: 'hello', value: 'world', removable: false }]} />
    );
    assert.equal(wrapper.children().find(LabelBadge).prop('removable'), false);
  });

  it('passes value to LabelBadge', () => {
    const wrapper = mount(<FilterList filters={[{ label: 'hello', value: 'world' }]} />);
    assert.equal(wrapper.children().find(LabelBadge).prop('value'), 'world');
  });
});
