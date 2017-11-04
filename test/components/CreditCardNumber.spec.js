import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { CreditCardNumber, Icon } from '../../src';

const EXAMPLES = {
  'american-express': '378282246310005',
  'diners-club': '30569309025904',
  'master-card': '5555555555554444',
  discover: '6011111111111117',
  jcb: '3530111333300000',
  visa: '4111111111111111',
};

describe('<CreditCardNumber />', () => {
  it('should render default icon', () => {
    const component = shallow(<CreditCardNumber />);
    assert.equal(component.find(Icon).prop('name'), 'credit-card');
  });

  it('should handle specified values', () => {
    const onChange = sinon.spy();
    const component = mount(<CreditCardNumber onChange={onChange} />);

    const input = component.find('input');
    input.simulate('change', { target: { value: EXAMPLES.visa } });
    sinon.assert.calledWith(onChange, EXAMPLES.visa, 'visa');
  });

  it('should report/render icon for correct cardType for valid numbers', () => {
    Object.keys(EXAMPLES).forEach(type => {
      const cardNumber = EXAMPLES[type];
      const onChange = sinon.spy();

      const component = mount(<CreditCardNumber onChange={onChange} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: cardNumber } });

      sinon.assert.calledWith(onChange, cardNumber, type);
    });
  });

  it('should not report/render icon for ambiguous cardType for partial numbers', () => {
    const cardNumber = '3'; // Could be amex or diners
    const onChange = sinon.spy();

    const component = mount(<CreditCardNumber onChange={onChange} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: cardNumber } });

    sinon.assert.calledWith(onChange, cardNumber, undefined);
  });

  it('should report/render icon for unambiguous cardType for partial numbers', () => {
    const cardNumber = '37';
    const onChange = sinon.spy();

    const component = mount(<CreditCardNumber onChange={onChange} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: cardNumber } });

    sinon.assert.calledWith(onChange, cardNumber, 'american-express');
  });

  it('should not report/render icon for disallowed card types', () => {
    Object.keys(EXAMPLES).forEach(type => {
      const cardNumber = EXAMPLES[type];
      const onChange = sinon.spy();

      const component = mount(<CreditCardNumber onChange={onChange} types={[]} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: cardNumber } });

      sinon.assert.calledWith(onChange, cardNumber, undefined);
    });
  });

  it('should remain type="text"', () => {
    const component = mount(<CreditCardNumber type="wth" />);
    const input = component.find('Input');
    assert.equal(input.prop('type'), 'text');
  });
});
