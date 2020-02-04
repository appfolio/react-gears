import React from 'react';
import CheckboxGroup, { CheckboxGroupProps } from './CheckGroup/CheckboxGroup';
import RadioGroup, { RadioGroupProps } from './CheckGroup/RadioGroup';

export type Value = any;
export interface Option {
  label: string;
  value: Value;
}

type CheckGroupProps = CheckboxGroupProps | RadioGroupProps;

const CheckGroup: React.FunctionComponent<CheckGroupProps> = (props: CheckGroupProps) => {
  if (props.radio === true) return <RadioGroup {...props} />;

  return <CheckboxGroup {...props} />;
};

export default CheckGroup;
