import { isInaccessible, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import addDays from 'date-fns/addDays';
import addWeeks from 'date-fns/addWeeks';
import endOfWeek from 'date-fns/endOfWeek';
import isSameDay from 'date-fns/isSameDay';
import frLocale from 'date-fns/locale/fr';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import subDays from 'date-fns/subDays';
import React from 'react';
import Calendar from './Calendar';
import { DayInfo } from './Calendar.types';

describe('<Calendar />', () => {
  it('renders correctly', () => {
    const { container } = render(<Calendar />);
    expect(container.nodeName).toBe('DIV');
  });

  it('is accessible', () => {
    const { container } = render(<Calendar />);
    expect(isInaccessible(container)).toBe(false);
  });

  it("defaults to today's date", () => {
    const { queryByTestId } = render(<Calendar />);

    const today = new Date();
    const firstDate = startOfWeek(startOfMonth(today));
    const lastDate = endOfWeek(addWeeks(firstDate, 5));
    const dayBeforeFirstDate = subDays(firstDate, 1);
    const dayAfterLastDate = addDays(lastDate, 1);

    expect(queryByTestId(`day-${firstDate.toDateString()}`)).not.toBe(null);
    expect(queryByTestId(`day-${lastDate.toDateString()}`)).not.toBe(null);
    expect(queryByTestId(`day-${dayBeforeFirstDate.toDateString()}`)).toBe(null);
    expect(queryByTestId(`day-${dayAfterLastDate.toDateString()}`)).toBe(null);
  });

  it('renders a specific month and date', () => {
    const targetDate = new Date(1992, 10, 30);
    const { queryByTestId } = render(<Calendar date={targetDate} />);

    const firstDate = startOfWeek(startOfMonth(targetDate));
    const lastDate = endOfWeek(addWeeks(firstDate, 5));
    const dayBeforeFirstDate = subDays(firstDate, 1);
    const dayAfterLastDate = addDays(lastDate, 1);

    expect(queryByTestId(`day-${firstDate.toDateString()}`)).not.toBe(null);
    expect(queryByTestId(`day-${lastDate.toDateString()}`)).not.toBe(null);
    expect(queryByTestId(`day-${dayBeforeFirstDate.toDateString()}`)).toBe(null);
    expect(queryByTestId(`day-${dayAfterLastDate.toDateString()}`)).toBe(null);
  });

  it('calls onSelect when clicking on a day', () => {
    const targetDate = new Date(1990, 1, 1);
    const selectFn = jest.fn();

    const { getByTestId } = render(<Calendar date={targetDate} onSelect={selectFn} />);
    const dayToClick = getByTestId(`day-${targetDate.toDateString()}`);
    userEvent.click(dayToClick);

    expect(selectFn).toHaveBeenCalledTimes(1);
  });

  it('hides dates which are not visible based on dateVisible', () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = (date: Date) => !isSameDay(date, specifiedDate);
    const { getByTestId } = render(<Calendar date={specifiedDate} dateVisible={dateVisible} />);

    const dayCell = getByTestId(`day-${specifiedDate.toDateString()}`);
    expect(dayCell.classList.contains('invisible')).toBe(true);
  });

  it('is accessible with hidden dates', async () => {
    const specifiedDate = new Date(2017, 7, 14);
    const dateVisible = (date: Date) => isSameDay(date, specifiedDate);
    const { container } = render(<Calendar date={specifiedDate} dateVisible={dateVisible} />);
    expect(isInaccessible(container)).toBe(false);
  });

  it('does not call onSelect when clicking on an invisible day', () => {
    const targetDate = new Date(1990, 1, 1);
    const selectFn = jest.fn();
    const dateVisible = (date: Date) => !isSameDay(date, targetDate);

    const { getByTestId } = render(
      <Calendar date={targetDate} onSelect={selectFn} dateVisible={dateVisible} />
    );
    const dayToClick = getByTestId(`day-${targetDate.toDateString()}`);
    userEvent.click(dayToClick);

    expect(selectFn).not.toHaveBeenCalled();
  });

  it('does not call onSelect when clicking on an disabled day', () => {
    const targetDate = new Date(1990, 1, 1);
    const selectFn = jest.fn();
    const dateEnabled = (date: Date) => !isSameDay(date, targetDate);

    const { getByTestId } = render(
      <Calendar date={targetDate} onSelect={selectFn} dateEnabled={dateEnabled} />
    );
    const dayToClick = getByTestId(`day-${targetDate.toDateString()}`);
    userEvent.click(dayToClick);

    expect(selectFn).not.toHaveBeenCalled();
  });

  it('renders custom days', () => {
    const { getAllByText } = render(
      <Calendar
        renderDay={(d: DayInfo) => (
          <td key={d.date.toString()} className="customDay">
            CUSTOM_DAY
          </td>
        )}
      />
    );
    expect(getAllByText('CUSTOM_DAY').length).toBe(42);
  });

  it('renders accessible custom days', () => {
    const { container } = render(
      <Calendar
        renderDay={(d: DayInfo) => (
          <td key={d.date.toString()} className="customDay">
            CUSTOM_DAY
          </td>
        )}
      />
    );
    expect(isInaccessible(container)).toBe(false);
  });

  describe('weeks', () => {
    it('renders weeks in english by default', () => {
      const specifiedDate = new Date(2017, 6, 14);
      const { queryByText } = render(<Calendar date={specifiedDate} />);

      const names = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

      names.forEach((name) => {
        expect(queryByText(name)).not.toBe(null);
      });
    });

    it('render weeks in the provided locale', () => {
      const specifiedDate = new Date(2017, 6, 14);
      const { queryByText } = render(<Calendar date={specifiedDate} locale={frLocale} />);

      const names = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'];

      names.forEach((name) => {
        expect(queryByText(name)).not.toBe(null);
      });
    });
  });
});
