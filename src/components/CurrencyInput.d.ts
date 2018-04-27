import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface CurrencyInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'>{
  allowDecimal?: boolean;
  allowNegative?: boolean;
  className?: string;
  includeThousandsSeparator?: boolean;
  size?: string;
}
declare class CurrencyInput extends React.Component<CurrencyInputProps, {}> { }
export default CurrencyInput;

