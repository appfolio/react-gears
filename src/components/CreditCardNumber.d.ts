import Omit from '../util/Omit';
type CardType = 'visa' | 'master-card' | 'american-express' |'discover' | 'diners-club' | 'jcb';


interface CreditCardNumberPropTypes extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  types?: CardType[];
  value?: string;
  onChange?: (value: string, type: string) => void;
}

declare const CreditCardNumber: React.StatelessComponent<CreditCardNumberPropTypes>;
export default CreditCardNumber;
