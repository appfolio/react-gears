import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';

import { TimeInput } from '../../src';

describe('<TimeInput />', () => {
  it('should default to blank and today', () => {
    const component = mount(<TimeInput />);
    const input = component.find('select');

    assert.equal(input.get(0).value, '');
  });

  it('should default to defaultValue when specified', () => {
    const component = mount(<TimeInput defaultValue="13:00" />);
    const input = component.find('select');

    assert.equal(input.get(0).value, '13:00');
  });

  it('should default to value when specified', () => {
    const component = mount(<TimeInput value="13:00" />);
    const input = component.find('select');

    assert.equal(input.get(0).value, '13:00');
  });

  it('should not format invalid defaultValue and default to today', () => {
    const component = mount(<TimeInput defaultValue="Veni, Vedi, Vici" />);
    const input = component.find('select');
    assert.equal(input.get(0).value, '');
  });

  it('should call onChange after selecting time', () => {
    const callback = sinon.spy();
    const component = mount(<TimeInput onChange={callback} />);
    const input = component.find('select');
    input.simulate('change', { target: { value: '04:00' } });
    sinon.assert.calledWith(callback, '04:00');
  });

  // TODO
  // max: PropTypes.string,
  // min: PropTypes.string,

  it('should format values with specified timeFormat', () => {
    const component = mount(<TimeInput timeFormat="hh:mm a" defaultValue="16:30" />);
    const options = component.find('option');
    assert.equal(options.at(34).text(), '04:30 pm');
  });

  it('should show placeholder as first option', () => {
    const component = mount(<TimeInput placeholder="What's the Time?" />);
    const option = component.find('option').first();
    assert.equal(option.text(), 'What\'s the Time?');
  });

  it('should show correct options for step interval', () => {
    const component = mount(<TimeInput step={5} />);
    const options = component.find('option');
    assert.equal(options.length, 289); // 24h * (60m / 5m) + placeholder
    assert.equal(options.last().text(), '11:55 PM');
  });

  it('should show correct options for min and max', () => {
    const component = mount(<TimeInput min="09:00" max="12:00" />);
    const options = component.find('option');
    assert.equal(options.length, 8); // 3h * 2 + placeholder
    assert.equal(options.at(1).text(), '9:00 AM');
    assert.equal(options.last().text(), '12:00 PM');
  });

  it('should not tab to the clock button', () => {
    const component = mount(<TimeInput />);

    const toggle = component.find('InputGroupAddon');
    const clockButton = toggle.find('Button');
    assert.equal(clockButton.props().tabIndex, -1);
  });

  it('should open and close when input addon clicked');
});
