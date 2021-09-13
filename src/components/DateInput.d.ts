import * as React from 'react';
import { Direction } from 'reactstrap/types/lib/Dropdown';
type DateOrString = Date | string;

interface DateInputPropTypes extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className' | 'size' | 'id' | 'type' | 'onBlur' | 'onChange' | 'onClick' | 'onFocus' | 'onKeyDown' | 'disabled' | 'value' | 'defaultValue'>
{
  className?: string;
  dateVisible?: (currentDate: Date) => any[];
  dateFormat?: string;
  defaultValue?: DateOrString;
  direction?: Direction;
  disabled?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  id?: string;
  keyboard?: boolean;
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: DateOrString, isDate: boolean) => void;
  onClose?: (value: DateOrString, isDate: boolean) => void;
  parse?: (value: string, dateFormat: string) => DateOrString;
  showOnFocus?: boolean;
  value?: DateOrString;
}

declare class DateInput extends React.Component<DateInputPropTypes, {}> {
}
export default DateInput;
