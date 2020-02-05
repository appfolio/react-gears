import React from 'react';
import CheckboxGroup, { CheckboxGroupProps } from './SelectionControlGroup/CheckboxGroup';
import RadioGroup, { RadioGroupProps } from './SelectionControlGroup/RadioGroup';

export type Value = any;
export interface Option {
  label: string;
  value: Value;
}

type SelectionControlGroupProps = CheckboxGroupProps | RadioGroupProps;

const SelectionControlGroup: React.FunctionComponent<SelectionControlGroupProps> = (props: SelectionControlGroupProps) => {
  if (props.radio === true) return <RadioGroup {...props} />;

  return <CheckboxGroup {...props} />;
};

export default SelectionControlGroup;
