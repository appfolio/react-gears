import * as DateFns from 'date-fns';

export function isValidDate(date) {
  return date instanceof Date && !Number.isNaN(date.getTime());
}

export function format(date, dateFormat, options = {}) {
  return DateFns.format(date, dateFormat, options);
}

export function parse(value, dateFormat) {
  // Mimics behavior of fecha.parse where invalid or blank value returns null.
  const result = DateFns.parse(value, dateFormat, new Date());
  return isValidDate(result) ? result : null;
}

export default {
  format,
  isValidDate,
  parse
};
