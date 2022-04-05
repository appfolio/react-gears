import assert from 'assert';
import isSameDay from 'date-fns/isSameDay';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Select from '../Select/Select';
import TimeInput from './TimeInput';

const VALUE_SELECTOR = '[aria-selected="true"]';
const OPTION_SELECTOR = 'button[role="menuitem"]';

describe('<TimeInput />', () => {
  it('should default to blank and today', () => {
    const component = mount(<TimeInput />);
    const select = component.find(Select);

    assert.equal(select.prop('value'), null);
  });

  it('should default to defaultValue when specified', () => {
    const component = mount(<TimeInput defaultValue="13:00" />);
    const value = component.find(VALUE_SELECTOR);
    assert(value.contains('1:00 PM'));
  });

  it('should default to value when specified', () => {
    const component = mount(<TimeInput value="13:00" />);
    const value = component.find(VALUE_SELECTOR);
    assert(value.contains('1:00 PM'));
  });

  it('should not format invalid defaultValue', () => {
    const component = mount(<TimeInput defaultValue="Veni, Vedi, Vici" />);
    const select = component.find(Select);
    assert.equal(select.prop('value'), null);
  });

  it('should call onChange after selecting time', () => {
    const callback = sinon.spy();
    const component = mount(<TimeInput onChange={callback} />);
    const input = component.find('input');
    input.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 }); // open dropdown
    input.simulate('keyDown', { key: 'Enter', keyCode: 13 });

    assert(callback.calledOnce);
    const [value, time] = callback.firstCall.args;
    assert.equal(value, '00:00');
    assert.equal(time.getHours(), 0);
    assert.equal(time.getMinutes(), 0);
    assert(isSameDay(time, new Date()));
  });

  it('should handle onChange when clearing the selection', () => {
    const callback = sinon.spy();
    const component = mount(<TimeInput defaultValue="13:30" onChange={callback} />);
    const input = component.find('input');
    input.simulate('keyDown', { key: 'Backspace', keyCode: 8 });

    assert(callback.calledOnce);
    const [value, time] = callback.firstCall.args;
    assert.equal(value, '');
    assert(Number.isNaN(time.getTime()));
  });

  // TODO
  // max: PropTypes.string,
  // min: PropTypes.string,

  it('should format values with specified timeFormat', () => {
    const component = mount(<TimeInput timeFormat="hh:mm a" defaultValue="16:30" />);
    const options = component.find(Select).prop('options');
    assert.equal(options[33].label, '04:30 PM');
    assert.equal(options[33].value, '16:30');
  });

  it('should show placeholder as first option', () => {
    const component = mount(<TimeInput placeholder="What's the Time?" />);
    const select = component.find(Select);
    assert.equal(select.prop('placeholder'), "What's the Time?");
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
    const component = mount(<TimeInput />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'happy hour' } });
    assert(component.contains('Must be in the format HH:MM AM/PM'));
  });

  it('should allow passing a noResultsText prop when the input is invalid', () => {
    const customMessage = 'yo that aint a real time';
    const component = mount(<TimeInput noResultsText={customMessage} />);
    const input = component.find('input');
    input.simulate('change', { target: { value: 'happy hour' } });
    assert(component.contains('yo that aint a real time'));
  });

  it('should default to displaying every time on 30 minute intervals', () => {
    const component = mount(<TimeInput allowOtherTimes={false} />);
    const input = component.find('input');

    input.simulate('keyDown', { key: 'ArrowDown', keyCode: 40 }); // open dropdown
    const options = component.find(OPTION_SELECTOR);
    assert.equal(options.length, 48);
  });

  describe('allow other times', () => {
    it('should not accept new options when allowOtherTimes is false', () => {
      const component = mount(<TimeInput allowOtherTimes={false} />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '12:45 PM' } });

      const options = component.find(OPTION_SELECTOR);
      assert.equal(options.length, 0);
    });

    it('should correctly validate new options', () => {
      const component = mount(<TimeInput allowOtherTimes />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '11:34 PM' } });
      let options = component.find(OPTION_SELECTOR);
      assert(options.contains('11:34 PM'));

      input.simulate('change', { target: { value: '1:19 am' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('1:19 AM'));

      input.simulate('change', { target: { value: '02:27am' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('2:27 AM'));
    });

    it('should allow entering a time inside of min and max when specified', () => {
      const component = mount(<TimeInput allowOtherTimes min="09:00" max="17:00" />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '12:34 PM' } });
      const options = component.find(OPTION_SELECTOR);
      assert(options.contains('12:34 PM'));
    });

    it('should not allow entering a time outside of min and max', () => {
      const component = mount(<TimeInput allowOtherTimes min="09:00" max="17:00" />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '1:19 am' } });
      let options = component.find(OPTION_SELECTOR);
      assert.equal(options.length, 0);

      input.simulate('change', { target: { value: '06:27 pm' } });
      options = component.find(OPTION_SELECTOR);
      assert.equal(options.length, 0);
    });

    it('should allow setting new options when controlled', () => {
      const component = mount(<TimeInput allowOtherTimes value="13:00" />);
      component.setProps({ value: '13:22' });
      const value = component.find(VALUE_SELECTOR);
      assert(value.contains('1:22 PM'));
    });

    it('should create new options with correct label and value', () => {
      const callback = sinon.spy();
      const component = mount(<TimeInput onChange={callback} allowOtherTimes />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '1:19 am' } });
      input.simulate('keyDown', { key: 'Enter', keyCode: 13 });
      assert(component.contains('1:19 AM'));

      assert(callback.calledOnce);
      const [value] = callback.firstCall.args;
      assert.equal(value, '01:19');
    });

    it('should allow adding new times without typing colons', () => {
      const component = mount(<TimeInput allowOtherTimes />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '1131 PM' } });
      let options = component.find(OPTION_SELECTOR);
      assert(options.contains('11:31 PM'));

      input.simulate('change', { target: { value: '0222 AM' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('2:22 AM'));

      input.simulate('change', { target: { value: '454 pm' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('4:54 PM'));

      input.simulate('change', { target: { value: '845am' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('8:45 AM'));

      input.simulate('change', { target: { value: '137 pm' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('1:37 PM'));

      input.simulate('change', { target: { value: '658pm' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('6:58 PM'));
    });

    it('should ignore colons for non step times', () => {
      const component = mount(<TimeInput allowOtherTimes />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '41' } });
      let options = component.find(OPTION_SELECTOR);
      assert(options.contains('4:10 AM'));
      assert(options.contains('4:10 PM'));
      assert.equal(options.length, 2);

      input.simulate('change', { target: { value: '112' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('1:12 AM'));
      assert(options.contains('1:12 PM'));
      assert(options.contains('11:20 AM'));
      assert(options.contains('11:20 PM'));
      assert.equal(options.length, 4);
    });
  });

  describe('filtering options', () => {
    it('should ignore colons and whitespace when typing', () => {
      const component = mount(<TimeInput />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '113' } });
      let options = component.find(OPTION_SELECTOR);
      assert(options.contains('11:30 AM'));
      assert(options.contains('11:30 PM'));

      input.simulate('change', { target: { value: '1130' } });
      options = component.find(OPTION_SELECTOR);
      assert.equal(options.length, 2);
      assert(options.contains('11:30 AM'));
      assert(options.contains('11:30 PM'));

      input.simulate('change', { target: { value: '1130pm' } });
      options = component.find(OPTION_SELECTOR);
      assert(options.contains('11:30 PM'));
      assert.equal(options.length, 1);
    });

    it('should handle leading zeros', () => {
      const component = mount(<TimeInput />);
      const input = component.find('input');

      input.simulate('change', { target: { value: '09:30 AM' } });
      const options = component.find(OPTION_SELECTOR);
      assert.equal(options.length, 1);
      assert(options.contains('9:30 AM'));
    });
  });
});
