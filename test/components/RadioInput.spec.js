/* eslint-env mocha */
import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { shallow } from 'enzyme';

import RadioInput from '../../src/components/RadioInput';
import FormChoice from '../../src/components/FormChoice';

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
