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

      assert.equal(input.getDOMNode().value, '');
    });

    it('should format defaultValue Date prop', () => {
      const component = mount(<DateInput defaultValue={new Date(1999, 1, 14)} />);
      const input = component.find('input');

      assert.equal(input.getDOMNode().value, '2/14/1999');
    });

    it('should format defaultValue date strings prop', () => {
      const component = mount(<DateInput defaultValue="1/23/1983" />);
      const input = component.find('input');

      assert.equal(input.getDOMNode().value, '1/23/1983');
      assert(isSameDay(component.instance().getCurrentDate(), new Date(1983, 0, 23)));
    });

    it('should not format invalid defaultValue and default to today', () => {
      const component = mount(<DateInput defaultValue="Veni, Vedi, Vici" />);
      const input = component.find('input');
      assert.equal(input.getDOMNode().value, 'Veni, Vedi, Vici');
      assert(isToday(component.instance().getCurrentDate()));
    });
  });

  it('should not tab to the calendar button', () => {
    const component = mount(<DateInput />);

    const toggle = component.find('InputGroupAddon');
    const calendarButton = toggle.find('Button');
    assert.equal(calendarButton.props().tabIndex, -1);
  });

  it('should should open and close when input addon clicked', () => {
    const component = mount(<DateInput />);
    assert.equal(component.find('Dropdown').props().isOpen, false);

    const toggle = component.find('InputGroupAddon');
    toggle.simulate('click');
    assert.equal(component.find('Dropdown').props().isOpen, true);

    toggle.simulate('click');
    assert.equal(component.find('Dropdown').props().isOpen, false);
  });

  it('should should open when focused if showOnFocus is true', () => {
    const component = mount(<DateInput showOnFocus />);
    assert.equal(component.find('Dropdown').props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(component.find('Dropdown').props().isOpen, true);
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

    const toggle = component.find('InputGroupAddon');
    toggle.simulate('click');
    assert.equal(dropdown.props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, false);
  });

  it('should should close when tab or esc pressed', () => {
    const component = mount(<DateInput showOnFocus />);
    const input = component.find('input');

    input.simulate('focus');
    assert.equal(component.find('Dropdown').props().isOpen, true);

    input.simulate('keydown', { key: 'Esc', keyCode: 27, which: 27 });
    assert.equal(component.find('Dropdown').props().isOpen, false);

    input.simulate('focus');
    assert.equal(component.find('Dropdown').props().isOpen, true);

    input.simulate('keydown', { key: 'Tab', keyCode: 9, which: 9 });
    assert.equal(component.find('Dropdown').props().isOpen, false);
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
      const prevYear = component.find('Button.js-prev-year');

      prevYear.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should should set date after clicking next year', () => {
      callback.reset();
      const expectedDate = addYears(component.instance().getCurrentDate(), 1);
      const nextYear = component.find('Button.js-next-year');

      nextYear.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should should set date after clicking prev month', () => {
      callback.reset();
      const expectedDate = addMonths(component.instance().getCurrentDate(), -1);
      const prevMonth = component.find('Button.js-prev-month');

      prevMonth.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should should set date after clicking next month', () => {
      callback.reset();
      const expectedDate = addMonths(component.instance().getCurrentDate(), 1);
      const nextMonth = component.find('Button.js-next-month');

      nextMonth.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should should set date after clicking today', () => {
      const today = component.find('footer Button').at(0);
      today.simulate('click');
      assert(isToday(component.instance().getCurrentDate()));
    });

    it('should should call onChange after clicking today', () => {
      callback.reset();
      const today = component.find('footer Button').at(0);
      today.simulate('click');
      assert(callback.called);
      const spyCall = callback.getCall(0);
      assert(isToday(spyCall.args[0]));
      assert.equal(spyCall.args[1], true);
    });

    it('should should clear date after clicking clear', () => {
      const clear = component.find('footer Button').at(1);
      clear.simulate('click');
      assert.equal(component.instance().inputEl.value, '');
    });

    it('should should call onChange after clicking clear', () => {
      callback.reset();
      const clear = component.find('footer Button').at(1);
      clear.simulate('click');
      assert(callback.calledWith('', false));
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

  context('date picker with controlled visible dates', () => {
    const callback = sinon.spy();
    const defaultDate = new Date(2017, 7, 14);
    const dateVisible = date => isSameDay(date, defaultDate);
    const component = mount(<DateInput defaultValue={defaultDate} onChange={callback} dateVisible={dateVisible} showOnFocus />);

    it('should pass dateVisible func to Calendar component', () => {
      const calendar = component.find('Calendar');
      assert.equal(calendar.props().dateVisible, dateVisible);
    });

    it('should not allow to pick invisible date', () => {
      callback.reset();
      const currentDate = component.instance().getCurrentDate();
      const firstDate = component.find('Day').first();
      assert.equal(isSameDay(currentDate, firstDate.props().day.date), false);

      firstDate.simulate('click');
      assert(callback.notCalled);
      assert(isSameDay(currentDate, component.instance().getCurrentDate()));
    });
  });

  it('should render custom header prop', () => {
    const Custom = () => (<div className='custom-header'>Custom Header</div>);
    const component = mount(<DateInput header={<Custom />} />);
    assert.equal(component.find('div.custom-header').length, 1);
    assert.equal(component.find('header.py-2').length, 0);
  });

  it('should render custom footer prop', () => {
    const Custom = () => (<div className='custom-footer'>Custom Footer</div>);
    const component = mount(<DateInput footer={<Custom />} />);
    assert.equal(component.find('div.custom-footer').length, 1);
    assert.equal(component.find('footer.pb-2').length, 0);
  });

  it('should call custom parse function', () => {
    const callback = sinon.spy(() => new Date(2003, 0, 2));
    mount(<DateInput parse={callback} defaultValue="1-2-3" dateFormat="MM-DD-YY" />);
    assert(callback.calledWith('1-2-3', 'MM-DD-YY'));
  });

  it('should support focus', () => {
    const wrapper = mount(<DateInput defaultValue="1/23/1983" />);
    const component = wrapper.instance();
    sinon.spy(component.inputEl, 'focus');
    component.focus();
    sinon.assert.calledOnce(component.inputEl.focus);
  });

  it('should support whatever props', () => {
    const component = mount(<DateInput rando="yadda" />);
    assert.equal(component.find('input[rando="yadda"]').length, 1);
  });

  context('id', () => {
    it('should not show id by default', () => {
      const component = mount(<DateInput />);
      assert.equal(component.find('input#yo').length, 0, 'div id visible');
    });

    it('should show id by when specified', () => {
      const component = mount(<DateInput id="yo" />);
      assert.equal(component.find('input#yo').length, 1, 'input id missing');
    });
  });
});
