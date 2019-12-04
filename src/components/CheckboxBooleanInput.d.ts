import { HTMLProps } from 'react';
import Omit from './TypeHelpers/Omit';
import * as React from 'react';
import { InputProps } from 'reactstrap/lib/Input';

interface CheckboxBooleanInputProps extends InputProps {
  checkboxLabel: ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
declare class CheckboxBooleanInput extends React.Component<CheckboxBooleanInputProps, {}> { }
export default CheckboxBooleanInput;

