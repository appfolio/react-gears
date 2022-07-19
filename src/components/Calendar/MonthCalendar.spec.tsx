import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import isSameMonth from 'date-fns/is_same_month';
import fecha from 'fecha';
import React from 'react';
import MonthCalendar from './MonthCalendar';

describe('<MonthCalendar />', () => {
  it('renders correctly', () => {
    const { container } = render(<MonthCalendar />);
    expect(container).not.toBe(null);
  });

  it('defaults to current month and year', () => {
    const now = new Date();
    const { getByText } = render(<MonthCalendar />);

    const selectedMonth = getByText(fecha.format(now, 'MMM'));
    const selectedYear = getByText(now.getFullYear());

    expect(selectedMonth.classList.contains('active')).toBe(true);
    expect(selectedYear.classList.contains('active')).toBe(true);
  });

  it('renders a specified month and year', () => {
    const selectedDate = new Date(1992, 10, 30);
    const { getByText } = render(<MonthCalendar date={selectedDate} />);

    const selectedMonth = getByText('Nov');
    const selectedYear = getByText('1992');

    expect(selectedMonth.classList.contains('active')).toBe(true);
    expect(selectedYear.classList.contains('active')).toBe(true);
  });

  it('renders a range of 12 years before today date by default', () => {
    const { getAllByTestId } = render(<MonthCalendar />);

    const all = getAllByTestId('monthcalendar-navitem');
    const years = all.slice(12);
    const date = new Date();

    years.reverse().forEach((item, index) => {
      const year = date.getFullYear() - index;
      expect(item.textContent).toBe(year.toString());
    });
  });

  it('centers a range of 6 +/- years before today date if centerYearSelection', () => {
    const { getAllByTestId } = render(<MonthCalendar centerYearSelection />);

    const all = getAllByTestId('monthcalendar-navitem');
    const years = all.slice(12);
    const date = new Date();

    years.reverse().forEach((item, index) => {
      const year = date.getFullYear() + 6 - index;
      expect(item.textContent).toBe(year.toString());
    });
  });

  it('calls onSelect after clicking a date', () => {
    const selectedDate = new Date(1992, 10, 30);
    const selectSpy = jest.fn();
    const { getByText } = render(<MonthCalendar date={selectedDate} onSelect={selectSpy} />);

    const selectedMonth = getByText('Nov');
    const selectedYear = getByText('1992');

    userEvent.click(selectedMonth);
    userEvent.click(selectedYear);

    expect(selectSpy).toHaveBeenCalledTimes(2);
  });

  it('hides dates that are not visible', () => {
    const selectedDate = new Date(1992, 10, 30);
    const dateVisible = (date: Date) => !isSameMonth(date, selectedDate);
    const { getAllByTestId } = render(
      <MonthCalendar date={selectedDate} dateVisible={dateVisible} />
    );

    const all = getAllByTestId('monthcalendar-navitem');

    all.forEach((item) => {
      if (item.textContent === 'Nov' || item.textContent === '1992') {
        expect(item.classList.contains('invisible')).toBe(true);
      } else {
        expect(item.classList.contains('invisible')).toBe(false);
      }
    });
  });

  it('does not call onSelect when clicking on a non-visible date', () => {
    const selectedDate = new Date(1992, 10, 30);
    const dateVisible = (date: Date) => !isSameMonth(date, selectedDate);
    const selectSpy = jest.fn();

    const { getByText } = render(
      <MonthCalendar date={selectedDate} dateVisible={dateVisible} onSelect={selectSpy} />
    );

    const hiddenMonth = getByText('Nov');
    const hiddenYear = getByText('1992');

    userEvent.click(hiddenMonth);
    userEvent.click(hiddenYear);

    expect(selectSpy).not.toHaveBeenCalled();
  });
});
