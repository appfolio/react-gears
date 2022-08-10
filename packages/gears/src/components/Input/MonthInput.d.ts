import * as React from 'react';

interface MonthInputProps {
  centerYearSelection?: boolean;
  className?: string;
  dateVisible?: (d: Date) => boolean;
  dateFormat?: string;
  monthFormat?: string;
  yearFormat?: string;
  defaultValue?: string | Date;
  disabled?: boolean;
  footer?: React.ReactNode;
  header?: React.ReactNode;
  keyboard?: boolean;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (val: Date | string, isDate: boolean) => void;
  parse?: (val: string, dateFormat: string) => Date | undefined;
  showOnFocus?: boolean;
  value?: string | Date;
}
declare class MonthInput extends React.Component<MonthInputProps, {}> {}
export default MonthInput;
