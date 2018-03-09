interface CountryInputPropTypes {
  className?: string;
  disabled?: boolean;
  id: string;
  name: string;
  onChange: (value: string | null) => void;
  placeholder?: string;
  value?: string;
}
declare const CountryInput: React.StatelessComponent<CountryInputPropTypes>;
export default CountryInput;
