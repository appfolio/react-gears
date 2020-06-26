import { HTMLProps } from 'react';
import * as React from 'react';

interface CountryInputProps extends
  Omit<HTMLProps<HTMLInputElement>, 'type' | 'onChange'> {
  onChange?: (value: string | null) => void;
  placeholder?: string;
  value?: string;
}
declare class CountryInput extends React.Component<CountryInputProps, {}> { }
export default CountryInput;
