import mod from '../../../util/mod';
import range from '../../../util/range';

export const getMonths = (date: Date) =>
  range(0, 12).map((month) => new Date(date.getFullYear(), month, 1));

export const getYears = (date: Date) => {
  const now = new Date();
  const currentYear = date.getFullYear();
  const month = date.getMonth();
  const end = currentYear + mod(now.getFullYear() - currentYear, 12) + 1;
  const start = end - 12;
  return range(start, end).map((year) => new Date(year, month, 1));
};
