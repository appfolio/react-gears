import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { FormChoice, RadioInput } from '../../src';

describe('<RadioInput />', () => {
  const component = shallow(
    <RadioInput value="foobar">
      <FormChoice>Hi</FormChoice>
    </RadioInput>
  );

  const choice = component.find(FormChoice);

  it('should render with correct type', () => {
    assert.equal(component.type(), 'div');
  });

  it('should forward radio as type to children', () => {
    assert.equal(choice.prop('type'), 'radio')
  });

  it('should pass value as selected input', () => {
    assert.equal(choice.prop('selected'), 'foobar');
  });
});
