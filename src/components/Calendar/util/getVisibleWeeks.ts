import addWeeks from 'date-fns/add_weeks';
import eachDay from 'date-fns/each_day';
import endOfWeek from 'date-fns/end_of_week';
import isFuture from 'date-fns/is_future';
import isPast from 'date-fns/is_past';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isToday from 'date-fns/is_today';
import startOfDay from 'date-fns/start_of_day';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import { DayInfo } from '../Calendar.types';

export interface VisibilityInfo {
  currentDate: Date;
  dateEnabled: (date: Date) => boolean;
  dateVisible: (date: Date) => boolean;
}

function getVisibleDays({ currentDate, dateEnabled, dateVisible }: VisibilityInfo): DayInfo[] {
  const start = startOfWeek(startOfMonth(currentDate));
  const end = endOfWeek(addWeeks(start, 5));

  // Generate calendar days:
  return eachDay(start, end).map((date) => {
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
