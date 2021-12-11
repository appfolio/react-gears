import React from 'react';
import { mount } from 'enzyme';

import { CurrencyInput } from '../../src';

describe('<CurrencyInput />', () => {
  const callback = jest.fn();

  it('should default to blank', () => {
    const component = mount(<CurrencyInput onChange={callback} />);
    const input = component.find('input');

    expect(input.getDOMNode().value).toBe('');
  });

  it('should format value prop', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234.56} />);
    const input = component.find('input');

    expect(input.getDOMNode().value).toBe('1,234.56');
  });

  it('should add html attribute to native input element', () => {
    const component = mount(<CurrencyInput onChange={callback} value={1234.56} />);
    const input = component.find('input');

    expect(input.getDOMNode().getAttribute('value')).toBe('1,234.56');
  });

  it('should not reset uncontrolled input value on re-renders', () => {
    const wrapper = mount(<CurrencyInput onChange={jest.fn()} />);
    const inputNode = wrapper.find('input').getDOMNode();
    inputNode.value = '12123';
    inputNode.dispatchEvent(new Event('input'));

    // Manually causes a re-render by supplying another onChange prop
    wrapper.setProps({ onChange: jest.fn() });
    expect(wrapper.find('input').getDOMNode().value).toEqual('12,123');
  });

  it('should still render if null is provided to value', () => {
    const component = mount(<CurrencyInput onChange={callback} value={null} />);
    expect(component.find('input').length).toBeTruthy();
  });

  describe('thousands separators', () => {
    it('should default to true', () => {
      const component = mount(<CurrencyInput onChange={callback} value="123,456,789.99999" />);
      const input = component.find('input');
      expect(input.getDOMNode().value).toBe('123,456,789.99');
    });

    it('can be disabled', () => {
      const component = mount(<CurrencyInput value="123,456" includeThousandsSeparator={false} />);
      const input = component.find('input');
      expect(input.getDOMNode().value).toBe('123456.00');
    });
  });

  describe('negative numbers', () => {
    it('should be disabled by default', () => {
      const component = mount(<CurrencyInput value="-123" />);
      const input = component.find('input');
      expect(input.getDOMNode().value).toBe('123.00');
    });

    it('can be enabled', () => {
      const component = mount(<CurrencyInput value="-123" allowNegative />);
      const input = component.find('input');
      expect(input.getDOMNode().value).toBe('-123.00');
    });
  });

  describe('decimals', () => {
    it('should be enabled by default', () => {
      const component = mount(<CurrencyInput value="123.45" />);
      const input = component.find('input');
      expect(input.getDOMNode().value).toBe('123.45');
    });

    it('can be disabled', () => {
      const component = mount(<CurrencyInput value="123.45" allowDecimal={false} />);
      const input = component.find('input');
      expect(input.getDOMNode().value).toBe('12,345');
    });

    it('should truncate more than 2 decimals', () => {
      const component = mount(<CurrencyInput value={1234.56789} />);
      const input = component.find('input');

      expect(input.getDOMNode().value).toBe('1,234.56');
    });

    it('should ignore additional decimal points', () => {
      const component = mount(<CurrencyInput value="1234.56." />);
      const input = component.find('input');

      expect(input.getDOMNode().value).toBe('1,234.56');
    });

    it('should prefix decimal only currency with 0', () => {
      const component = mount(<CurrencyInput onChange={callback} value="." />);
      const input = component.find('input');

      expect(input.getDOMNode().value).toBe('0.00');
    });

    it('should zero pad 1 decimal', () => {
      const component = mount(<CurrencyInput onChange={callback} value={1234.5} />);
      const input = component.find('input');

      expect(input.getDOMNode().value).toBe('1,234.50');
    });

    it('should zero pad no decimals', () => {
      const component = mount(<CurrencyInput onChange={callback} value={1234} />);
      const input = component.find('input');

      expect(input.getDOMNode().value).toBe('1,234.00');
    });
  });

  it('should not format invalid values', () => {
    const component = mount(<CurrencyInput onChange={callback} value="Veni, Vedi, Vici" />);
    const input = component.find('input');
    expect(input.getDOMNode().value).toBe('');
  });

  it('should pass inputProps', () => {
    const component = mount(<CurrencyInput inputProps={{ className: 'yowza', ariaLabel: 'yowza!' }} />);
    const input = component.find('input.yowza');
    expect(input.exists()).toBe(true);
    expect(input.props().ariaLabel).toBe('yowza!');
  });
});
