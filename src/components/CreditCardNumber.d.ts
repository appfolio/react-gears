import Omit from './TypeHelpers/Omit';
import * as React from 'react';

type CardType = 'visa' | 'master-card' | 'american-express' |'discover' | 'diners-club' | 'jcb';


interface CreditCardNumberProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  types?: CardType[];
  value?: string;
  onChange?: (value: string, type: string) => void;
}

declare class CreditCardNumber extends React.Component<CreditCardNumberProps, {}> { }
export default CreditCardNumber;
