import { HTMLProps } from 'react';
import Omit from '../util/Omit';

interface CheckboxBooleanInputPropTypes extends
  Omit<HTMLProps<HTMLInputElement>, 'type' | 'checked' | 'onChange' | 'value'> {
  checkboxLabel: JSX.Element | string;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
declare const CheckboxBooleanInput: React.StatelessComponent<CheckboxBooleanInputPropTypes>;
export default CheckboxBooleanInput;
