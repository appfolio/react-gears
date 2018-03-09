interface CheckboxBooleanInputPropTypes {
  checkboxLabel: JSX.Element | string;
  onChange: (isChecked: boolean) => void;
  value: boolean;
}
declare const CheckboxBooleanInput: React.StatelessComponent<CheckboxBooleanInputPropTypes>;
export default CheckboxBooleanInput;
