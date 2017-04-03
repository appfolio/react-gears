/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';

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

  it('should render correct icons for valid card numbers', () => {
    Object.keys(EXAMPLES).forEach(key => {
      const expectedIcon = `cc-${key}`;
      const cardNumber = EXAMPLES[key];

      const component = mount(<CreditCardNumber />);
      const input = component.find('input');
      input.simulate('change', { target: { value: cardNumber } });

      component.find(Icon).forEach(icon => {
        assert.equal(icon.prop('name'), expectedIcon);
      });
    });
  });

  it('should reject numbers for invalid card types', () => {
    const component = mount(<CreditCardNumber allowedBrands={['visa']} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: EXAMPLES.mastercard } });

    assert.equal(input.get(0).value, '');
    assert.equal(component.find(Icon).length, 0);
  });

  it('should insert spaces where appropriate, based on card type', () => {
    const component = mount(<CreditCardNumber />);
    const input = component.find('input');

    input.simulate('change', { target: { value: EXAMPLES.visa } });
    assert.equal(input.get(0).value, '4111 1111 1111 1111');

    input.simulate('change', { target: { value: EXAMPLES['diners-club'] } });
    assert.equal(input.get(0).value, '3056 930902 5904');
  });
});
