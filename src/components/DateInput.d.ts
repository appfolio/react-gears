import Omit from './TypeHelpers/Omit';
import * as React from 'react';
type DateOrString = Date | string;

interface DateInputPropTypes extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'className' | 'size' | 'id' | 'className' | 'type' | 'onBlur' | 'onChange' | 'onClick' | 'onFocus' | 'onKeyDown' | 'disabled' | 'value' | 'defaultValue'>
{
  className?: string;
  dateVisible?: (currentDate: Date) => any[];
  dateFormat?: string;
  defaultValue?: DateOrString;
  disabled?: boolean;
  footer?: ReactNode;
  header?: ReactNode;
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
