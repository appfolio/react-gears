/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import CreditCardNumber from '../../src/components/CreditCardNumber';
import Icon from '../../src/components/Icon';

const EXAMPLES = {
  'american-express': '378282246310005',
  'diners-club': '30569309025904',
  'master-card': '5555555555554444',
  discover: '6011111111111117',
  jcb: '3530111333300000',
  visa: '4111111111111111',
};
const ICON_MAP = {
  'american-express': 'amex',
  'master-card': 'mastercard',
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

  it('should report/render icon for correct cardType for valid numbers', () => {
    Object.keys(EXAMPLES).forEach(key => {
      const cardNumber = EXAMPLES[key];
      const onChange = sinon.spy();

      const component = mount(<CreditCardNumber onChange={onChange} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: cardNumber } });

      assert(onChange.called);
      const [values, returnedIsValid] = [...onChange.lastCall.args];
      assert.equal(values.cardNumber.replace(/ /g, ''), cardNumber);
      assert.equal(values.cardType, key);
      assert.equal(returnedIsValid, true);

      assert.equal(component.find(Icon).prop('name'), `cc-${ICON_MAP[key] || key}`);
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
    input.simulate('change', { target: { value: EXAMPLES['master-card'] } });

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
