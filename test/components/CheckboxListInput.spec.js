import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { shallow } from 'enzyme';

import { CheckboxListInput, FormChoice } from '../../src';

describe('<CheckboxListInput />', () => {
  let onChange = sinon.stub();

  const value = [ 'A', 'stuff', 'C' ];
  const component = shallow(
    <CheckboxListInput value={value} onChange={onChange}>
      <FormChoice>A</FormChoice>
      <FormChoice value="stuff">B</FormChoice>
      <FormChoice>Other</FormChoice>
    </CheckboxListInput>
  );

  it('should render with correct type', () => {
    assert.equal(component.type(), 'div');
  });

  it('should set up children', () => {
    component.find(FormChoice).forEach(choice => {
      assert.equal(choice.prop('type'), 'checkbox');
      assert.equal(choice.prop('selected'), value);
      assert.equal(choice.prop('onChange'), component.instance().onChange);
    });
  });

  it('should deselect unchecked choice', () => {
    component.childAt(0).simulate('change', { target: { checked: false, value: 'A' }});
    assert(onChange.calledWith([ 'stuff', 'C' ]));
  });

  it('should select checked choice', () => {
    component.childAt(2).simulate('change', { target: { checked: true, value: 'Other' }});
    assert(onChange.calledWith([ 'A', 'stuff', 'C', 'Other' ]));
  });
});
