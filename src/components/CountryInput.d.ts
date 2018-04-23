import { HTMLProps } from 'react';
import Omit from '../util/Omit';

interface CountryInputPropTypes extends 
  Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange'> {
  onChange?: (value: string | null) => void;
  placeholder?: string;
  value?: string;
}
declare const CountryInput: React.StatelessComponent<CountryInputPropTypes>;
export default CountryInput;
