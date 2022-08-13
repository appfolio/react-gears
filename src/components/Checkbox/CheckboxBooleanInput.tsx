import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import type { InputProps } from 'reactstrap';
import FormGroup from '../Form/FormGroup';
import Input from '../Input/Input';
import Label from '../Label/Label';

interface CheckboxBooleanInputSpecificProps {
  checkboxLabel?: React.ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
}
type ExtendsWithTypeOverrides<T, U> = U & Omit<T, keyof U>;
export type CheckboxBooleanInputProps = ExtendsWithTypeOverrides<
  InputProps,
  CheckboxBooleanInputSpecificProps
>;

let count = 0;

function getID() {
  return `checkbox-boolean-input-${count++}`;
}

class CheckboxBooleanInput extends React.Component<CheckboxBooleanInputProps> {
  static propTypes = {
    id: PropTypes.string,
    checkboxLabel: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
  };

  id = getID();

  constructor(props: CheckboxBooleanInputProps) {
    super(props);

    this.id = props.id || this.id;
  }

  render() {
    const { checkboxLabel, className, onChange, value, ...inputProps } = this.props;
    const classNames = classnames('pt-2', className);

    return (
      <FormGroup check className={classNames}>
        <Input
          id={this.id}
          {...inputProps}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        {checkboxLabel && (
          <Label check for={this.id}>
            {checkboxLabel}
          </Label>
        )}
      </FormGroup>
    );
  }
}

export default CheckboxBooleanInput;
