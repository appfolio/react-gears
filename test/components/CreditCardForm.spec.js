/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { Button } from '../../src/';
import CreditCardForm, { ERRORS } from '../../src/components/CreditCardForm';

const simulate = (component, event, fieldName, value = undefined) =>
  component.simulate(event, { target: { name: fieldName, value } });

describe('<CreditCardForm />', () => {
  it('validates individual fields onBlur', () => {
    const component = mount(<CreditCardForm />);

    const testAfterBlur = (fieldName, expectedError = ERRORS.REQUIRED) => {
      assert.equal(component.state()[fieldName], '');
      assert.equal(component.state().errors[fieldName], undefined);
      simulate(component, 'blur', fieldName);
      assert.equal(component.state()[`${fieldName}IsValid`], false);
      assert.equal(component.state().errors[fieldName], expectedError);
    };

    testAfterBlur('cardHolderName', ERRORS.REQUIRED);
    testAfterBlur('cardNumber', ERRORS.CARD_NUMBER);
    testAfterBlur('cardCVV', ERRORS.REQUIRED);
    testAfterBlur('address1', ERRORS.REQUIRED);
    testAfterBlur('city', ERRORS.REQUIRED);
    testAfterBlur('state', ERRORS.REQUIRED);
    testAfterBlur('postal', ERRORS.REQUIRED);
    testAfterBlur('countryCode', ERRORS.REQUIRED);
  });

  it('validates whole form onSave', () => {
    const component = mount(<CreditCardForm />);
    const saveButton = component.find({ name: 'saveButton' });

    assert.equal(component.state().hasFullyValidated, false);
    saveButton.simulate('click');
    assert.equal(component.state().hasFullyValidated, true);

    assert.deepEqual(component.state().errors, {
      cardHolderName: ERRORS.REQUIRED,
      cardNumber: ERRORS.CARD_NUMBER,
      cardCVV: ERRORS.REQUIRED,
      expiration: ERRORS.CARD_EXPIRATION,
      address1: ERRORS.REQUIRED,
      city: ERRORS.REQUIRED,
      state: ERRORS.REQUIRED,
      postal: ERRORS.REQUIRED,
      countryCode: ERRORS.REQUIRED,
    });
  });

  it('fires onSave only if the whole form is valid', () => {
    const TODAY = new Date();
    const onSave = sinon.spy();
    const component = mount(
      <CreditCardForm
        cardHolderName="John Q. Cardholder"
        cardNumber="4111 1111 1111 1111" cardCVV="12345"
        expirationMonth={TODAY.getMonth() + 1} expirationYear={TODAY.getFullYear() + 1}
        address1="123 Main St." address2=""
        city="Anytown" state="CA" postal="12345" countryCode="US"
        onSave={onSave}
      />
    );
    const buttons = component.find(Button);

    buttons.get(0).onClick();
    assert(onSave.called);
    assert.deepEqual(component.state().errors, {});
  });
});
