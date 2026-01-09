import classnames from 'classnames';
import React, { useState } from 'react';
import type { InputProps } from 'reactstrap';
import { getUniqueId } from '../../util/uniqueId';
import FormGroup from '../Form/FormGroup';
import Input from '../Input/Input';
import Label from '../Label/Label';

export type CheckboxBooleanInputProps = Omit<InputProps, 'onChange' | 'value'> & {
  checkboxLabel?: React.ReactNode;
  onChange?: (isChecked: boolean) => void;
  value?: boolean;
};

function CheckboxBooleanInput({
  checkboxLabel,
  className,
  onChange,
  value,
  ...inputProps
}: CheckboxBooleanInputProps) {
  const [generatedId] = useState(() => getUniqueId('checkbox-boolean-input-'));
  const id = inputProps.id || generatedId;
  const classNames = classnames('pt-2', className);
  return (
    <FormGroup check className={classNames}>
      <Input
        {...inputProps}
        id={id}
        type="checkbox"
        checked={value}
        onChange={(e) => onChange && onChange(e.target.checked)}
      />
      {checkboxLabel && (
        <Label check for={id}>
          {checkboxLabel}
        </Label>
      )}
    </FormGroup>
  );
}

CheckboxBooleanInput.displayName = 'CheckboxBooleanInput';

export default CheckboxBooleanInput;
