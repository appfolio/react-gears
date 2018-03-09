interface MonthCalendarPropTypes {
  date?: Date;
  dateVisible?: (date: Date) => boolean;
  monthFormat?: string;
  yearFormat?: string;
  onSelect?: (date: Date) => void;
}

declare const MonthCalendar: React.StatelessComponent<MonthCalendarPropTypes>;
export default MonthCalendar;
