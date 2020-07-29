import React, { FunctionComponent, ReactNode } from 'react';
import { InputProps } from 'reactstrap/lib/Input';

import CheckboxBooleanInput from './CheckboxBooleanInput';
import CheckboxListInput from './CheckboxListInput';

interface CheckboxListInputProps {
  children?: ReactNode;
  onChange?: (value: string[]) => void;
  value?: string[];
}

interface CheckboxBooleanInputSpecificProps {
  checkboxLabel: ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
type ExtendsWithTypeOverrides<T, U> = U & Omit<T, keyof U>;
type CheckboxBooleanInputProps = ExtendsWithTypeOverrides<InputProps, CheckboxBooleanInputSpecificProps>;

type CheckboxInputProps = CheckboxListInputProps | CheckboxBooleanInputProps;

const CheckboxInput: FunctionComponent<CheckboxInputProps> = (props: CheckboxInputProps) =>
    props.children ?
      <CheckboxListInput {...props} /> :
      <CheckboxBooleanInput {...(props as CheckboxBooleanInputProps)} />;

export default CheckboxInput;
