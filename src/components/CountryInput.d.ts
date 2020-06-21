import Omit from './TypeHelpers/Omit';
import * as React from 'react';
import InputProps from './Input';

interface CountryInputProps extends
  Omit<InputProps, 'type' | 'onChange'> {
  onChange?: (value: string | null) => void;
  placeholder?: string;
  value?: string;
}
declare class CountryInput extends React.Component<CountryInputProps, {}> { }
export default CountryInput;
