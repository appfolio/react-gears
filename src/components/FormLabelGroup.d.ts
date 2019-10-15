import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface FormLabelGroupPropTypes extends 
  Omit<React.HTMLAttributes<HTMLInputElement>, 'id'>{
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  feedback?: any;
  hint?: string;
  inline?: boolean;
  inputId?: string,
  label?: (JSX.Element | string) | (JSX.Element | string)[];
  labelSize?: string;
  required?: boolean;
  rowClassName?: string;
  size?: string;
  srLabel?: string,
  stacked?: boolean;
  validFeedback?: (JSX.Element | string) | (JSX.Element | string)[];
  width?: {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
  }
}

declare class FormLabelGroup extends React.Component<FormLabelGroupPropTypes, {}> { }
export default FormLabelGroup;
