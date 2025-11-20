import assert from 'assert';
import addDays from 'date-fns/add_days';
import addMonths from 'date-fns/add_months';
import addWeeks from 'date-fns/add_weeks';
import addYears from 'date-fns/add_years';
import isSameDay from 'date-fns/is_same_day';
import isToday from 'date-fns/is_today';
import frLocale from 'date-fns/locale/fr';
import startOfToday from 'date-fns/start_of_today';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import DateInput from './DateInput';

describe('<DateInput />', () => {
  describe('defaultValue', () => {
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

  describe('initialCalendarDate', () => {
    it('should open calendar to initialCalendarDate when value is empty', () => {
      const initialDate = new Date(2026, 2, 1); // March 1, 2026
      const component = mount(<DateInput initialCalendarDate={initialDate} />);
      const input = component.find('input');

      assert.equal(input.getDOMNode().value, '');
      assert(isSameDay(component.instance().getCurrentDate(), initialDate));
    });

    it('should use value over initialCalendarDate when both are provided', () => {
      const value = new Date(2025, 10, 15); // November 15, 2025
      const initialDate = new Date(2026, 2, 1); // March 1, 2026
      const component = mount(<DateInput value={value} initialCalendarDate={initialDate} />);

      assert(isSameDay(component.instance().getCurrentDate(), value));
    });

    it('should use state.value over initialCalendarDate when state has value', () => {
      const initialDate = new Date(2026, 2, 1); // March 1, 2026
      const component = mount(<DateInput initialCalendarDate={initialDate} />);
      const input = component.find('input');

      // Set state value by typing
      input.simulate('change', { target: { value: '11/15/2025' } });
      component.update();

      const stateValueDate = new Date(2025, 10, 15); // November 15, 2025
      assert(isSameDay(component.instance().getCurrentDate(), stateValueDate));
    });

    it('should format initialCalendarDate string prop', () => {
      const component = mount(<DateInput initialCalendarDate="3/1/2026" />);

      const expectedDate = new Date(2026, 2, 1); // March 1, 2026
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
    });
  });

  it('should not tab to the calendar button', () => {
    const component = mount(<DateInput />);

    const toggle = component.find('InputGroup');
    const calendarButton = toggle.find(Button);
    assert.equal(calendarButton.props().tabIndex, -1);
  });

  it('should open and close when input addon clicked', () => {
    const component = mount(<DateInput />);
    assert.equal(component.find('Dropdown').props().isOpen, false);

    const toggle = component.find('InputGroup').find(Button);
    toggle.simulate('click');
    assert.equal(component.find('Dropdown').props().isOpen, true);

    toggle.simulate('click');
    assert.equal(component.find('Dropdown').props().isOpen, false);
  });

  it('should open when focused if showOnFocus is true', () => {
    const component = mount(<DateInput showOnFocus />);
    assert.equal(component.find('Dropdown').props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(component.find('Dropdown').props().isOpen, true);
  });

  it('should not open when focused if showOnFocus is false', () => {
    const component = mount(<DateInput showOnFocus={false} />);
    const dropdown = component.find('Dropdown');
    assert.equal(dropdown.props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, false);
  });

  it('should not open when disabled is ture', () => {
    const component = mount(<DateInput disabled />);

    const dropdown = component.find('Dropdown');
    assert.equal(dropdown.props().isOpen, false);

    const toggle = component.find('InputGroup').find(Button);
    toggle.simulate('click');
    assert.equal(dropdown.props().isOpen, false);

    const input = component.find('input');
    input.simulate('focus');
    assert.equal(dropdown.props().isOpen, false);
  });

  it('should close when tab or esc pressed', () => {
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

  describe('user input', () => {
    it('should set date after entering a valid date string', () => {
      const component = mount(<DateInput />);
      const input = component.find('input');
      input.simulate('change', { target: { value: '12/3/2014' } });
      assert(isSameDay(component.instance().getCurrentDate(), new Date(2014, 11, 3)));
    });

    it('should reset date after entering an invalid date string', () => {
      const component = mount(<DateInput />);
      const input = component.find('input');
      input.simulate('change', { target: { value: 'Sandwiches' } });
      assert(isToday(component.instance().getCurrentDate()));
    });

    it('should reset date after clearing input', () => {
      const callback = sinon.spy();
      const component = mount(<DateInput onChange={callback} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: '' } });
      assert(isToday(component.instance().getCurrentDate()));
      assert(callback.calledWith('', false));
    });

    it('should call onChange after entering an invalid date string', () => {
      const callback = sinon.spy();
      const component = mount(<DateInput onChange={callback} />);
      const input = component.find('input');
      input.simulate('change', { target: { value: 'Grape Jelly' } });
      assert(callback.calledWith('Grape Jelly', false));
    });

    it('should call onBlur after losing focus', () => {
      const callback = sinon.spy();
      const component = mount(<DateInput onBlur={callback} />);
      const input = component.find('input');
      input.simulate('blur');
      assert(callback.calledOnce);
    });
  });

  describe('date picker', () => {
    const callback = sinon.spy();
    const component = mount(<DateInput onChange={callback} showOnFocus />);

    it('should set date after clicking a date', () => {
      callback.resetHistory();
      const firstDate = component.find('Day').first();
      const expectedDate = firstDate.props().day.date;
      firstDate.simulate('click');
      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(callback.calledWith(expectedDate, true));
    });

    it('should call onChange after clicking a date', () => {
      callback.resetHistory();
      const lastDate = component.find('Day').first();
      const expectedDate = lastDate.props().day.date;
      lastDate.simulate('click');
      assert(callback.calledWith(expectedDate, true));
    });

    it('should set date after clicking prev year', () => {
      callback.resetHistory();
      const expectedDate = addYears(component.instance().getCurrentDate(), -1);
      const prevYear = component.find('button.js-prev-year');

      prevYear.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should set date after clicking next year', () => {
      callback.resetHistory();
      const expectedDate = addYears(component.instance().getCurrentDate(), 1);
      const nextYear = component.find('button.js-next-year');

      nextYear.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should set date after clicking prev month', () => {
      callback.resetHistory();
      const expectedDate = addMonths(component.instance().getCurrentDate(), -1);
      const prevMonth = component.find('button.js-prev-month');

      prevMonth.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should set date after clicking next month', () => {
      callback.resetHistory();
      const expectedDate = addMonths(component.instance().getCurrentDate(), 1);
      const nextMonth = component.find('button.js-next-month');

      nextMonth.simulate('click');

      assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
      assert(isSameDay(callback.firstCall.args[0], expectedDate));
    });

    it('should set date to start of today after clicking today', () => {
      const today = component.find('footer button').at(0);
      today.simulate('click');
      assert.deepEqual(component.instance().getCurrentDate(), startOfToday());
    });

    it('should call onChange after clicking today', () => {
      callback.resetHistory();
      const today = component.find('footer button').at(0);
      today.simulate('click');
      assert(callback.called);
      const spyCall = callback.getCall(0);
      assert(isToday(spyCall.args[0]));
      assert.equal(spyCall.args[1], true);
    });

    it('should clear date after clicking clear', () => {
      const clear = component.find('footer button').at(1);
      clear.simulate('click');
      assert.equal(component.instance().inputEl.value, '');
    });

    it('should call onChange after clicking clear', () => {
      callback.resetHistory();
      const clear = component.find('footer button').at(1);
      clear.simulate('click');
      assert(callback.calledWith('', false));
    });

    it('should set date when using arrow keys', () => {
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

  describe('date picker with controlled visible dates', () => {
    const callback = sinon.spy();
    const defaultDate = new Date(2017, 7, 14);
    const dateVisible = (date) => isSameDay(date, defaultDate);
    const component = mount(
      <DateInput
        defaultValue={defaultDate}
        onChange={callback}
        dateVisible={dateVisible}
        showOnFocus
      />
    );

    it('should pass dateVisible func to Calendar component', () => {
      const calendar = component.find('Calendar');
      assert.equal(calendar.props().dateVisible, dateVisible);
    });

    it('should not allow to pick invisible date', () => {
      callback.resetHistory();
      const currentDate = component.instance().getCurrentDate();
      const firstDate = component.find('Day').first();
      assert.equal(isSameDay(currentDate, firstDate.props().day.date), false);

      firstDate.simulate('click');
      assert(callback.notCalled);
      assert(isSameDay(currentDate, component.instance().getCurrentDate()));
    });
  });

  describe('date picker with controlled enabled dates', () => {
    const callback = sinon.spy();
    const defaultDate = new Date(2017, 7, 14);
    const dateEnabled = () => false;
    const component = mount(
      <DateInput
        defaultValue={defaultDate}
        onChange={callback}
        dateEnabled={dateEnabled}
        showOnFocus
      />
    );

    it('should pass dateEnabled func to Calendar component', () => {
      const calendar = component.find('Calendar');
      assert.equal(calendar.props().dateEnabled, dateEnabled);
    });

    it('should not allow to pick disabled date', () => {
      callback.resetHistory();
      const currentDate = component.instance().getCurrentDate();
      const firstDate = component.find('Day').first();
      assert.equal(isSameDay(currentDate, firstDate.props().day.date), false);

      firstDate.simulate('click');
      assert(callback.notCalled);
      assert(isSameDay(currentDate, component.instance().getCurrentDate()));
    });
  });

  describe('header', () => {
    it('should render custom header prop', () => {
      const Custom = () => <div className="custom-header">Custom Header</div>;
      const component = mount(<DateInput header={<Custom />} />);
      assert.strictEqual(component.find('div.custom-header').length, 1);
      assert.strictEqual(component.find('header.py-2').length, 0);
    });

    describe('renderHeader', () => {
      const onChange = sinon.spy();
      const renderHeader = (prevMonth, nextMonth, prevYear, nextYear) => (
        <div className="d-flex py-2 custom-header">
          <Button className="js-prev-year" color="link" onClick={prevYear}>
            <Icon name="angle-double-start" fixedWidth />
          </Button>
          <Button className="js-prev-month" color="link" onClick={prevMonth}>
            <Icon name="angle-start" fixedWidth />
          </Button>
          <Button className="js-next-month" color="link" onClick={nextMonth}>
            <Icon name="angle-end" fixedWidth />
          </Button>
          <Button className="js-next-year" color="link" onClick={nextYear}>
            <Icon name="angle-double-end" fixedWidth />
          </Button>
        </div>
      );
      let component;

      beforeEach(() => {
        component = mount(<DateInput renderHeader={renderHeader} onChange={onChange} />);
      });

      it('should render custom header', () => {
        assert.strictEqual(component.find('div.custom-header').length, 1);
        assert.strictEqual(component.find('header.py-2').length, 0);
      });

      it('should allow setting to prev year', () => {
        onChange.resetHistory();
        const expectedDate = addYears(component.instance().getCurrentDate(), -1);
        const prevYear = component.find('button.js-prev-year');

        prevYear.simulate('click');

        assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
        assert(isSameDay(onChange.firstCall.args[0], expectedDate));
      });

      it('should allow setting to next year', () => {
        onChange.resetHistory();
        const expectedDate = addYears(component.instance().getCurrentDate(), 1);
        const nextYear = component.find('button.js-next-year');

        nextYear.simulate('click');

        assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
        assert(isSameDay(onChange.firstCall.args[0], expectedDate));
      });

      it('should allow setting to prev month', () => {
        onChange.resetHistory();
        const expectedDate = addMonths(component.instance().getCurrentDate(), -1);
        const prevMonth = component.find('button.js-prev-month');

        prevMonth.simulate('click');

        assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
        assert(isSameDay(onChange.firstCall.args[0], expectedDate));
      });

      it('should allow setting to next month', () => {
        onChange.resetHistory();
        const expectedDate = addMonths(component.instance().getCurrentDate(), 1);
        const nextMonth = component.find('button.js-next-month');

        nextMonth.simulate('click');

        assert(isSameDay(component.instance().getCurrentDate(), expectedDate));
        assert(isSameDay(onChange.firstCall.args[0], expectedDate));
      });
    });

    it('should render selected month in english by default', () => {
      const defaultDate = new Date(2017, 6, 14);
      const component = mount(<DateInput defaultValue={defaultDate} />);
      const header = component.find('.js-date-header');

      assert.strictEqual(header.text(), 'July 2017');
    });

    it('should render selected month in provided locale', () => {
      const defaultDate = new Date(2017, 6, 14);
      const component = mount(<DateInput defaultValue={defaultDate} locale={frLocale} />);
      const header = component.find('.js-date-header');

      assert.strictEqual(header.text(), 'juillet 2017');
    });
  });

  describe('footer', () => {
    it('should render custom footer prop', () => {
      const Custom = () => <div className="custom-footer">Custom Footer</div>;
      const component = mount(<DateInput footer={<Custom />} />);
      assert.equal(component.find('div.custom-footer').length, 1);
      assert.equal(component.find('footer.pb-2').length, 0);
    });

    describe('renderFooter', () => {
      const onChange = sinon.spy();
      const renderFooter = (today, clear) => (
        <div className="custom-footer">
          <Button onClick={today} className="me-2 today-button">
            Today
          </Button>
          <Button onClick={clear} className="me-2 clear-button">
            Clear
          </Button>
        </div>
      );
      let component;

      beforeEach(() => {
        onChange.resetHistory();
        component = mount(<DateInput renderFooter={renderFooter} onChange={onChange} />);
      });

      it('should render custom footer', () => {
        assert.strictEqual(component.find('div.custom-footer').length, 1);
        assert.strictEqual(component.find('footer.pb-2').length, 0);
      });

      it('should allow setting date to today', () => {
        onChange.resetHistory();
        const today = component.find('button.today-button').first();
        today.simulate('click');

        assert.deepStrictEqual(component.instance().getCurrentDate(), startOfToday());
        assert(onChange.called);

        const spyCall = onChange.getCall(0);

        assert(isToday(spyCall.args[0]));
        assert.strictEqual(spyCall.args[1], true);
      });

      it('should allow clearing date', () => {
        onChange.resetHistory();
        const clear = component.find('button.clear-button').first();
        clear.simulate('click');

        assert.strictEqual(component.instance().inputEl.value, '');
        assert(onChange.calledWith('', false));
      });
    });
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

  describe('id', () => {
    it('should not show id by default', () => {
      const component = mount(<DateInput />);
      assert.equal(component.find('input#yo').length, 0, 'div id visible');
    });

    it('should show id by when specified', () => {
      const component = mount(<DateInput id="yo" />);
      assert.equal(component.find('input#yo').length, 1, 'input id missing');
    });
  });

  describe('accessibility', () => {
    it('should contain screen reader only label for buttons', () => {
      const component = mount(<DateInput />);
      const nextYearLabel = component.find('.js-next-year').children().find('span');
      const prevYearLabel = component.find('.js-prev-year').children().find('span');
      const nextMonthLabel = component.find('.js-next-month').children().find('span');
      const prevMonthLabel = component.find('.js-prev-month').children().find('span');

      assert.strictEqual('Next Year', nextYearLabel.text());
      assert.strictEqual('visually-hidden', nextYearLabel.prop('className'));
      assert.strictEqual('Previous Year', prevYearLabel.text());
      assert.strictEqual('visually-hidden', prevYearLabel.prop('className'));
      assert.strictEqual('Next Month', nextMonthLabel.text());
      assert.strictEqual('visually-hidden', nextMonthLabel.prop('className'));
      assert.strictEqual('Previous Month', prevMonthLabel.text());
      assert.strictEqual('visually-hidden', prevMonthLabel.prop('className'));
    });
  });
});
