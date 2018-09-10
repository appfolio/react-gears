import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface FormRowPropTypes extends 
  Omit<React.HTMLAttributes<HTMLInputElement>, 'id'>{
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  label?: (JSX.Element | string) | (JSX.Element | string)[];
  labelSize?: string;
  hint?: string;
  feedback?: any;
  id?: string;
  required?: boolean;
  rowClassName?: string;
  type?: any;
  inline?: boolean;
  stacked?: boolean;
  size?: string;
  validFeedback?: (JSX.Element | string) | (JSX.Element | string)[];
  width?: {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
  }
}

declare class FormRow extends React.Component<FormRowPropTypes, {}> { }
export default FormRow;
