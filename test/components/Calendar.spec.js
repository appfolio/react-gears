import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import sinon from 'sinon';
import {
  addWeeks,
  endOfWeek,
  isSameDay,
  startOfMonth,
  startOfWeek
} from 'date-fns';
import frLocale from 'date-fns/locale/fr';
import { assertAccessible } from '../a11yHelpers';
import { Calendar } from '../../src';

describe('<Calendar />', () => {
  it('should render correctly', () => {
    const component = mount(<Calendar />);

    assert(component);
  });

  it('should be accessible', async () => {
    await assertAccessible(
      <Calendar />
    );
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
    const dateVisible = date => isSameDay(date, specifiedDate);
    const component = mount(<Calendar date={specifiedDate} dateVisible={dateVisible} />);
    component.find('Day').forEach((dayComponent) => {
      if (isSameDay(dayComponent.props().day.date, specifiedDate)) {
        assert.equal(dayComponent.props().day.visible, true);
      } else {
        assert.equal(dayComponent.props().day.visible, false);
      }
    });
  });

  it('should be accessible with hidden dates', async () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = date => isSameDay(date, specifiedDate);
    await assertAccessible(
      <Calendar date={specifiedDate} dateVisible={dateVisible} />
    );
  });

  it('should not call onSelect if clicking on a invisible date', () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = date => isSameDay(date, specifiedDate);
    const callback = sinon.spy();
    const component = mount(<Calendar date={specifiedDate} dateVisible={dateVisible} onSelect={callback} />);
    const firstDate = component.find('Day').first();
    assert.equal(firstDate.props().day.visible, false);
    firstDate.simulate('click');
    assert(callback.notCalled);
  });

  it('should not call onSelect if clicking on a disabled date', () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateEnabled = date => isSameDay(date, specifiedDate);
    const callback = sinon.spy();
    const component = mount(<Calendar date={specifiedDate} dateEnabled={dateEnabled} onSelect={callback} />);
    const firstDate = component.find('Day').first();
    firstDate.simulate('click');
    assert(callback.notCalled);
  });

  it('should render custom days', () => {
    const component = mount(<Calendar renderDay={() => <td className="customDay">x</td>} />);
    const days = component.find('.customDay');
    assert.equal(days.length, 42);
  });

  it('should be accessible with custom days', async () => {
    await assertAccessible(
      <Calendar renderDay={() => <td className="customDay">x</td>} />
    );
  });

  describe('weeks', () => {
    it('should render weeks in english by default', () => {
      const specifiedDate = new Date(2017, 6, 14);
      const component = mount(<Calendar date={specifiedDate} />);
      const weekdays = component.find('.js-calendar-weekdays th');

      const names = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

      names.forEach((w, i) => {
        assert.strictEqual(weekdays.at(i).text(), w);
      });
    });

    it('should render weeks in provided locale', () => {
      const specifiedDate = new Date(2017, 6, 14);
      const component = mount(<Calendar date={specifiedDate} locale={frLocale} />);
      const weekdays = component.find('.js-calendar-weekdays th');

      const names = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'];

      names.forEach((w, i) => {
        console.log('weekdays', weekdays.at(i));
        assert.strictEqual(weekdays.at(i).text(), w);
      });
    });
  });
});
