import React from 'react';
import CheckboxGroup, { CheckboxGroupProps } from './CheckGroup/CheckboxGroup';
import RadioGroup, { RadioGroupProps } from './CheckGroup/RadioGroup';

export type Value = string | number;
export interface Option {
  label: string;
  value: Value;
}

type CheckGroupProps = CheckboxGroupProps | RadioGroupProps;

const CheckGroup = (props: CheckGroupProps) => {
  if (props.radio === true) return <RadioGroup {...props} />;

  return <CheckboxGroup {...props} />;
};

export default CheckGroup;
