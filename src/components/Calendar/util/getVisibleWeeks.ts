import addWeeks from 'date-fns/addWeeks';
import eachDay from 'date-fns/eachDayOfInterval';
import endOfWeek from 'date-fns/endOfWeek';
import isFuture from 'date-fns/isFuture';
import isPast from 'date-fns/isPast';
import isSameDay from 'date-fns/isSameDay';
import isSameMonth from 'date-fns/isSameMonth';
import isToday from 'date-fns/isToday';
import startOfDay from 'date-fns/startOfDay';
import startOfMonth from 'date-fns/startOfMonth';
import startOfWeek from 'date-fns/startOfWeek';
import { type DayInfo } from '../Calendar.types';

export interface VisibilityInfo {
  currentDate: Date;
  dateEnabled: (date: Date) => boolean;
  dateVisible: (date: Date) => boolean;
}

function getVisibleDays({ currentDate, dateEnabled, dateVisible }: VisibilityInfo): DayInfo[] {
  const start = startOfWeek(startOfMonth(currentDate));
  const end = endOfWeek(addWeeks(start, 5));

  // Generate calendar days:
  return eachDay({ start, end }).map((date) => {
    return {
      selected: isSameDay(currentDate, date),
      date: startOfDay(date),
      enabled: dateEnabled(date),
      visible: dateVisible(date),
      past: isPast(date),
      today: isToday(date),
      sameMonth: isSameMonth(currentDate, date),
      future: isFuture(date),
    };
  });
}

export function getVisibleWeeks(info: VisibilityInfo): DayInfo[][] {
  const days = getVisibleDays(info);
  // Chunk into list of weeks:
  const weeks = [];
  for (let i = 0, len = days.length; i < len; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }
  return weeks;
}
