import range from '../../../util/range';

export const getMonths = (date: Date) =>
  range(0, 12).map((month) => new Date(date.getFullYear(), month, 1));

export const getPreviousYears = (date: Date, centerYears: boolean = false) => {
  const inputYear = date.getFullYear();
  const month = date.getMonth();
  let end = inputYear + 1;

  if (centerYears) {
    end += 6;
  }

  const start = end - 12;
  return range(start, end).map((year) => new Date(year, month, 1));
};
