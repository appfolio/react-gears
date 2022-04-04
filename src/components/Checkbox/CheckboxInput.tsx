import React, { type FC, type ReactNode } from 'react';
import { type InputProps } from 'reactstrap';
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
type CheckboxBooleanInputProps = ExtendsWithTypeOverrides<
  InputProps,
  CheckboxBooleanInputSpecificProps
>;

type CheckboxInputProps = CheckboxListInputProps | CheckboxBooleanInputProps;

const CheckboxInput: FC<CheckboxInputProps> = (props) =>
  props.children ? (
    <CheckboxListInput {...(props as CheckboxListInputProps)} />
  ) : (
    <CheckboxBooleanInput {...(props as CheckboxBooleanInputProps)} />
  );

export default CheckboxInput;
