import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { CurrencyInput } from '../../src';

describe('<CurrencyInput />', () => {
  const callback = sinon.spy();

  it('should default to blank', () => {
    const component = mount(<CurrencyInput onChange={callback} />);
    const input = component.find('input');

    assert.equal(input.getDOMNode().value, '');
  });

  it('should format value prop', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234.56} />);
    const input = component.find('input');

    assert.equal(input.getDOMNode().value, '1,234.56');
  });

  context('thousands separators', () => {
    it('should default to true', () => {
      const component = mount(<CurrencyInput onChange={callback} value="123,456,789.99999" />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, '123,456,789.99');
    });

    it('can be disabled', () => {
      const component = mount(<CurrencyInput value="123,456" includeThousandsSeparator={false} />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, '123456');
    });

    it('should call onChange', () => {
      const spy = sinon.spy();
      const component = mount(<CurrencyInput onChange={spy} />);
      const input = component.find('input');

      input.simulate('input', { target: { value: '123,456,789.99' } });

      assert(spy.calledOnce);
      assert.strictEqual(spy.firstCall.args[0].target.value, '123,456,789.99');
      assert.strictEqual(spy.firstCall.args[1], 123456789.99);
    });
  });

  context('negative numbers', () => {
    it('should be disabled by default', () => {
      const component = mount(<CurrencyInput value="-123" />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, '123');
    });

    it('can be enabled', () => {
      const component = mount(<CurrencyInput value="-123" allowNegative />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, '-123');
    });

    it('should call onChange', () => {
      const spy = sinon.spy();
      const component = mount(<CurrencyInput onChange={spy} />);
      const input = component.find('input');

      input.simulate('input', { target: { value: '-123,456,789.99' } });

      assert(spy.calledOnce);
      assert.strictEqual(spy.firstCall.args[0].target.value, '-123,456,789.99');
      assert.strictEqual(spy.firstCall.args[1], -123456789.99);
    });
  });

  context('decimals', () => {
    it('should be enabled by default', () => {
      const component = mount(<CurrencyInput value="123.45" />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, '123.45');
    });

    it('can be disabled', () => {
      const component = mount(<CurrencyInput value="123.45" allowDecimal={false} />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, '12,345');
    });

    it('should truncate more than 2 decimals', () => {
      const component = mount(<CurrencyInput value={1234.56789} />);
      const input = component.find('input');

      assert.equal(input.getDOMNode().value, '1,234.56');
    });

    it('should ignore additional decimal points', () => {
      const component = mount(<CurrencyInput value={1234.56} />);
      const input = component.find('input');
      input.getDOMNode().value = '1,234.56.';
      input.simulate('input');
      assert.equal(input.getDOMNode().value, '1,234.56');
    });

    it('should prefix decimal only currency with 0', () => {
      const component = mount(<CurrencyInput onChange={callback} />);
      const input = component.find('input');

      input.getDOMNode().value = '.';
      input.simulate('input');
      assert.equal(input.getDOMNode().value, '0.');
    });

    it('should call onChange', () => {
      const spy = sinon.spy();
      const component = mount(<CurrencyInput onChange={spy} />);
      const input = component.find('input');

      input.simulate('input', { target: { value: '123,456,789.' } });

      assert(spy.calledOnce);
      assert.strictEqual(spy.firstCall.args[0].target.value, '123,456,789.');
      assert.strictEqual(spy.firstCall.args[1], 123456789);
    });

    // TODO skipped pending this issue/question: https://github.com/text-mask/text-mask/issues/372
    it.skip('should zero pad 1 decimal', () => {
      const component = mount(<CurrencyInput onChange={callback} value={1234.5} />);
      const input = component.find('input');

      assert.equal(input.getDOMNode().value, '1,234.50');
    });

    it.skip('should zero pad no decimals', () => {
      const component = mount(<CurrencyInput onChange={callback} value={1234} />);
      const input = component.find('input');

      assert.equal(input.getDOMNode().value, '1,234.00');
    });
  });

  it('should not format invalid values', () => {
    const component = mount(<CurrencyInput onChange={callback} value="Veni, Vedi, Vici" />);
    const input = component.find('input');
    assert.equal(input.getDOMNode().value, '');
  });

  it('should call onChange with NaN for invalid numbers', () => {
    const spy = sinon.spy();
    const component = mount(<CurrencyInput onChange={spy} />);
    const input = component.find('input');

    input.simulate('input', { target: { value: '' } });

    assert(spy.calledOnce);
    assert.strictEqual(spy.firstCall.args[0].target.value, '');
    assert(Number.isNaN(spy.firstCall.args[1]));
  });
});
