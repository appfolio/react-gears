import Omit from '../util/Omit';

interface FormChoicePropTypes extends Omit<React.InputHTMLAttributes<HTMLOptionElement>, 'disabled'> {
  inline?: boolean;
  color?: string;
  state?: string;
  disabled?: boolean;
  checked?: boolean;
  type: 'checkbox' | 'radio';
  value: string;
  selected: any;
}
declare const FormChoice: React.StatelessComponent<FormChoicePropTypes>;
export default FormChoice;
