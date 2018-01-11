import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { TimePicker } from '../../src';

describe('<TimePicker />', () => {
  it('should have a blank default', () => {
    const component = shallow(<TimePicker />);

    assert.equal(component.state('value'), '');
  });

  it('should start with the default value', () => {
    const component = shallow(<TimePicker defaultValue='17:00' />);

    assert.equal(component.state('value'), '17:00');
  });

  it('should update the value when changed', () => {
    const component = shallow(<TimePicker defaultValue='17:00' />);
    const input = component.find('Select');

    input.simulate('change', '11:30');
    assert.equal(component.state('value'), '11:30');
  });

  it('should save value in 24hour format', () => {
    const component = shallow(<TimePicker defaultValue='17:00' timeFormat={12} />);
    const input = component.find('Select');

    assert.equal(component.state('value'), '17:00');

    input.simulate('change', '07:00');
    assert.equal(component.state('value'), '07:00');
  });

  it('should use startTime for options', () => {
    const component = shallow(<TimePicker startTime='03:00' />);
    const firstOption = component.state('options')[0];

    assert(firstOption.label, '03:00 AM');
    assert(firstOption.value, '03:00');
  });

  it('should use endTime for options', () => {
    const component = shallow(<TimePicker endTime='07:00' />);
    const lastOption = component.state('options').pop();

    assert(lastOption.label, '07:00 AM');
    assert(lastOption.value, '07:00');
  });

  it('should call additional onChange', () => {
    const callback = sinon.spy();
    const component = shallow(<TimePicker onChange={callback} />);
    const input = component.find('Select');
    input.simulate('change', '11:30');

    assert(callback.calledWith('11:30'));
  });

  describe('12 hour format', () => {
    it('should render options in 12hour format', () => {
      const component = shallow(<TimePicker timeFormat={12} />);

      const lastTime = component.state('options').pop();
      assert.equal(lastTime.label, '11:30 PM');
      assert.equal(lastTime.value, '23:30');
    });
  });

  describe('24 hour format', () => {
    it('should render options in 24hour', () => {
      const component = shallow(<TimePicker timeFormat={24} />);

      const lastTime = component.state('options').pop();
      assert.equal(lastTime.label, '23:30');
      assert.equal(lastTime.value, '23:30');
    });
  });

  describe('step', () => {
    it('should render correct options for step', () => {
      const component = shallow(<TimePicker startTime='01:00' endTime='01:30' step={15} timeFormat={24} />);

      const options = component.state('options');
      assert.equal(options.length, 3);

      let option = options[0];
      assert.equal(option.label, '01:00');
      assert.equal(option.value, '01:00');

      option = options[1];
      assert.equal(option.label, '01:15');
      assert.equal(option.value, '01:15');

      option = options[2];
      assert.equal(option.label, '01:30');
      assert.equal(option.value, '01:30');
    });
  });
});
