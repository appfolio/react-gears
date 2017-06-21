/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import isSameDay from 'date-fns/is_same_day';
import isToday from 'date-fns/is_today';

import { DateInput } from '../../src';

describe('<DateInput />', () => {
  const callback = sinon.spy();

  context('defaultValue', () => {
    it('should default to blank and today', () => {
      const component = mount(<DateInput onChange={callback} />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '');
      assert(isToday(component.state().date));
    });

    it('should format defaultValue Date prop', () => {
      const component = mount(<DateInput onChange={callback} defaultValue={new Date(1999, 1, 14)} />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '2/14/1999');
    });

    it('should format defaultValue date strings prop', () => {
      const component = mount(<DateInput onChange={callback} defaultValue="1/23/1983" />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '1/23/1983');
      assert(isSameDay(component.state().date, new Date(1983, 0, 23)));
    });

    it('should not format invalid defaultValue and default to today', () => {
      const component = mount(<DateInput onChange={callback} defaultValue="Veni, Vedi, Vici" />);
      const input = component.find('input');
      assert.equal(input.get(0).value, 'Veni, Vedi, Vici');
      assert(isToday(component.state().date));
    });
  });

  context('user input', () => {
    it('should should set date after entering a valid date string');
    it('should should reset date after entering an invalid date string');
  });

  context('date picker', () => {
    it('should should set date after clicking a date');
    it('should should set date after clicking today');
    it('should should set date after clicking prev year');
    it('should should set date after clicking prev month');
    it('should should set date after clicking next month');
    it('should should set date after clicking next year');
  });
});
