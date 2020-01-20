import * as React from 'react';
import { InputProps } from 'reactstrap/lib/Input';

interface CheckboxBooleanInputSpecificProps {
  checkboxLabel: React.ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
type ProtoExntends<T, U> = U & Omit<T, keyof U>;
type CheckboxBooleanInputProps = ProtoExntends<InputProps, CheckboxBooleanInputSpecificProps>;

declare class CheckboxBooleanInput extends React.Component<CheckboxBooleanInputProps, {}> { }
export default CheckboxBooleanInput;
