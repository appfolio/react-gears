import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input, StaticInput } from '../../src';

describe('<StaticInput />', () => {
  const component = shallow(
    <StaticInput value="foobar" invalid />
  );

  it('should render with correct type', () => {
    assert.equal(component.type(), Input);
  });

  it('should have the plaintext prop', () => {
    assert.equal(component.prop('plaintext'), true);
  });

  it('should forward the state', () => {
    assert.equal(component.prop('invalid'), true);
  });
});
