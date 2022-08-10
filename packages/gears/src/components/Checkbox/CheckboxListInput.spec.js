import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import FormChoice from '../Form/FormChoice';
import CheckboxListInput from './CheckboxListInput';

describe('<CheckboxListInput />', () => {
  const render = ({ onChange = sinon.stub(), value = [] }) =>
    shallow(
      <CheckboxListInput value={value} onChange={onChange}>
        <FormChoice>A</FormChoice>
        <FormChoice value="stuff">B</FormChoice>
        <FormChoice>Other</FormChoice>
      </CheckboxListInput>
    );

  it('should render with correct type', () => {
    const component = render({});
    assert.equal(component.type(), 'div');
  });

  it('should set up children', () => {
    const value = ['A', 'stuff', 'C'];
    const component = render({ value });
    component.find(FormChoice).forEach((choice) => {
      assert.equal(choice.prop('type'), 'checkbox');
      assert.equal(choice.prop('selected'), value);
      assert.equal(choice.prop('onChange'), component.instance().onChange);
    });
  });

  it('should deselect unchecked choice', () => {
    const onChange = sinon.stub();
    const component = render({ onChange, value: ['A', 'stuff', 'C'] });
    component.childAt(0).simulate('change', { target: { checked: false, value: 'A' } });
    assert(onChange.calledWith(['stuff', 'C']));
  });

  it('should select checked choice', () => {
    const onChange = sinon.stub();
    const component = render({ onChange, value: ['A', 'stuff', 'C'] });
    component.childAt(2).simulate('change', { target: { checked: true, value: 'Other' } });
    assert(onChange.calledWith(['A', 'stuff', 'C', 'Other']));
  });

  it('should handle null children', () => {
    shallow(
      <CheckboxListInput>
        <FormChoice>A</FormChoice>
        {null}
      </CheckboxListInput>
    );
  });
});
