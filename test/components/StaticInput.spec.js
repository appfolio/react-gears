import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input, StaticInput } from '../../src';

describe('<StaticInput />', () => {
  const component = shallow(
    <StaticInput value="foobar" state="danger" />
  );

  it('should render with correct type', () => {
    assert.equal(component.type(), Input);
  });

  it('should have the static prop', () => {
    assert.equal(component.prop('static'), true);
  });

  it('should forward the state', () => {
    assert.equal(component.prop('state'), 'danger');
  });

  it('should use value as child', () => {
    assert.equal(component.find(Input).prop('children'), 'foobar');
  });

  it('should use color over state', () => {
    component.setProps({ color: 'success' });
    assert.equal(component.prop('state'), 'success');
  });

  it('should fallback to default value', () => {
    component.setProps({ value: null, defaultValue: 'stuff' });
    assert.equal(component.find(Input).prop('children'), 'stuff');
  });
});
