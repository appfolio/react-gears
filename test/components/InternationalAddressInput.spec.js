import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { InternationalAddressInput, Select, FormFeedback, FormGroup, FormText, Input, Label } from '../../src';
import CA from '../../src/components/address/CAProvinces';
import US from '../../src/components/address/USStates';

describe('<InternationalAddressInput />', () => {
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
    const component = mount(
      <InternationalAddressInput
        value={addressData}
        onChange={callback}
      />
    );

    it('should update address1', () => {
      const input = component.find('[name="address1"]').hostNodes();
      assert.equal(input.prop('value'), 'Wayne Enterprises');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'address1', value: 'Batcave' } });
      sinon.assert.calledWith(callback, { ...addressData, address1: 'Batcave' });
    });

    it('should update address2', () => {
      const input = component.find('[name="address2"]').hostNodes();
      assert.equal(input.prop('value'), '1007 Mountain Drive');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'address2', value: 'Secret Lair' } });
      sinon.assert.calledWith(callback, { ...addressData, address2: 'Secret Lair' });
    });

    it('should update city', () => {
      const input = component.find('[name="city"]').hostNodes();
      assert.equal(input.prop('value'), 'Gotham');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'city', value: 'Metropulos' } });
      sinon.assert.calledWith(callback, { ...addressData, city: 'Metropulos' });
    });

    it('should update state', () => {
      const input = component.find('[name="state"]').hostNodes();
      assert.equal(input.prop('value'), 'NJ');
      assert.equal(input.prop('defaultValue'), null);

      input.simulate('change', { target: { value: 'NY' } });
      sinon.assert.calledWith(callback, { ...addressData, state: 'NY' });

      input.simulate('change', { target: { value: null } });
      sinon.assert.calledWith(callback, { ...addressData, state: null });
    });

    it('should update zip', () => {
      const input = component.find('[name="postal"]').hostNodes();
      assert.equal(input.prop('value'), '07001');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'postal', value: '12345' } });
      sinon.assert.calledWith(callback, { ...addressData, postal: '12345' });
    });

    it('should update country and reset state', () => {
      const input = component.find('[name="countryCode"]').hostNodes();
      assert.equal(input.prop('value'), 'US');

      input.simulate('change', { target: { value: 'CA' } });
      sinon.assert.calledWith(callback, { ...addressData, state: undefined, countryCode: 'CA' });

      input.simulate('change', { target: { value: null } });
      sinon.assert.calledWith(callback, { ...addressData, state: undefined, countryCode: null });
    });

    it('should clear values', () => {
      const input = component.find('[name="address1"]').hostNodes();

      input.simulate('change', { target: { name: 'address1', value: '' } });
      sinon.assert.calledWith(callback, { ...addressData, address1: '' });
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
      <InternationalAddressInput
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
      inputs.forEach(input => assert.equal(input.prop('invalid'), true));
    });

    it('should show the corresponding error for each input', () => {
      const groups = component.find(FormGroup);

      groups.forEach((group) => {
        const input = group.childAt(0);
        const feedback = group.find(FormFeedback);

        assert.equal(feedback.render().text(), errors[input.prop('name')]);
      });
    });
  });

  describe('with hints', () => {
    const hints = {
      address1: 'address1 hint',
      address2: 'address2 hint',
      city: 'city hint',
      state: 'state hint',
      postal: 'postal hint',
      countryCode: 'countryCode hint'
    };

    const component = shallow(
      <InternationalAddressInput
        defaultValue={{
          address1: 'Wayne Enterprises',
          address2: '1007 Mountain Drive',
          city: 'Gotham',
          state: 'NJ',
          postal: '07001',
          countryCode: 'US'
        }}
        hints={hints}
      />
    );

    it('should show the corresponding hint for each input', () => {
      const groups = component.find(FormGroup);

      groups.forEach((group) => {
        const input = group.childAt(0);
        const feedback = group.find(FormText);

        assert.equal(feedback.render().text(), hints[input.prop('name')]);
      });
    });
  });

  describe('disabled', () => {
    function disabledTestCase(disabledProp, expected) {
      const component = shallow(
        <InternationalAddressInput
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
      const component = mount(<InternationalAddressInput showLabels />);
      assert(component.find('label').length, 0);
    });

    it('should show labels when enabled', () => {
      const component = mount(<InternationalAddressInput showLabels />);
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
      const component = mount(<InternationalAddressInput showLabels labels={labels} />);
      const formLabels = component.find(Label);
      assert.equal(formLabels.length, 6);
      formLabels.forEach(label => assert(Object.values(labels).includes(label.text())));
    });

    it('should not show custom labels when disabled', () => {
      const component = mount(<InternationalAddressInput showLabels={false} />);
      assert.equal(component.find('label').length, 0);
    });
  });

  describe('ids', () => {
    it('should not show id by default', () => {
      const component = mount(<InternationalAddressInput />);
      assert.equal(component.find('div#yo').hostNodes().length, 0, 'div id visible');
      assert.equal(component.find('#yo_address1').hostNodes().length, 0, 'address1 id visible');
      assert.equal(component.find('#yo_address2').hostNodes().length, 0, 'address2 id visible');
      assert.equal(component.find('#yo_city').hostNodes().length, 0, 'city id visible');
      assert.equal(component.find('#yo_state').hostNodes().length, 0, 'state id visible');
      assert.equal(component.find('#yo_postal').hostNodes().length, 0, 'postal id visible');
      assert.equal(component.find('#yo_countryCode').hostNodes().length, 0, 'countryCode id visible');
    });

    it('should show id by when specified', () => {
      const component = mount(<InternationalAddressInput id="yo" />);
      assert.equal(component.find('div#yo').hostNodes().length, 1, 'div id missing');
      assert.equal(component.find('#yo_address1').hostNodes().length, 1, 'address1 id missing');
      assert.equal(component.find('#yo_address2').hostNodes().length, 1, 'address2 id missing');
      assert.equal(component.find('#yo_city').hostNodes().length, 1, 'city id missing');
      assert.equal(component.find('#yo_state').hostNodes().length, 1, 'state id missing');
      assert.equal(component.find('#yo_postal').hostNodes().length, 1, 'postal id missing');
      assert.equal(component.find('#yo_countryCode').hostNodes().length, 1, 'countryCode id missing');
    });
  });

  it('should call onBlur for each input', () => {
    const callback = sinon.spy();
    const component = mount(<InternationalAddressInput onBlur={callback} />);
    const fields = ['address1', 'address2', 'city', 'state', 'postal', 'countryCode'];
    fields.forEach((field) => {
      const input = component.find(`[name="${field}"]`).hostNodes();
      input.simulate('blur');
      assert(callback.calledWith(field));
    });
  });

  it('should support a className', () => {
    const component = mount(
      <InternationalAddressInput
        className="address-component"
      />
    );
    assert.equal(component.find('.address-component').hostNodes().length, 1);
  });

  describe('states', () => {
    it('should support different countries', () => {
      const defaultStates = mount(<InternationalAddressInput id="test" value={{ countryCode: 'US' }} />);
      assert.equal(defaultStates.find('#test_state option').length, US.length + 1);

      const component = mount(<InternationalAddressInput id="test" value={{ countryCode: 'CA' }} />);
      assert.equal(component.find('#test_state option').length, CA.length + 1);
    });
  });
});
