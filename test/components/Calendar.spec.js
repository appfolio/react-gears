import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import addWeeks from 'date-fns/add_weeks';
import endOfWeek from 'date-fns/end_of_week';
import isSameDay from 'date-fns/is_same_day';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import { Calendar } from '../../src';

describe('<Calendar />', () => {
  it('should render correctly', () => {
    const component = mount(<Calendar />);

    assert(component);
  });

  it('should default to current month and today', () => {
    const component = mount(<Calendar />);
    const firstDate = component.find('Day').first();
    const lastDate = component.find('Day').last();
    const expectedDate = startOfWeek(startOfMonth(new Date()));
    const lastExpectedDate = endOfWeek(addWeeks(expectedDate, 5));
    assert(isSameDay(firstDate.props().day.date, expectedDate));
    assert(isSameDay(lastDate.props().day.date, lastExpectedDate));
  });

  it('should render the specified month and date', () => {
    const date = new Date(1992, 10, 30);
    const component = mount(<Calendar date={date} />);
    const firstDate = component.find('Day').first();
    const lastDate = component.find('Day').last();
    const expectedDate = startOfWeek(startOfMonth(date));
    const lastExpectedDate = endOfWeek(addWeeks(expectedDate, 5));
    assert(isSameDay(firstDate.props().day.date, expectedDate));
    assert(isSameDay(lastDate.props().day.date, lastExpectedDate));
  });

  it('should should call onChange after clicking a date', () => {
    const callback = sinon.spy();
    const component = mount(<Calendar onSelect={callback} />);
    const firstDate = component.find('Day').first();
    const expectedDate = firstDate.props().day.date;
    firstDate.simulate('click');
    assert(callback.calledWith(expectedDate));
  });

  it('should hide dates which are not visible based on dateVisible', () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = (date) => isSameDay(date, specifiedDate);
    const component = mount(<Calendar date={specifiedDate} dateVisible={dateVisible} />);
    component.find('Day').forEach((dayComponent) => {
      if (isSameDay(dayComponent.props().day.date, specifiedDate)) {
        assert.equal(dayComponent.props().day.visible, true);
      } else {
        assert.equal(dayComponent.props().day.visible, false);
      }
    });
  });

  it('should not call onSelect if clicking on a invisible date', () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = (date) => isSameDay(date, specifiedDate);
    const callback = sinon.spy();
    const component = mount(<Calendar date={specifiedDate} dateVisible={dateVisible} onSelect={callback} />);
    const firstDate = component.find('Day').first();
    assert.equal(firstDate.props().day.visible, false);
    firstDate.simulate('click');
    assert(callback.notCalled);
  });
});
