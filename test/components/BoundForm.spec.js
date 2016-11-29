/* eslint-env mocha */
import React from 'react';
import sinon from 'sinon';
import assert from 'assert';
import { shallow } from 'enzyme';

import { Input } from 'reactstrap';

import BoundForm from '../../src/components/BoundForm';
import FormRow from '../../src/components/FormRow';
import FormChoice from '../../src/components/FormChoice';

describe('<BoundForm />', () => {
  let data = {
    firstName: 'Glenn',
    address: {
      address1: '123 awesome',
      city: 'A city'
    }
  };

  const submitFunc = sinon.stub();

  const Composite = (props) => (
    <div>
      <Input name="address1" value={props.address1} />
      <Input name="city" value={props.city} />
    </div>
  );

  const component = shallow(
    <BoundForm object={data} onSubmit={submitFunc}>
      <FormRow label="First Name" name="firstName" />
      <FormRow label="Last Name" name="lastName" />
      <FormRow type="checkbox" label="Foobar" name="checkboxes">
        <FormChoice name="vader">Darth Vader</FormChoice>
      </FormRow>
      <FormRow type={Composite} name="address" />
      <FormRow type={Composite} name="thing" />
    </BoundForm>
  );

  it('should provide value from data object', () => {
    const row = component.find('[name="firstName"]');
    assert.equal(row.prop('value'), 'Glenn');
  });

  it('should provide default value for inputs without data', () => {
    const row = component.find('[name="lastName"]');
    assert.equal(row.prop('value'), '');
  });

  it('should update data on change', () => {
    const row = component.find('[name="firstName"]');
    row.simulate('change', 'Desmond');
    assert.equal(data.firstName, 'Glenn');
    assert.equal(component.state('formData').firstName, 'Desmond');
  });

  it('should support nested data', () => {
    const row = component.find('[name="address"]');
    assert.equal(row.prop('value'), component.state('formData').address);
    assert.equal(row.prop('address1'), '123 awesome');
    assert.equal(row.prop('city'), 'A city');
  });

  it('should support updating nested data', () => {
    const row = component.find('[name="address"]');
    row.simulate('change', { address1: '456 cool' });
    assert.equal(data.address.address1, '123 awesome');
    assert.deepEqual(component.state('formData').address, { address1: '456 cool' });
  });

  it('should create nested data', () => {
    const row = component.find('[name="thing"]');
    row.simulate('change', { stuff: 'here' });
    assert.equal(data.thing, undefined);
    assert.deepEqual(component.state('formData').thing, { stuff: 'here' });
  });

  it('should submit with formData', () => {
    const preventDefault = sinon.stub();
    component.simulate('submit', { preventDefault });
    assert.equal(preventDefault.calledOnce, true);
    assert.equal(submitFunc.calledWith({ preventDefault }, component.state('formData')), true);
  });
});
