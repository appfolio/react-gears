import * as React from 'react';

interface MonthCalendarProps {
  date?: Date;
  dateVisible?: (date: Date) => boolean;
  monthFormat?: string;
  yearFormat?: string;
  onSelect?: (date: Date) => void;
}

declare class MonthCalendar extends React.Component<MonthCalendarProps, {}> { }
export default MonthCalendar;
