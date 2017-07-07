import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addYears from 'date-fns/add_years';
import isSameDay from 'date-fns/is_same_day';
import isToday from 'date-fns/is_today';
import sinon from 'sinon';

import { DateInput } from '../../src';

describe('<DateInput />', () => {
  context('defaultValue', () => {
    it('should default to blank and today', () => {
      const component = mount(<DateInput />);
      const input = component.find('input');

      assert.equal(input.get(0).value, '');
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
      assert(isSameDay(component.instance().getCurrentDate(), new Date(1983, 0, 23)));
    });

    it('should not format invalid defaultValue and default to today', () => {
      const component = mount(<DateInput defaultValue="Veni, Vedi, Vici" />);
      const input = component.find('input');
      assert.equal(input.get(0).value, 'Veni, Vedi, Vici');
      assert(isToday(component.instance().getCurrentDate()));
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

  it('should should not open when disabled is ture', () => {
    const component = mount(<DateInput disabled />);

    const dropdown = component.find('Dropdown');
    assert.equal(dropdown.props().isOpen, false);

    const toggle = component.find('InputGroupButton');
    toggle.simulate('click');
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
    it('should should set date after entering a valid date string', () => {
      const component = mount(<DateInput />);
      const input = component.find('input');
      input.simulate('change', { target: { value: '12/3/2014' } });
      assert(isSameDay(component.instance().getCurrentDate(), new Date(2014, 11, 3)));
    });

    it('should should reset date after entering an invalid date string', () => {
      const component = mount(<DateInput />);
      const input = component.find('input');
      input.simulate('change', { target: { value: 'Sandwiches' } });
      assert(isToday(component.instance().getCurrentDate()));
    });

    it('should should reset date after clearing input', () => {
      const callback = sinon.spy();
      const component = mount(<DateInput onChange={callback} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: '' } });
      assert(isToday(component.instance().getCurrentDate()));
      assert(callback.calledWith('', false));
    });

    it('should should call onChange after entering an invalid date string', () => {
      const callback = sinon.spy();
      const component = mount(<DateInput onChange={callback} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: 'Grape Jelly' } });
      assert(callback.calledWith('Grape Jelly', false));
    });

    it('should should call onBlur after losing focus', () => {
      const callback = sinon.spy();
      const component = mount(<DateInput onBlur={callback} />);
      const input = component.find('input');
      input.simulate('blur');
      assert(callback.calledOnce);
    });
  });

  context('date picker', () => {
    const callback = sinon.spy();
    const component = mount(<DateInput onChange={callback} showOnFocus />);
    const toggle = component.find('InputGroupButton');
    toggle.simulate('click');

    it('should should set date after clicking a date', () => {
      callback.reset();
      const firstDate = component.find('Day').first();
      const expectedDate = firstDate.props().day.date;
      firstDate.simulate('click');
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(callback.calledWith(expectedDate, true));
    });

    it('should should call onChange after clicking a date', () => {
      callback.reset();
      const lastDate = component.find('Day').first();
      const expectedDate = lastDate.props().day.date;
      lastDate.simulate('click');
      assert(callback.calledWith(expectedDate, true));
    });

    it('should should set date after clicking prev year', () => {
      callback.reset();
      const expectedDate = addYears(component.instance().getCurrentDate(), -1);
      component.ref('prevYear').simulate('click');
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(callback.calledWith(expectedDate, true));
    });

    it('should should set date after clicking next year', () => {
      callback.reset();
      const expectedDate = addYears(component.instance().getCurrentDate(), 1);
      component.ref('nextYear').simulate('click');
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(callback.calledWith(expectedDate, true));
    });

    it('should should set date after clicking prev month', () => {
      callback.reset();
      const expectedDate = addMonths(component.instance().getCurrentDate(), -1);
      component.ref('prevMonth').simulate('click');
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(callback.calledWith(expectedDate, true));
    });

    it('should should set date after clicking next month', () => {
      callback.reset();
      const expectedDate = addMonths(component.instance().getCurrentDate(), 1);
      component.ref('nextMonth').simulate('click');
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(callback.calledWith(expectedDate, true));
    });

    it('should should set date after clicking today', () => {
      component.ref('today').simulate('click');
      assert(isToday(component.instance().getCurrentDate()));
    });

    it('should should set date when using arrow keys', () => {
      const input = component.find('input');
      input.simulate('focus');

      let expectedDate = addWeeks(component.instance().getCurrentDate(), -1);
      input.simulate('keydown', { key: 'ArrowUp', keyCode: 38, which: 38 });
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));

      expectedDate = addDays(component.instance().getCurrentDate(), -1);
      input.simulate('keydown', { key: 'ArrowLeft', keyCode: 37, which: 37 });
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));

      expectedDate = addWeeks(component.instance().getCurrentDate(), 1);
      input.simulate('keydown', { key: 'ArrowDown', keyCode: 40, which: 40 });
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));

      expectedDate = addDays(component.instance().getCurrentDate(), 1);
      input.simulate('keydown', { key: 'ArrowRight', keyCode: 39, which: 39 });
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
    });
  });
});
