import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import { isBefore, isSameDay } from 'date-fns';
import { format } from '../../src/util/date.js';
import { MonthCalendar } from '../../src';

describe('<MonthCalendar />', () => {
  it('should render correctly', () => {
    const component = mount(<MonthCalendar />);

    assert(component);
  });

  it('should default to current month and today', () => {
    const component = mount(<MonthCalendar />);
    const today = new Date();
    const month = component.find('.active').first();
    const year = component.find('.active').last();
    assert.equal(month.text(), format(today, 'MMM'));
    assert.equal(year.text(), today.getFullYear());
  });

  it('should render the specified month and date', () => {
    const date = new Date(1992, 10, 30);
    const component = mount(<MonthCalendar date={date} />);
    const month = component.find('.active').first();
    const year = component.find('.active').last();
    assert.equal(month.text(), format(date, 'MMM'));
    assert.equal(year.text(), date.getFullYear());
  });

  it('should should call onChange after clicking a date', () => {
    const callback = sinon.spy();
    const today = new Date();
    const expectedDate = new Date(today.getFullYear(), 0, 1);
    const component = mount(<MonthCalendar onSelect={callback} />);
    const firstDate = component.find('.nav-link').first();
    firstDate.simulate('click');
    sinon.assert.calledWith(callback, expectedDate);
  });

  it('should hide dates which are not visible based on dateVisible', () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = date => isSameDay(date, specifiedDate);
    const component = mount(<MonthCalendar date={specifiedDate} dateVisible={dateVisible} />);
    component.find('Label').forEach((dayComponent) => {
      if (isSameDay(dayComponent.props().date, specifiedDate)) {
        assert.equal(dayComponent.props().visible, true);
      } else {
        assert.equal(dayComponent.props().visible, false);
      }
    });
  });

  it('should not call onSelect if clicking on a invisible date', () => {
    const today = new Date();
    const specifiedDate = new Date(today.getFullYear() - 5, 7, 14);
    const dateVisible = date => isBefore(date, specifiedDate);
    const callback = sinon.spy();
    const component = mount(<MonthCalendar date={specifiedDate} dateVisible={dateVisible} onSelect={callback} />);
    const lastYear = component.find('li').last();
    assert.equal(lastYear.hasClass('invisible'), true);
    lastYear.simulate('click');
    sinon.assert.notCalled(callback);
  });
});
