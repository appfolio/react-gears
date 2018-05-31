import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { shallow } from 'enzyme';

import { BoundForm } from '../../src';

describe('<BoundForm />', () => {
  const data = {
    firstName: 'Glenn',
    address: {
      address1: '123 awesome',
      city: 'A city'
    }
  };

  const errors = {
    firstName: "Can't be Glenn"
  };

  const submitFunc = sinon.stub();
  const changeFunc = sinon.stub();

  let component;
  beforeEach(() => {
    component = shallow(<BoundForm
      object={data}
      errors={errors}
      onSubmit={submitFunc}
      onChange={changeFunc}
      other="stuff"
    />);
  });

  it('should be initialized with object data', () => {
    assert.equal(component.state().formData, data);
  });

  it('should provide a context', () => {
    const context = component.instance().getChildContext();
    assert.equal(context.value, component.state().formData);
    assert.equal(context.errors, errors);
    assert.equal(context.onChange, component.instance().handleChange);
  });

  it('should update data on change', () => {
    const firstNameOnChange = component.instance().handleChange('firstName');
    firstNameOnChange('Desmond');
    assert.equal(data.firstName, 'Glenn');
    assert.equal(component.state('formData').firstName, 'Desmond');
  });

  it('should emit onChange when changed', () => {
    const firstNameOnChange = component.instance().handleChange('firstName');
    firstNameOnChange('Desmond');
    assert(changeFunc.calledWith(Object.assign({}, data, { firstName: 'Desmond' })));
  });

  it('should support updating nested data', () => {
    const addressOnChange = component.instance().handleChange('address');
    addressOnChange({ address1: '456 cool' });

    assert.equal(data.address.address1, '123 awesome');
    assert.deepEqual(component.state('formData').address, { address1: '456 cool' });
  });

  it('should create nested data', () => {
    const thingOnChange = component.instance().handleChange('thing');
    thingOnChange({ stuff: 'here' });
    assert.equal(data.thing, undefined);
    assert.deepEqual(component.state('formData').thing, { stuff: 'here' });
  });

  it('should update data with target', () => {
    const lastNameOnChange = component.instance().handleChange('lastName');
    const target = document.createElement('input');
    target.setAttribute('value', 'LastName');
    lastNameOnChange({ target });

    assert.equal(data.lastName, undefined);
    assert.equal(component.state('formData').lastName, 'LastName');
  });

  it('should submit with formData', () => {
    const preventDefault = sinon.stub();
    component.simulate('submit', { preventDefault });
    assert.equal(preventDefault.calledOnce, true);
    assert.equal(submitFunc.calledWith({ preventDefault }, component.state('formData')), true);
  });

  it('should forward other props to child form', () => {
    assert.equal(component.prop('other'), 'stuff');
  });
});
