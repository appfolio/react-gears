import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';

import { TimeInput, Select } from '../../src';

describe('<TimeInput />', () => {
  it('should default to blank and today', () => {
    const component = mount(<TimeInput />);
    const select = component.find(Select);

    assert.equal(select.prop('value'), null);
  });

  it('should default to defaultValue when specified', () => {
    const component = mount(<TimeInput defaultValue="13:00" />);
    const select = component.find(Select);

    assert.deepEqual(select.prop('value'), { label: '1:00 PM', value: '13:00' });
  });

  it('should default to value when specified', () => {
    const component = mount(<TimeInput value="13:00" />);
    const select = component.find(Select);

    assert.deepEqual(select.prop('value'), { label: '1:00 PM', value: '13:00' });
  });

  // TODO: this won't default to today. change this?
  it('should not format invalid defaultValue and default to today', () => {
    const component = mount(<TimeInput defaultValue="Veni, Vedi, Vici" />);
    const select = component.find(Select);
    assert.equal(select.prop('value'), null);
  });

  it('should call onChange after selecting time', () => {
    const callback = sinon.spy();
    const component = shallow(<TimeInput onChange={callback} />);
    const select = component.find(Select);
    const option = { label: '12:00 PM', value: '12:00' };

    select.simulate('change', option);
    assert(callback.calledOnce);
    sinon.assert.calledWith(callback, '12:00');
  });

  it('should handle onChange when clearing the selection', () => {
    const callback = sinon.spy();
    const component = shallow(<TimeInput onChange={callback} />);
    const select = component.find(Select);
    const option = null;

    select.simulate('change', option);
    assert(callback.calledOnce);
    sinon.assert.calledWith(callback, null);
  });

  // TODO
  // max: PropTypes.string,
  // min: PropTypes.string,

  it('should format values with specified timeFormat', () => {
    const component = mount(<TimeInput timeFormat="hh:mm a" defaultValue="16:30" />);
    const options = component.find(Select).prop('options');
    assert.equal(options[33].label, '04:30 pm');
    assert.equal(options[33].value, '16:30');
  });

  it('should show placeholder as first option', () => {
    const component = mount(<TimeInput placeholder="What's the Time?" />);
    const select = component.find(Select);
    assert.equal(select.prop('placeholder'), 'What\'s the Time?');
  });

  it('should show correct options for step interval', () => {
    const component = mount(<TimeInput step={5} />);
    const options = component.find(Select).prop('options');
    assert.equal(options.length, 288); // 24h * (60m / 5m)
    assert.equal(options[options.length - 1].label, '11:55 PM');
  });

  it('should show correct options for min and max', () => {
    const component = mount(<TimeInput min="09:00" max="12:00" />);
    const options = component.find(Select).prop('options');
    assert.equal(options.length, 7); // 3h * 2
    assert.equal(options[0].label, '9:00 AM');
    assert.equal(options[options.length - 1].label, '12:00 PM');
  });

  it('should have a relevant default message when the input is invalid', () => {
    const component = shallow(<TimeInput />);
    const noResultsText = component.find(Select).prop('noResultsText');
    assert.equal(noResultsText, 'Must be in the format HH:MM AM/PM');
  });

  it('should allow passing a noOptionsMessage prop when the input is invalid', () => {
    const customMessage = input => `yo ${input} aint a real time`;
    const component = shallow(<TimeInput noOptionsMessage={customMessage} />);
    const noOptionsMessage = component.find(Select).prop('noOptionsMessage');
    assert.equal(noOptionsMessage('asdf'), 'yo asdf aint a real time');
  });

  it('should open and close when input addon clicked');
});
