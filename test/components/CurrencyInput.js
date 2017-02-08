/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CurrencyInput } from '../../src';

describe.only('<CurrencyInput />', () => {
  const callback = sinon.spy();

  it('should default to blank', () => {
    const component = mount(<CurrencyInput onChange={callback} />);
    const input = component.find('input');

    assert.equal(input.get(0).value, '');
  });

  it('should format value prop', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234.56} />);
    const input = component.find('input');

    assert.equal(input.get(0).value, '1,234.56');
  });

  it('should accept comma formatted values', () => {
    const component = mount(<CurrencyInput onChange={callback} value="123,456,789.99999" />);
    const input = component.find('input');
    assert.equal(input.get(0).value, '123,456,789.99');
  });

  it('should not format invalid values', () => {
    const component = mount(<CurrencyInput onChange={callback} value="Veni, Vedi, Vici" />);
    const input = component.find('input');
    assert.equal(input.get(0).value, '');
  });

  it('should truncate more than 2 decimals', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234.56789} />);
    const input = component.find('input');

    assert.equal(input.get(0).value, '1,234.56');
  });

  // TODO skipped pending this issue/question: https://github.com/text-mask/text-mask/issues/372
  it.skip('should zero pad 1 decimal', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234.5} />);
    const input = component.find('input');

    assert.equal(input.get(0).value, '1,234.50');
  });

  it.skip('should zero pad no decimals', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234} />);
    const input = component.find('input');

    assert.equal(input.get(0).value, '1,234.00');
  });
});
