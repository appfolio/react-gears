/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';

import PatternInput from '../../src/components/PatternInput';

describe('<PatternInput />', () => {
  it('restrictInput should only prevent onChange for invalid input', () => {
    const onChange = sinon.spy();
    const component = mount(
      <PatternInput restrictInput pattern={/^[0-9]*$/} onChange={onChange} />
    );
    const input = component.find('input').get(0);

    assert.equal(input.value, '');

    // Valid input
    component.simulate('change', { target: { value: '123' } });
    assert(onChange.called);  // << onChange event
    assert.equal(input.value, '');
    onChange.reset();

    // Invalid input
    component.simulate('change', { target: { value: 'abc' } });
    assert(!onChange.called); // << No onChange event
  });
});
