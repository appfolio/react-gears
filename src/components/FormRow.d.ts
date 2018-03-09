interface FormRowPropTypes {
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  color?: string;
  label?: (JSX.Element | string) | (JSX.Element | string)[];
  hint?: string;
  feedback?: string;
  id?: string;
  required?: boolean;
  rowClassName?: string;
  type?: 'checkbox' | 'radio' | 'static' | 'file' | 'string';
  inline?: boolean;
  stacked?: boolean;
  state?: string;
  width?: { size: number };
}
declare const FormRow: React.StatelessComponent<FormRowPropTypes>;
export default FormRow;
