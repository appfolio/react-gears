import classname from 'classnames';
import React from 'react';
import { useUniqueId } from '../../util/uniqueId';
import Input from '../Input/Input';
import Label from '../Label/Label';
import FormGroup from './FormGroup';

function FormChoice({ id, inline, disabled, children, containerClassName, type, value, ...props }) {
  const generatedId = useUniqueId('form-choice-');
  const idToUse = id || generatedId;

  if (type === 'select') {
    return (
      <option {...props} disabled={disabled} value={value}>
        {children}
      </option>
    );
  }

  const containerClasses = classname({ 'form-check-inline': inline }, containerClassName);

  const computedValue = value || children;

  const item = (
    <div className={containerClasses}>
      <Input
        id={idToUse}
        type={type}
        {...props}
        disabled={disabled}
        value={computedValue}
        style={{ cursor: disabled && 'not-allowed' }}
      />
      <Label
        className="form-check-label"
        check={!inline}
        for={idToUse}
        style={{ cursor: disabled && 'not-allowed' }}
      >
        {children}
      </Label>
    </div>
  );

  if (inline) {
    return item;
  }

  return (
    <FormGroup check disabled={disabled}>
      {item}
    </FormGroup>
  );
}

export default FormChoice;
