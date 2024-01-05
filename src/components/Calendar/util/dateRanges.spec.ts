import { getMonths, getPreviousYears } from './dateRanges';

const monthArray = [
  new Date(2000, 0),
  new Date(2000, 1),
  new Date(2000, 2),
  new Date(2000, 3),
  new Date(2000, 4),
  new Date(2000, 5),
  new Date(2000, 6),
  new Date(2000, 7),
  new Date(2000, 8),
  new Date(2000, 9),
  new Date(2000, 10),
  new Date(2000, 11),
];

const yearArray = [
  new Date(2000, 0),
  new Date(2001, 0),
  new Date(2002, 0),
  new Date(2003, 0),
  new Date(2004, 0),
  new Date(2005, 0),
  new Date(2006, 0),
  new Date(2007, 0),
  new Date(2008, 0),
  new Date(2009, 0),
  new Date(2010, 0),
  new Date(2011, 0),
];

const centeredYearArray = [
  new Date(1995, 0),
  new Date(1996, 0),
  new Date(1997, 0),
  new Date(1998, 0),
  new Date(1999, 0),
  new Date(2000, 0),
  new Date(2001, 0),
  new Date(2002, 0),
  new Date(2003, 0),
  new Date(2004, 0),
  new Date(2005, 0),
  new Date(2006, 0),
];

describe('Calendar - dateRanges', () => {
  describe('getMonths', () => {
    it('can get a range of months', () => {
      expect(getMonths(new Date(2000, 0, 1))).toEqual(monthArray);
    });
  });

  describe('getPreviousYears', () => {
    it('can get a range of years', () => {
      expect(getPreviousYears(new Date(2011, 0, 1))).toEqual(yearArray);
    });

    it('can get a centered range of years', () => {
      expect(getPreviousYears(new Date(2000, 0, 1), true)).toEqual(centeredYearArray);
    });
  });
});
