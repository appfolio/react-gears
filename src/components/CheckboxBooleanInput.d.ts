import { HTMLProps } from 'react';
import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface CheckboxBooleanInputProps extends
  Omit<HTMLProps<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'value'> {
  checkboxLabel: JSX.Element | string;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
declare class CheckboxBooleanInput extends React.Component<CheckboxBooleanInputProps, {}> { }
export default CheckboxBooleanInput;

