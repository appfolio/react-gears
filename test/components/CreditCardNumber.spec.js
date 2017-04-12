/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import CreditCardNumber from '../../src/components/CreditCardNumber';
import Icon from '../../src/components/Icon';

const EXAMPLES = {
  'diners-club': '30569309025904',
  amex: '378282246310005',
  discover: '6011111111111117',
  jcb: '3530111333300000',
  mastercard: '5555555555554444',
  visa: '4111111111111111',
};

describe('<CreditCardNumber />', () => {
  it('should render no icon, by default', () => {
    const component = shallow(<CreditCardNumber />);
    assert.equal(component.find(Icon).length, 0);
  });

  it('should handle specified values', () => {
    const component = mount(<CreditCardNumber value={EXAMPLES.visa} />);

    const input = component.find('input');
    assert.equal(input.length, 1);
    assert.equal(input.get(0).value, '4111 1111 1111 1111');
    assert.equal(component.find(Icon).prop('name'), 'cc-visa');
  });

  it('should render correct icons for valid card numbers', () => {
    Object.keys(EXAMPLES).forEach(key => {
      const expectedIcon = `cc-${key}`;
      const cardNumber = EXAMPLES[key];

      const component = mount(<CreditCardNumber />);
      const input = component.find('input');
      input.simulate('change', { target: { value: cardNumber } });

      assert.equal(component.find(Icon).prop('name'), expectedIcon);
    });
  });

  it('should insert spaces where appropriate, based on card type', () => {
    const component = mount(<CreditCardNumber />);
    const input = component.find('input');

    input.simulate('change', { target: { value: EXAMPLES.visa } });
    assert.equal(input.get(0).value, '4111 1111 1111 1111');

    input.simulate('change', { target: { value: EXAMPLES['diners-club'] } });
    assert.equal(input.get(0).value, '3056 930902 5904');
  });

  it('should not append extra spaces to partial numbers', () => {
    const component = mount(<CreditCardNumber />);
    const input = component.find('input');

    input.simulate('change', { target: { value: EXAMPLES.visa.slice(0, 8) } });
    assert.equal(input.get(0).value, '4111 1111');
  });

  it('restrictInput prop should reject numbers for invalid card types', () => {
    const component = mount(<CreditCardNumber restrictInput allowedBrands={['visa']} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: EXAMPLES.mastercard } });

    assert.equal(input.get(0).value, '');
    assert.equal(component.find(Icon).length, 0);
  });

  it('restrictInput prop should reject changes that are not even potentially valid', () => {
    const component = mount(<CreditCardNumber restrictInput />);
    const input = component.find('input');

    input.simulate('change', { target: { value: '5' } });
    assert.equal(input.get(0).value, '');
  });
});
