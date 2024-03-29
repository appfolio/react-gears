import assert from 'assert';
import { shallow, mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Collapse from '../Collapse/Collapse';
import ExpandableSection from './ExpandableSection';

describe('<ExpandableSection />', () => {
  it('should be closed by default', () => {
    const component = shallow(
      <ExpandableSection title="Open">
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
  });

  it('should be closed when false passed as prop', () => {
    const component = shallow(
      <ExpandableSection title="Open" open={false}>
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
  });

  it('should be open when true passed as prop', () => {
    const component = shallow(
      <ExpandableSection title="Open" open>
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should be visible');
  });

  it('should be open when clicked', () => {
    const component = mount(
      <ExpandableSection title="Open">
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
    component.find('[role="button"]').simulate('click');
    assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should be visible');
  });

  it('should be open when prop changed', () => {
    const component = mount(
      <ExpandableSection title="Open">
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    assert.equal(component.find(Collapse).prop('isOpen'), false, 'inner block should be hidden');
    component.setProps({ open: true });
    component.update();
    assert.equal(component.find(Collapse).prop('isOpen'), true, 'inner block should be visible');
  });

  it('should call onToggle when state changed', () => {
    const onToggle = sinon.spy();
    const component = mount(
      <ExpandableSection title="Open" onToggle={onToggle}>
        <h1>Hello World!</h1>
      </ExpandableSection>
    );

    component.find('[role="button"]').simulate('click');
    assert(onToggle.calledWith(true), 'onToggle called with true');

    component.find('[role="button"]').simulate('click');
    assert(onToggle.calledWith(false), 'onToggle called with false');
  });
});
