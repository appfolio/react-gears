import * as React from 'react';
import { Direction } from 'reactstrap/lib/Dropdown';
type DateOrString = Date | string;
type VoidFunction = () => void;

interface DateInputPropTypes
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    | 'className'
    | 'size'
    | 'id'
    | 'type'
    | 'onBlur'
    | 'onChange'
    | 'onClick'
    | 'onFocus'
    | 'onKeyDown'
    | 'disabled'
    | 'value'
    | 'defaultValue'
  > {
  className?: string;
  dateEnabled?: (value: DateOrString) => boolean;
  dateVisible?: (currentDate: Date) => any[];
  dateFormat?: string;
  defaultValue?: DateOrString;
  direction?: Direction;
  disabled?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  id?: string;
  keyboard?: boolean;
  locale?: any;
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: DateOrString, isDate: boolean) => void;
  onClose?: (value: DateOrString, isDate: boolean) => void;
  parse?: (value: string, dateFormat: string) => DateOrString;
  positionFixed?: boolean;
  renderFooter?: (today: VoidFunction, clear: VoidFunction) => React.ReactElement;
  renderHeader?: (
    prevMonth: VoidFunction,
    nextMonth: VoidFunction,
    prevYear: VoidFunction,
    nextYear: VoidFunction
  ) => React.ReactElement;
  showOnFocus?: boolean;
  state?: any;
  value?: DateOrString;
}

declare class DateInput extends React.Component<DateInputPropTypes, {}> {}
export default DateInput;
