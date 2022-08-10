import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import FormChoice from '../Form/FormChoice';
import RadioInput from './RadioInput';

describe('<RadioInput />', () => {
  it('should render with correct type', () => {
    const component = shallow(
      <RadioInput value="foobar">
        <FormChoice>Hi</FormChoice>
      </RadioInput>
    );
    assert.equal(component.type(), 'div');
  });

  it('should forward radio as type to children', () => {
    const component = shallow(
      <RadioInput value="foobar">
        <FormChoice>Hi</FormChoice>
      </RadioInput>
    );
    const choice = component.find(FormChoice);
    assert.equal(choice.prop('type'), 'radio');
  });

  it('should pass value as selected input', () => {
    const component = shallow(
      <RadioInput value="foobar">
        <FormChoice>Hi</FormChoice>
      </RadioInput>
    );
    const choice = component.find(FormChoice);
    assert.equal(choice.prop('selected'), 'foobar');
  });

  it('should handle null children', () => {
    shallow(
      <RadioInput value="foobar">
        <FormChoice>Hi</FormChoice>
        {null}
      </RadioInput>
    );
  });
});
