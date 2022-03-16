import assert from 'assert';
import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import { assertAccessible } from '../../dev_util/a11yHelpers';
import FormFeedback from '../Form/FormFeedback';
import FormGroup from '../Form/FormGroup';
import FormText from '../Form/FormText';
import Input from '../Input/Input';
import Label from '../Label/Label';
import Select from '../Select/Select';
import AddressInput from './AddressInput';
import CA from './util/CAProvinces';
import US from './util/USStates';

describe('AddressInput', () => {
  describe('uncontrolled', () => {
    const callback = sinon.spy();
    const defaultValue = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US',
    };
    const component = mount(<AddressInput defaultValue={defaultValue} onChange={callback} />);

    it('should be accessible', async () => {
      await assertAccessible(<AddressInput defaultValue={defaultValue} onChange={callback} />);
    });

    it('should have address1', () => {
      const input = component.find('[name="address1"]').hostNodes();
      assert.equal(input.prop('placeholder'), 'Address');
      assert.equal(input.prop('defaultValue'), 'Wayne Enterprises');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'address1', value: 'Batcave' } });
      assert(callback.calledWith({ address1: 'Batcave' }));
    });

    it('should have address2', () => {
      const input = component.find('[name="address2"]').hostNodes();
      assert.equal(input.prop('placeholder'), 'Address 2');
      assert.equal(input.prop('defaultValue'), '1007 Mountain Drive');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'address2', value: 'Secret Lair' } });
      assert(callback.calledWith({ address2: 'Secret Lair' }));
    });

    it('should have city', () => {
      assert.strictEqual(
        component.find('.col-sm-6.pe-sm-3 #addressInput_city').hostNodes().length,
        1
      );

      const input = component.find('[name="city"]').hostNodes();
      assert.equal(input.prop('placeholder'), 'City');
      assert.equal(input.prop('defaultValue'), 'Gotham');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'city', value: 'Metropulos' } });
      assert(callback.calledWith({ city: 'Metropulos' }));
    });

    it('should have state', () => {
      const input = component.find('select[name="state"]').hostNodes();
      // assert.equal(input.prop('placeholder'), 'State');  TODO selects don't have placeholders
      assert.equal(input.prop('defaultValue'), 'NJ');
      assert.equal(input.prop('value'), undefined);
      input.simulate('change', { target: { value: 'NY' } });
      assert(callback.calledWith({ state: 'NY' }));

      input.simulate('change', { target: { value: null } });
      assert(callback.calledWith({ state: null }));
    });

    it('should have zip', () => {
      const input = component.find('[name="postal"]').hostNodes();
      assert.equal(input.prop('placeholder'), 'Zip');
      assert.equal(input.prop('defaultValue'), '07001');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { name: 'postal', value: '12345' } });
      assert(callback.calledWith({ postal: '12345' }));
    });

    it('should have country', () => {
      const input = component.find('[name="countryCode"]').hostNodes();
      // assert.equal(input.prop('placeholder'), 'Country'); TODO selects don't have placeholders
      assert.equal(input.prop('defaultValue'), 'US');
      assert.equal(input.prop('value'), undefined);

      input.simulate('change', { target: { value: 'US' } });
      assert(callback.calledWith({ countryCode: 'US' }));

      input.simulate('change', { target: { value: null } });
      assert(callback.calledWith({ countryCode: null }));
    });

    it('should not set any color on FormGroups without errors', () => {
      const groups = component.find(FormGroup);
      groups.forEach((group) => assert.equal(group.prop('feedback'), undefined));
    });

    it('should not set the state of non-Select inputs without errors', () => {
      const groups = component.find(Input);
      groups.forEach((group) => assert.equal(group.prop('state'), undefined));
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
      countryCode: 'US',
    };
    const component = mount(<AddressInput value={addressData} onChange={callback} />);

    it('should update address1', () => {
      const input = component.find('[name="address1"]').hostNodes();
      assert.equal(input.prop('value'), 'Wayne Enterprises');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'address1', value: 'Batcave' } });
      assert(callback.calledWith({ ...addressData, address1: 'Batcave' }));
    });

    it('should update address2', () => {
      const input = component.find('[name="address2"]').hostNodes();
      assert.equal(input.prop('value'), '1007 Mountain Drive');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'address2', value: 'Secret Lair' } });
      assert(callback.calledWith({ ...addressData, address2: 'Secret Lair' }));
    });

    it('should update city', () => {
      const input = component.find('[name="city"]').hostNodes();
      assert.equal(input.prop('value'), 'Gotham');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'city', value: 'Metropulos' } });
      assert(callback.calledWith({ ...addressData, city: 'Metropulos' }));
    });

    it('should update state', () => {
      const input = component.find('[name="state"]').hostNodes();
      assert.equal(input.prop('value'), 'NJ');
      assert.equal(input.prop('defaultValue'), null);

      input.simulate('change', { target: { value: 'NY' } });
      assert(callback.calledWith({ ...addressData, state: 'NY' }));

      input.simulate('change', { target: { value: null } });
      assert(callback.calledWith({ ...addressData, state: null }));
    });

    it('should update zip', () => {
      const input = component.find('[name="postal"]').hostNodes();
      assert.equal(input.prop('value'), '07001');
      assert.equal(input.prop('defaultValue'), undefined);

      input.simulate('change', { target: { name: 'postal', value: '12345' } });
      assert(callback.calledWith({ ...addressData, postal: '12345' }));
    });

    it('should update country', () => {
      const input = component.find('[name="countryCode"]').hostNodes();
      assert.equal(input.prop('value'), 'US');
      assert.equal(input.prop('defaultValue'), null);

      input.simulate('change', { target: { value: 'US' } });
      assert(callback.calledWith({ ...addressData, countryCode: 'US' }));

      input.simulate('change', { target: { value: null } });
      assert(callback.calledWith({ ...addressData, countryCode: null }));
    });

    it('should clear values', () => {
      const input = component.find('[name="address1"]').hostNodes();

      input.simulate('change', { target: { name: 'address1', value: '' } });
      assert(callback.calledWith({ ...addressData, address1: '' }));
    });
  });

  describe('with errors', () => {
    const errors = {
      address1: 'address1 error',
      address2: 'address2 error',
      city: 'city error',
      state: 'state error',
      postal: 'postal error',
      countryCode: 'countryCode error',
    };

    const defaultValue = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US',
    };

    const component = shallow(<AddressInput defaultValue={defaultValue} error={errors} />);

    it('should be accessible', async () => {
      await assertAccessible(<AddressInput defaultValue={defaultValue} error={errors} />);
    });

    it('should set color of each FormGroup', () => {
      const groups = component.find(FormGroup);
      groups.forEach((group) => assert.equal(group.prop('color'), 'danger'));
    });

    it('should set the state of non-Select inputs', () => {
      const inputs = component.find(Input);
      inputs.forEach((input) => assert.equal(input.prop('invalid'), true));
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
      countryCode: 'countryCode hint',
    };

    const defaultValue = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US',
    };

    const component = shallow(<AddressInput defaultValue={defaultValue} hints={hints} />);

    it('should be accessible', async () => {
      await assertAccessible(<AddressInput defaultValue={defaultValue} hints={hints} />);
    });

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
    const defaultValue = {
      address1: 'Wayne Enterprises',
      address2: '1007 Mountain Drive',
      city: 'Gotham',
      state: 'NJ',
      postal: '07001',
      countryCode: 'US',
    };

    function disabledTestCase(disabledProp, expected) {
      const component = shallow(
        <AddressInput defaultValue={defaultValue} disabled={disabledProp} />
      );

      const inputs = component.find(Input);
      const selects = component.find(Select);

      inputs.forEach((input) => assert.equal(input.prop('disabled'), expected));
      selects.forEach((select) => assert.equal(select.prop('disabled'), expected));
    }

    it('should be accessible', async () => {
      await assertAccessible(<AddressInput defaultValue={defaultValue} disabled />);
    });

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
    it('should be accessible', async () => {
      await assertAccessible(<AddressInput showLabels />);
    });

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
        countryCode: 'Foxtrot',
      };
      const component = mount(<AddressInput showLabels labels={labels} />);
      const formLabels = component.find(Label);
      assert.equal(formLabels.length, 6);
      formLabels.forEach((label) => assert(Object.values(labels).includes(label.text())));
    });

    it('should only show screen reader labels when disabled', () => {
      const component = mount(<AddressInput showLabels={false} />);
      assert.equal(component.find('label.visually-hidden').length, 6);
    });
  });

  it('should support compact mode', () => {
    const compact = mount(<AddressInput compact />);

    assert.strictEqual(compact.find('.col-12 #addressInput_city').hostNodes().length, 1);
    assert.strictEqual(compact.find('.col-12.pr-sm-3 #addressInput_city').hostNodes().length, 0);
    assert.strictEqual(compact.find('.col-sm-6 #addressInput_city').hostNodes().length, 0);
    assert.strictEqual(compact.find('.col-sm-6 #addressInput_city').hostNodes().length, 0);

    assert.strictEqual(compact.find('.col-4 #addressInput_state').hostNodes().length, 1);
    assert.strictEqual(compact.find('.col-sm-3 #addressInput_state').hostNodes().length, 0);
    assert.strictEqual(compact.find('.col-md-2 #addressInput_state').hostNodes().length, 0);

    assert.strictEqual(compact.find('.col-8 #addressInput_postal').hostNodes().length, 1);
    assert.strictEqual(compact.find('.col-sm-3 #addressInput_postal').hostNodes().length, 0);
    assert.strictEqual(compact.find('.col-md-4 #addressInput_postal').hostNodes().length, 0);
  });

  describe('ids', () => {
    it('should not show id by default', () => {
      const component = mount(<AddressInput />);
      assert.equal(component.find('div#yo').hostNodes().length, 0, 'div id visible');
      assert.equal(component.find('#yo_address1').hostNodes().length, 0, 'address1 id visible');
      assert.equal(component.find('#yo_address2').hostNodes().length, 0, 'address2 id visible');
      assert.equal(component.find('#yo_city').hostNodes().length, 0, 'city id visible');
      assert.equal(component.find('#yo_state').hostNodes().length, 0, 'state id visible');
      assert.equal(component.find('#yo_postal').hostNodes().length, 0, 'postal id visible');
      assert.equal(
        component.find('#yo_countryCode').hostNodes().length,
        0,
        'countryCode id visible'
      );
    });

    it('should show id by when specified', () => {
      const component = mount(<AddressInput id="yo" />);
      assert.equal(component.find('div#yo').hostNodes().length, 1, 'div id missing');
      assert.equal(component.find('#yo_address1').hostNodes().length, 1, 'address1 id missing');
      assert.equal(component.find('#yo_address2').hostNodes().length, 1, 'address2 id missing');
      assert.equal(component.find('#yo_city').hostNodes().length, 1, 'city id missing');
      assert.equal(component.find('#yo_state').hostNodes().length, 1, 'state id missing');
      assert.equal(component.find('#yo_postal').hostNodes().length, 1, 'postal id missing');
      assert.equal(
        component.find('#yo_countryCode').hostNodes().length,
        1,
        'countryCode id missing'
      );
    });

    it('should be accessible when specifying an id', async () => {
      await assertAccessible(<AddressInput id="yo" />);
    });
  });

  it('should show country when enabled', () => {
    const component = mount(<AddressInput showCountry />);
    assert.equal(component.find('CountryInput').length, 1);
  });

  it('should not show country when disabled', () => {
    const component = mount(<AddressInput showCountry={false} />);
    assert.equal(component.find('CountryInput').length, 0);
  });

  it('should call onBlur for each input', () => {
    const callback = sinon.spy();
    const component = mount(<AddressInput onBlur={callback} />);
    const fields = ['address1', 'address2', 'city', 'state', 'postal', 'countryCode'];
    fields.forEach((field) => {
      const input = component.find(`[name="${field}"]`).hostNodes();
      input.simulate('blur');
      assert(callback.calledWith(field));
    });
  });

  it('should support a className', () => {
    const component = mount(<AddressInput className="address-component" />);
    assert.equal(component.find('.address-component').hostNodes().length, 1);
  });

  describe('states', () => {
    it('should support different countries', () => {
      const defaultStates = mount(<AddressInput id="test" />);
      assert.equal(defaultStates.find('#test_state option').length, US.length + 1);

      const component = mount(<AddressInput id="test" countries={['CA']} />);
      assert.equal(component.find('#test_state option').length, CA.length + 1);

      const allSupported = mount(<AddressInput id="test" countries={['CA', 'US']} />);
      assert.equal(allSupported.find('#test_state option').length, CA.length + US.length + 1);
    });
  });

  describe('custom input namme', () => {
    const inputName = {
      address1: 'custom_name_address1',
      address2: 'custom_name_address2',
      city: 'custom_name_city',
      state: 'custom_name_state',
      postal: 'custom_name_postal',
      countryCode: 'custom_name_countryCode',
    };

    it('should pass custom names to the respective inputs', () => {
      const component = mount(<AddressInput inputName={inputName} />);

      assert.equal(component.find('input[name="address1"]').length, 0);
      assert.equal(component.find('input[name="custom_name_address1"]').length, 1);

      assert.equal(component.find('input[name="address2"]').length, 0);
      assert.equal(component.find('input[name="custom_name_address2"]').length, 1);

      assert.equal(component.find('input[name="city"]').length, 0);
      assert.equal(component.find('input[name="custom_name_city"]').length, 1);

      assert.equal(component.find('select[name="state"]').length, 0);
      assert.equal(component.find('select[name="custom_name_state"]').length, 1);

      assert.equal(component.find('input[name="postal"]').length, 0);
      assert.equal(component.find('input[name="custom_name_postal"]').length, 1);

      assert.equal(component.find('select[name="countryCode"]').length, 0);
      assert.equal(component.find('select[name="custom_name_countryCode"]').length, 1);
    });

    it('should respect custom input names for values', () => {
      const value = {
        custom_name_address1: '123 Sesame St',
        custom_name_address2: '',
        custom_name_city: 'Sesame City',
        custom_name_state: 'CA',
        custom_name_postal: '92108',
        custom_name_countryCode: 'US',
      };

      const component = mount(<AddressInput inputName={inputName} value={value} />);

      assert.strictEqual(
        component.find('input[name="custom_name_address1"]').first().prop('value'),
        value.custom_name_address1
      );
      assert.strictEqual(
        component.find('input[name="custom_name_address2"]').first().prop('value'),
        value.custom_name_address2
      );
      assert.strictEqual(
        component.find('input[name="custom_name_city"]').first().prop('value'),
        value.custom_name_city
      );
      assert.strictEqual(
        component.find('select[name="custom_name_state"]').first().prop('value'),
        value.custom_name_state
      );
      assert.strictEqual(
        component.find('input[name="custom_name_postal"]').first().prop('value'),
        value.custom_name_postal
      );
      assert.strictEqual(
        component.find('select[name="custom_name_countryCode"]').first().prop('value'),
        value.custom_name_countryCode
      );
    });

    it('should use custom input names for onChange', () => {
      const onChange = sinon.spy();
      const component = mount(<AddressInput onChange={onChange} inputName={inputName} />);

      Object.values(inputName).forEach((field) => {
        const input = component.find(`[name="${field}"]`).hostNodes();
        input.simulate('change', { target: { name: field, value: '' } });
        assert(onChange.called);
      });
    });

    it('should use custom input names for onBlur', () => {
      const onBlur = sinon.spy();
      const component = mount(<AddressInput onBlur={onBlur} inputName={inputName} />);

      Object.values(inputName).forEach((field) => {
        const input = component.find(`[name="${field}"]`).hostNodes();
        input.simulate('blur');
        assert(onBlur.calledWith(field));
      });
    });
  });
});
