import Omit from './TypeHelpers/Omit';

interface CurrencyInputPropTypes extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'className' | 'size'>{
  allowDecimal?: boolean;
  allowNegative?: boolean;
  className?: string;
  includeThousandsSeparator?: boolean;
  size?: string;
}
declare const CurrencyInput: React.StatelessComponent<CurrencyInputPropTypes>;
export default CurrencyInput;
