interface CalendarProps {
  className?: string;
  date?: Date;
  dateFormat?: string;
  dateVisible?: (currentDate: Date) => boolean;
  onSelect?: (date: Date) => void;
  weekDayFormat?: string;
}

declare const Calendar: React.StatelessComponent<CalendarProps>;
export default Calendar;
