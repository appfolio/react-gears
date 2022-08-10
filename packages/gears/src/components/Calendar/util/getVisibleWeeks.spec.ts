import { getVisibleWeeks, VisibilityInfo } from './getVisibleWeeks';

describe('Calendar - getVisibleWeeks', () => {
  it('can get a list of weeks with the correct visibility information', () => {
    const evenDatesVisible = jest.fn((date: Date) => date.getDay() % 2 === 0);
    const oddDatesEnabled = jest.fn((date: Date) => date.getDay() % 2 === 1);
    const visibilityInfo: VisibilityInfo = {
      currentDate: new Date(2000, 0, 1),
      dateEnabled: oddDatesEnabled,
      dateVisible: evenDatesVisible,
    };

    const weeks = getVisibleWeeks(visibilityInfo);

    expect(weeks.length).toBe(6);
    expect(evenDatesVisible).toHaveBeenCalledTimes(42);
    expect(oddDatesEnabled).toHaveBeenCalledTimes(42);

    weeks.forEach((week) => {
      expect(week.length).toBe(7);
      week.forEach((day) => {
        if (day.date.getDay() % 2 === 0) {
          expect(day.enabled).toBe(false);
          expect(day.visible).toBe(true);
        }
      });
    });
  });
});
