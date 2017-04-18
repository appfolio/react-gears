/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { AddressInput } from '../../src';
import {
  InputFormGroup,
  SelectFormGroup
} from '../../src/components/FormGroups';
import states from '../../src/components/address/USStates';
import countries from '../../src/components/address/Countries.js';

describe('<Address />', () => {
  describe('uncontrolled', () => {
    const callback = sinon.spy();
    const addressProps = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US'
    };
    const component = shallow(
      <AddressInput defaultValue={addressProps} onChange={callback} />
    );

    function hasInputFormGroupTestCase(name) {
      const input = component.find(`[name="${name}"]`);
      assert.deepEqual(input.prop('defaultValue'), addressProps);
      assert.equal(input.prop('onChange'), callback);
      return input;
    }

    function hasSelectFormGroupTestCase(name, options) {
      const select = component.find(`[name="${name}"]`);
      assert.deepEqual(select.prop('defaultValue'), addressProps);
      assert.equal(select.prop('onChange'), callback);
      assert.equal(select.prop('className'), 'w-100');
      assert.deepEqual(select.prop('options'), options);
      return select;
    }

    it('should have address1', () => {
      hasInputFormGroupTestCase('address1');
    });

    it('should have address2', () => {
      hasInputFormGroupTestCase('address2');
    });

    it('should have city', () => {
      hasInputFormGroupTestCase('city');
    });

    it('should have state', () => {
      const select = hasSelectFormGroupTestCase(
        'state',
        states.map(s => ({ label: s.value, value: s.value }))
      );
      assert.deepEqual(select.prop('formGroupProps'), {
        className: 'pr-3'
      });
    });

    it('should have zip', () => {
      const input = hasInputFormGroupTestCase('postal');
      assert.equal(input.prop('placeholder'), 'Zip');
    });

    it('should have country', () => {
      hasSelectFormGroupTestCase('countryCode', countries);
    });
  });

  describe('controlled', () => {
    const callback = sinon.spy();
    const addressProps = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US'
    };
    const component = shallow(
      <AddressInput value={addressProps} onChange={callback} />
    );

    function hasInputFormGroupTestCase(name) {
      const input = component.find(`[name="${name}"]`);
      assert.deepEqual(input.prop('value'), addressProps);
      assert.equal(input.prop('onChange'), callback);
      return input;
    }

    function hasSelectFormGroupTestCase(name, options) {
      const select = component.find(`[name="${name}"]`);
      assert.deepEqual(select.prop('value'), addressProps);
      assert.equal(select.prop('onChange'), callback);
      assert.equal(select.prop('className'), 'w-100');
      assert.deepEqual(select.prop('options'), options);
      return select;
    }

    it('should have address1', () => {
      hasInputFormGroupTestCase('address1');
    });

    it('should have address2', () => {
      hasInputFormGroupTestCase('address2');
    });

    it('should have city', () => {
      hasInputFormGroupTestCase('city');
    });

    it('should have state', () => {
      const select = hasSelectFormGroupTestCase(
        'state',
        states.map(s => ({ label: s.value, value: s.value }))
      );
      assert.deepEqual(select.prop('formGroupProps'), {
        className: 'pr-3'
      });
    });

    it('should have zip', () => {
      const input = hasInputFormGroupTestCase('postal');
      assert.equal(input.prop('placeholder'), 'Zip');
    });

    it('should have country', () => {
      hasSelectFormGroupTestCase('countryCode', countries);
    });
  });

  it('should pass through all other props', () => {
    const component = shallow(<AddressInput x="a" y={1} />);

    const inputFormGroups = component.find(InputFormGroup);
    assert.equal(inputFormGroups.length, 4);

    inputFormGroups.forEach(input => {
      assert.equal(input.prop('x'), 'a');
      assert.equal(input.prop('y'), 1);
    });

    const selectFormGroups = component.find(SelectFormGroup);
    assert.equal(selectFormGroups.length, 2);

    selectFormGroups.forEach(select => {
      assert.equal(select.prop('x'), 'a');
      assert.equal(select.prop('y'), 1);
    });
  });
});
