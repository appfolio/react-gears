import React, { FC } from 'react';
import CheckboxBooleanInput, { CheckboxBooleanInputProps } from './CheckboxBooleanInput';
import CheckboxListInput, { CheckboxListInputProps } from './CheckboxListInput';

type CheckboxInputProps = CheckboxListInputProps | CheckboxBooleanInputProps;

// Forward ref
const CheckboxInput: FC<CheckboxInputProps> = (props) =>
  props.children ? (
    <CheckboxListInput {...(props as CheckboxListInputProps)} />
  ) : (
    <CheckboxBooleanInput {...(props as CheckboxBooleanInputProps)} />
  );

export default CheckboxInput;
