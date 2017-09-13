import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { AddressInput, Select, FormFeedback, FormGroup, Input, Label } from '../../src';
import states from '../../src/components/address/USStates';

describe('<Address />', () => {
  describe('uncontrolled', () => {
    const callback = sinon.spy();
    const component = shallow(
      <AddressInput
        defaultValue={{
          address1: 'Wayne Enterprises',
          address2: '1007 Mountain Drive',
          city: 'Gotham',
          state: 'NJ',
          postal: '07001',
          countryCode: 'US'
        }}
        onChange={callback}
      />
    );

    it('should have address1', () => {
      const input = component.find('[name="address1"]');
      assert.equal(input.prop('placeholder'), 'Address');
      assert.equal(input.prop('defaultValue'), 'Wayne Enterprises');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'address1', value: 'Batcave' } });
      assert(callback.calledWith({ address1: 'Batcave' }));
    });

    it('should have address2', () => {
      const input = component.find('[name="address2"]');
      assert.equal(input.prop('placeholder'), 'Address 2');
      assert.equal(input.prop('defaultValue'), '1007 Mountain Drive');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'address2', value: 'Secret Lair' } });
      assert(callback.calledWith({ address2: 'Secret Lair' }));
    });

    it('should have city', () => {
      const input = component.find('[name="city"]');
      assert.equal(input.prop('placeholder'), 'City');
      assert.equal(input.prop('defaultValue'), 'Gotham');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'city', value: 'Metropulos' } });
      assert(callback.calledWith({ city: 'Metropulos' }));
    });

    it('should have state', () => {
      const input = component.find('[name="state"]');
      assert.equal(input.type(), Select);
      assert.equal(input.prop('placeholder'), 'State');
      assert.equal(input.prop('defaultValue'), 'NJ');
      assert.equal(input.prop('value'), undefined);
      assert.deepEqual(input.prop('options').map(s => s.value), states.map(s => s.value));

      input.simulate('change', { label: 'New York', value: 'NY' });
      assert(callback.calledWith({ state: 'NY' }));

      input.simulate('change', null);
      assert(callback.calledWith({ state: null }));
    });

    it('should have zip', () => {
      const input = component.find('[name="postal"]');
      assert.equal(input.prop('placeholder'), 'Zip');
      assert.equal(input.prop('defaultValue'), '07001');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'postal', value: '12345' } });
      assert(callback.calledWith({ postal: '12345' }));
    });

    it('should have country', () => {
      const input = component.find('[name="countryCode"]');
      assert.equal(input.type(), Select);
      assert.equal(input.prop('placeholder'), 'Country');
      assert.equal(input.prop('defaultValue'), 'US');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { label: 'USA', value: 'US' });
      assert(callback.calledWith({ countryCode: 'US' }));

      input.simulate('change', null);
      assert(callback.calledWith({ countryCode: null }));
    });

    it('should not set any color on FormGroups without errors', () => {
      const groups = component.find(FormGroup);
      groups.forEach(group => assert.equal(group.prop('color'), undefined));
    });

    it('should not set the state of non-Select inputs without errors', () => {
      const groups = component.find(Input);
      groups.forEach(group => assert.equal(group.prop('state'), undefined));
    });

    it('should not have any feedback without errors', () => {
      const feedbacks = component.find(FormFeedback);
      assert.equal(feedbacks.length, 0);
    });
  });

  describe('controlled', () => {
    const callback = sinon.spy();
    const addressData = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US'
    };
    const component = shallow(
      <AddressInput
        value={addressData}
        onChange={callback}
      />
    );

    it('should update address1', () => {
      const input = component.find('[name="address1"]');
      assert.equal(input.prop('value'), 'Wayne Enterprises');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'address1', value: 'Batcave' } });
      assert(callback.calledWith(Object.assign({}, addressData, { address1: 'Batcave' })));
    });

    it('should update address2', () => {
      const input = component.find('[name="address2"]');
      assert.equal(input.prop('value'), '1007 Mountain Drive');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'address2', value: 'Secret Lair' } });
      assert(callback.calledWith(Object.assign({}, addressData, { address2: 'Secret Lair' })));
    });

    it('should update city', () => {
      const input = component.find('[name="city"]');
      assert.equal(input.prop('value'), 'Gotham');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'city', value: 'Metropulos' } });
      assert(callback.calledWith(Object.assign({}, addressData, { city: 'Metropulos' })));
    });

    it('should update state', () => {
      const input = component.find('[name="state"]');
      assert.equal(input.prop('value'), 'NJ');
      assert.equal(input.prop('defaultValue'), null);

      input.simulate('change', { label: 'New York', value: 'NY' });
      assert(callback.calledWith(Object.assign({}, addressData, { state: 'NY' })));

      input.simulate('change', null);
      assert(callback.calledWith(Object.assign({}, addressData, { state: null })));
    });

    it('should update zip', () => {
      const input = component.find('[name="postal"]');
      assert.equal(input.prop('value'), '07001');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'postal', value: '12345' } });
      assert(callback.calledWith(Object.assign({}, addressData, { postal: '12345' })));
    });

    it('should update country', () => {
      const input = component.find('[name="countryCode"]');
      assert.equal(input.prop('value'), 'US');
      assert.equal(input.prop('defaultValue'), null);

      input.simulate('change', { label: 'USA', value: 'US' });
      assert(callback.calledWith(Object.assign({}, addressData, { countryCode: 'US' })));

      input.simulate('change', null);
      assert(callback.calledWith(Object.assign({}, addressData, { countryCode: null })));
    });
  });

  describe('with errors', () => {
    const errors = {
      address1: 'address1 error',
      address2: 'address2 error',
      city: 'city error',
      state: 'state error',
      postal: 'postal error',
      countryCode: 'countryCode error'
    };

    const component = shallow(
      <AddressInput
        defaultValue={{
          address1: 'Wayne Enterprises',
          address2: '1007 Mountain Drive',
          city: 'Gotham',
          state: 'NJ',
          postal: '07001',
          countryCode: 'US'
        }}
        error={errors}
      />
    );

    it('should set color of each FormGroup', () => {
      const groups = component.find(FormGroup);
      groups.forEach(group => assert.equal(group.prop('color'), 'danger'));
    });

    it('should set the state of non-Select inputs', () => {
      const inputs = component.find(Input);
      inputs.forEach(input => assert.equal(input.prop('state'), 'danger'));
    });

    it('should show the corresponding error for each input', () => {
      const groups = component.find(FormGroup);

      groups.forEach(group => {
        const input = group.childAt(0);
        const feedback = group.find(FormFeedback);

        assert.equal(feedback.render().text(), errors[input.prop('name')]);
      });
    });
  });

  describe('disabled', () => {
    function disabledTestCase(disabledProp, expected) {
      const component = shallow(
        <AddressInput
          defaultValue={{
            address1: 'Wayne Enterprises',
            address2: '1007 Mountain Drive',
            city: 'Gotham',
            state: 'NJ',
            postal: '07001',
            countryCode: 'US'
          }}
          disabled={disabledProp}
        />
      );

      const inputs = component.find(Input);
      const selects = component.find(Select);

      inputs.forEach(input => assert.equal(input.prop('disabled'), expected));
      selects.forEach(select => assert.equal(select.prop('disabled'), expected));
    }

    it('should disable all the fields when true', () => {
      disabledTestCase(true, true);
    });

    it('should not disable any fields when false', () => {
      disabledTestCase(false, false);
    });

    it('should be disabled by default', () => {
      disabledTestCase(undefined, false);
    });
  });

  describe('labels', () => {
    it('should not show labels by default', () => {
      const component = mount(<AddressInput showLabels />);
      assert(component.find('label').length, 0);
    });

    it('should show labels when enabled', () => {
      const component = mount(<AddressInput showLabels />);
      assert.equal(component.find('label').length, 6);
    });

    it('should show custom when enabled', () => {
      const labels = {
        address1: 'Alpha',
        address2: 'Bravo',
        city: 'Charlie',
        state: 'Delta',
        postal: 'Echo',
        countryCode: 'Foxtrot'
      };
      const component = mount(<AddressInput showLabels labels={labels} />);
      Object.keys(labels).forEach(key => {
        assert(component.contains(<Label>{labels[key]}</Label>));
      });
    });

    it('should not show custom labels when disabled', () => {
      const component = mount(<AddressInput showLabels={false} />);
      assert.equal(component.find('label').length, 0);
    });
  });
});
