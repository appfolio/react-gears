import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import PatternInput from './PatternInput';

describe('<PatternInput />', () => {
  it('restrictInput should only prevent onChange for invalid input', () => {
    const onChange = sinon.spy();
    const component = mount(
      <PatternInput restrictInput pattern={/^[0-9]*$/} onChange={onChange} />
    );

    assert.equal(component.find('input').getDOMNode().value, '');

    // Valid input
    component.simulate('change', { target: { value: '123' } });
    assert(onChange.called); // << onChange event
    assert.equal(component.find('input').getDOMNode().value, '');
    onChange.resetHistory();

    // Invalid input
    component.simulate('change', { target: { value: 'abc' } });
    assert(!onChange.called); // << No onChange event
  });
});
