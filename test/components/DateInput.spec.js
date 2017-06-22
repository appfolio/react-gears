/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import addMonths from 'date-fns/add_months';
import addYears from 'date-fns/add_years';
import isSameDay from 'date-fns/is_same_day';
import isToday from 'date-fns/is_today';

import { DateInput } from '../../src';

describe.only('<DateInput />', () => {

  context('defaultValue', () => {
    it('should default to blank and today', () => {
      const component = mount(<DateInput />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '');
      assert(isToday(component.state().date));
    });

    it('should format defaultValue Date prop', () => {
      const component = mount(<DateInput defaultValue={new Date(1999, 1, 14)} />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '2/14/1999');
    });

    it('should format defaultValue date strings prop', () => {
      const component = mount(<DateInput defaultValue="1/23/1983" />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '1/23/1983');
      assert(isSameDay(component.state().date, new Date(1983, 0, 23)));
    });

    it('should not format invalid defaultValue and default to today', () => {
      const component = mount(<DateInput defaultValue="Veni, Vedi, Vici" />);
      const input = component.find('input');
      assert.equal(input.get(0).value, 'Veni, Vedi, Vici');
      assert(isToday(component.state().date));
    });
  });

  it('should should open and close when input addon clicked', () => {
    const component = mount(<DateInput />);
    const dropdown = component.find('Dropdown');
    assert.equal(dropdown.props().isOpen, false);

    const toggle = component.find('InputGroupButton');
    toggle.simulate('click');
    assert.equal(dropdown.props().isOpen, true);

    toggle.simulate('click');
    assert.equal(dropdown.props().isOpen, false);
  });

  it('should should open when focused if showOnFocus is true', () => {
    const component = mount(<DateInput showOnFocus />);
    const dropdown = component.find('Dropdown');
    assert.equal(dropdown.props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, true);
  });

  it('should should not open when focused if showOnFocus is false', () => {
    const component = mount(<DateInput showOnFocus={false} />);
    const dropdown = component.find('Dropdown');
    assert.equal(dropdown.props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, false);
  });

  it('should should close when tab or esc pressed', () => {
    const component = mount(<DateInput showOnFocus />);
    const input = component.find('input');
    const dropdown = component.find('Dropdown');

    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, true);

    input.simulate('keydown', { key: 'Esc', keyCode: 27, which: 27 });
    assert.equal(dropdown.props().isOpen, false);

    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, true);

    input.simulate('keydown', { key: 'Tab', keyCode: 9, which: 9 });
    assert.equal(dropdown.props().isOpen, false);
  });

  context('user input', () => {
    it('should should set date after entering a valid date string', done => {
      const component = mount(<DateInput wait={0} />);
      const input = component.find('input');
      input.simulate('input', { target: { value: '12/3/2014' } });
      setTimeout(() => {
        assert(isSameDay(component.state().date, new Date(2014, 11, 3)));
        done();
      });
    });

    it('should should reset date after entering an invalid date string', done => {
      const component = mount(<DateInput wait={0} />);
      const input = component.find('input');
      input.simulate('input', { target: { value: 'Sandwiches' } });
      setTimeout(() => {
        assert(isToday(component.state().date));
        done();
      });
    });

    it('should should reset date after clearing input', done => {
      const callback = sinon.spy();
      const component = mount(<DateInput wait={0} onChange={callback} />);
      const input = component.find('input');
      input.simulate('input', { target: { value: '' } });
      setTimeout(() => {
        assert(isToday(component.state().date));
        assert(callback.calledWith(''));
        done();
      });
    });

    it('should should call onChange after entering an invalid date string', done => {
      const callback = sinon.spy();
      const component = mount(<DateInput wait={0} onChange={callback} />);
      const input = component.find('input');
      input.simulate('input', { target: { value: 'Grape Jelly' } });
      setTimeout(() => {
        assert(callback.calledWith('Grape Jelly'));
        done();
      });
    });
  });

  context('date picker', () => {
    const callback = sinon.spy();
    const component = mount(<DateInput wait={0} onChange={callback} />);
    const toggle = component.find('InputGroupButton');
    toggle.simulate('click');

    it('should should set date after clicking a date', () => {
      callback.reset();
      const firstDate = component.find('Day').first();
      const expectedDate = firstDate.props().day.date;
      firstDate.simulate('click');
      assert(isSameDay(component.state().date, expectedDate));
      assert(callback.calledWith(expectedDate));
    });

    it('should should call onChange after clicking a date', () => {
      callback.reset();
      const lastDate = component.find('Day').first();
      const expectedDate = lastDate.props().day.date;
      lastDate.simulate('click');
      assert(callback.calledWith(expectedDate));
    });

    it('should should set date after clicking prev year', () => {
      callback.reset();
      const expectedDate = addYears(component.state().date, -1);
      component.ref('prevYear').simulate('click');
      assert(isSameDay(component.state().date, expectedDate));
      assert(callback.calledWith(expectedDate));
    });

    it('should should set date after clicking next year', () => {
      callback.reset();
      const expectedDate = addYears(component.state().date, 1);
      component.ref('nextYear').simulate('click');
      assert(isSameDay(component.state().date, expectedDate));
      assert(callback.calledWith(expectedDate));
    });

    it('should should set date after clicking prev month', () => {
      callback.reset();
      const expectedDate = addMonths(component.state().date, -1);
      component.ref('prevMonth').simulate('click');
      assert(isSameDay(component.state().date, expectedDate));
      assert(callback.calledWith(expectedDate));
    });

    it('should should set date after clicking next month', () => {
      callback.reset();
      const expectedDate = addMonths(component.state().date, 1);
      component.ref('nextMonth').simulate('click');
      assert(isSameDay(component.state().date, expectedDate));
      assert(callback.calledWith(expectedDate));
    });

    it('should should set date after clicking today', () => {
      component.ref('today').simulate('click');
      assert(isToday(component.state().date));
    });

    it('should should set date when using arrow keys'); // TODO
  });
});
