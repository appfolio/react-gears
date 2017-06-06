/* eslint-env mocha */
import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { mount } from 'enzyme';

import { CheckboxBooleanInput, Input } from '../../src';

describe('<CheckboxBooleanInput />', () => {
  let onChange = sinon.stub();

  const wrapper = mount(
    <CheckboxBooleanInput value={true} onChange={onChange} />
  );

  const component = wrapper.find(Input);

  it('should be an Input', () => {
    assert.equal(component.type(), Input);
  });

  it('should not have any children', () => {
    assert.equal(component.children().length, 0);
  });

  it('should not render checkboxLabel', () => {
    assert.equal(wrapper.ref('label').exists(), false);
  });

  it('should use value for checked state', () => {
    assert.strictEqual(component.prop('checked'), true);
  });

  it('should call onChange with checked state', () => {
    component.simulate('change', { target: { checked: false }});
    assert(onChange.calledWith(false));
  });

  it('should render checkboxLabel if specified', () => {
    const wrapped = mount(
      <CheckboxBooleanInput checkboxLabel="Yowza" />
    );
    assert.equal(wrapped.ref('label').text(), 'Yowza');
    assert.equal(wrapped.ref('label').exists(), true);
  });
});
