interface MonthInputPropTypes {
  className?: string;
  dateVisible?: (d: Date) => boolean;
  dateFormat?: string;
  monthFormat?: string;
  yearFormat?: string;
  defaultValue?: string | Date;
  disabled?: boolean;
  footer?: (JSX.Element | string) | (JSX.Element | string)[];
  header?: (JSX.Element | string) | (JSX.Element | string)[];
  keyboard?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (val: Date | string, isDate: boolean) => void;
  parse?: (val: string, dateFormat: string) => Date | undefined;
  showOnFocus?: boolean;
  value?: string | Date;
}
declare const MonthInput: React.StatelessComponent<MonthInputPropTypes>;
export default MonthInput;
