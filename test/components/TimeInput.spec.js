import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import isSameDay from 'date-fns/is_same_day';

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

  it('should not format invalid defaultValue', () => {
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
    const [value, time] = callback.firstCall.args;
    assert.equal(value, '12:00');
    assert.equal(time.getHours(), 12);
    assert.equal(time.getMinutes(), 0);
    assert(isSameDay(time, new Date()));
  });

  it('should handle onChange when clearing the selection', () => {
    const callback = sinon.spy();
    const component = shallow(<TimeInput onChange={callback} />);
    const select = component.find(Select);
    const option = null;

    select.simulate('change', option);
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

  describe('allow other times', () => {
    it('should default to false', () => {
      const component = shallow(<TimeInput />);
      const select = component.find(Select);

      assert.equal(select.prop('creatable'), false);
    });

    it('should not accept new options when allowOtherTimes is false', () => {
      const component = shallow(<TimeInput allowOtherTimes={false} />);
      const select = component.find(Select);

      assert.equal(select.prop('creatable'), false);
      assert.equal(select.prop('createOptionPosition'), undefined);
      assert.equal(select.prop('promptTextCreator'), undefined);
      assert.equal(select.prop('newOptionCreator'), undefined);
      assert.equal(select.prop('isValidNewOption'), undefined);
    });

    it('should display new options first', () => {
      const component = shallow(<TimeInput allowOtherTimes />);
      const select = component.find(Select);

      assert.equal(select.prop('createOptionPosition'), 'first');
    });

    it('should correctly validate new options', () => {
      const component = shallow(<TimeInput allowOtherTimes />);
      const isValidNewOption = component.find(Select).prop('isValidNewOption');

      assert.equal(isValidNewOption({ label: '11:34 PM' }), true);
      assert.equal(isValidNewOption({ label: '1:19 am' }), true);
      assert.equal(isValidNewOption({ label: '02:27 pm' }), true);
      assert.equal(isValidNewOption({ label: '12' }), false);
      assert.equal(isValidNewOption({ label: 'happy hour' }), false);
      assert.equal(isValidNewOption({ label: '' }), false);
    });

    it('should not accept existing options', () => {
      const component = shallow(<TimeInput allowOtherTimes />);
      const isOptionUnique = component.find(Select).prop('isOptionUnique');
      const options = component.find(Select).prop('options');

      assert.equal(isOptionUnique({ option: { value: '02:00' }, options }), false);
      assert.equal(isOptionUnique({ option: { value: '03:43' }, options }), true);
    });

    it('should not allow entering a time outside of min and max', () => {
      const component = shallow(<TimeInput allowOtherTimes min='09:00' max='17:00' />);
      const isValidNewOption = component.find(Select).prop('isValidNewOption');

      assert.equal(isValidNewOption({ label: '11:34 AM' }), true);
      assert.equal(isValidNewOption({ label: '1:19 am' }), false);
      assert.equal(isValidNewOption({ label: '06:27 pm' }), false);
    });

    it('should allow setting new options when controlled', () => {
      const component = mount(<TimeInput allowOtherTimes value="13:00" />);
      component.setProps({ value: '13:22' });
      const select = component.find(Select);
      assert.deepEqual(select.prop('value'), { label: '1:22 PM', value: '13:22' });
    });

    it('should create new options with correct label and value', () => {
      const component = shallow(<TimeInput allowOtherTimes />);
      const newOptionCreator = component.find(Select).prop('newOptionCreator');

      assert.deepEqual(newOptionCreator({ label: '11:34 PM' }), { label: '11:34 PM', value: '23:34' });
      assert.deepEqual(newOptionCreator({ label: '1:19 am' }), { label: '1:19 AM', value: '01:19' });
      assert.deepEqual(newOptionCreator({ label: '02:27 pm' }), { label: '2:27 PM', value: '14:27' });
    });

    it('should allow adding new times without typing colons', () => {
      const component = shallow(<TimeInput allowOtherTimes />);
      const newOptionCreator = component.find(Select).prop('newOptionCreator');

      assert.deepEqual(newOptionCreator({ label: '1131 PM' }), { label: '11:31 PM', value: '23:31' });
      assert.deepEqual(newOptionCreator({ label: '0222 AM' }), { label: '2:22 AM', value: '02:22' });
      assert.deepEqual(newOptionCreator({ label: '454 pm' }), { label: '4:54 PM', value: '16:54' });
      assert.deepEqual(newOptionCreator({ label: '845am' }), { label: '8:45 AM', value: '08:45' });
      assert.deepEqual(newOptionCreator({ label: '137 pm' }), { label: '1:37 PM', value: '13:37' });
      assert.deepEqual(newOptionCreator({ label: '658pm' }), { label: '6:58 PM', value: '18:58' });
    });
  });

  describe('filterOption', () => {
    it('should ignore colons and whitespace when typing', () => {
      const component = shallow(<TimeInput />);
      const filterOption = component.find(Select).prop('filterOption');

      assert.equal(filterOption({ label: '11:30 PM' }, '113'), true);
      assert.equal(filterOption({ label: '11:30 AM' }, '113'), true);
      assert.equal(filterOption({ label: '11:30 AM' }, '1130'), true);
      assert.equal(filterOption({ label: '11:30 PM' }, '1130 pm'), true);
      assert.equal(filterOption({ label: '11:30 PM' }, '1130pm'), true);
    });

    it('should handle leading zeros', () => {
      const component = shallow(<TimeInput />);
      const filterOption = component.find(Select).prop('filterOption');

      assert.equal(filterOption({ label: '9:30 AM', value: '09:30' }, '09:30 AM'), true);
    });
  });
});
