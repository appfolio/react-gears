/* eslint-env mocha */
import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input } from 'reactstrap';

import CheckboxBooleanInput from '../../src/components/CheckboxBooleanInput';

describe('<CheckboxBooleanInput />', () => {
  let onChange = sinon.stub();

  const wrapper = shallow(
    <CheckboxBooleanInput value={true} onChange={onChange} />
  );

  const component = wrapper.find(Input);

  it('should be an Input', () => {
    assert.equal(component.type(), Input);
  });

  it('should not have any children', () => {
    assert.equal(component.children().length, 0);
  });

  it('should use value for checked state', () => {
    assert.strictEqual(component.prop('checked'), true);
  });

  it('should call onChange with checked state', () => {
    component.simulate('change', { target: { checked: false }});
    assert(onChange.calledWith(false));
  });
});
