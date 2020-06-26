import * as React from 'react';

export interface FormLabelGroupProps extends
  Omit<React.HTMLAttributes<HTMLInputElement>, 'id'> {
  children?: React.ReactNode;
  feedback?: any;
  hint?: React.ReactNode;
  inline?: boolean;
  inputId?: string,
  label?: React.ReactNode;
  labelSize?: string;
  required?: boolean;
  rowClassName?: string;
  size?: string;
  srLabel?: string,
  stacked?: boolean;
  validFeedback?: React.ReactNode;
  width?: {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
  }
}

declare class FormLabelGroup extends React.Component<FormLabelGroupProps, {}> { }
export default FormLabelGroup;
