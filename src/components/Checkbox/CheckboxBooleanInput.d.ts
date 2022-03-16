import * as React from 'react';
import { InputProps } from 'reactstrap';

interface CheckboxBooleanInputSpecificProps {
  checkboxLabel?: React.ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
type ExtendsWithTypeOverrides<T, U> = U & Omit<T, keyof U>;
type CheckboxBooleanInputProps = ExtendsWithTypeOverrides<
  InputProps,
  CheckboxBooleanInputSpecificProps
>;

declare class CheckboxBooleanInput extends React.Component<CheckboxBooleanInputProps, {}> {}
export default CheckboxBooleanInput;
