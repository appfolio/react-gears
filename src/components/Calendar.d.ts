import { TablePropTypes } from './Table';
import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface CalendarProps extends Omit<TablePropTypes, 'bordered' | 'hover' | 'striped'> {
  className?: string;
  date?: Date;
  dateFormat?: string;
  dateVisible?: (currentDate: Date) => boolean;
  onSelect?: (date: Date) => void;
  weekDayFormat?: string;
}

declare class Calendar extends React.Component<CalendarProps, {}> { }
export default Calendar;

