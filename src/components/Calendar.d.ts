import { TableProps } from './Table';
import * as React from 'react';

interface CalendarProps extends Omit<TableProps, 'bordered' | 'hover' | 'striped'> {
  className?: string;
  date?: Date;
  dateFormat?: string;
  dateVisible?: (currentDate: Date) => boolean;
  onSelect?: (date: Date) => void;
  weekDayFormat?: string;
}

declare class Calendar extends React.Component<CalendarProps, {}> {}
export default Calendar;
