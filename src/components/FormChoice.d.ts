import * as React from 'react';

interface FormChoiceProps extends Omit<React.InputHTMLAttributes<HTMLOptionElement>, 'disabled'> {
  inline?: boolean;
  disabled?: boolean;
  checked?: boolean;
  type: 'checkbox' | 'radio' | 'select';
  value: string;
  selected?: boolean;
}

declare class FormChoice extends React.Component<FormChoiceProps, {}> { }
export default FormChoice;
