type DateOrString = Date | string;

interface DateInputPropTypes {
  className?: string;
  dateVisible?: (currentDate: Date) => any[];
  dateFormat?: string;
  defaultValue?: DateOrString;
  disabled?: boolean;
  footer?: (JSX.Element | string)[];
  header?: (JSX.Element | string)[];
  id: string;
  keyboard?: boolean;
  onBlur?: (ev: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (value: DateOrString, isDate: boolean) => void;
  parse?: (value: string, dateFormat: string) => DateOrString;
  showOnFocus?: boolean;
  value?: DateOrString;
}
declare const DateInput: React.StatelessComponent<DateInputPropTypes>;
export default DateInput;
