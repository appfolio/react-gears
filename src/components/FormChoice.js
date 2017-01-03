import React from 'react';
import classname from 'classnames';
import { FormGroup, Input, Label } from 'reactstrap';

const FormChoice = props => {
  const {
    inline,
    color,
    state,
    disabled,
    checked,
    children,
    type,
    value,
    selected,
    ...attributes
  } = props;

  if (type === 'select') {
    return <option {...attributes} value={value} children={children} />;
  }

  const labelClasses = classname({ 'form-check-inline': inline });

  const computedValue = value || children;

  let computedChecked;

  if (type === 'checkbox') {
    computedChecked = selected && selected.indexOf(computedValue) > -1;
  } else if (type === 'radio') {
    computedChecked = selected && selected === computedValue;
  } else {
    throw new Error(`Type '${type}' is not supported`);
  }

  const item = (
    <Label className={labelClasses} check={!inline}>
      <Input type={type} {...attributes} disabled={disabled} value={computedValue} checked={computedChecked} />
      <span children={children} />
    </Label>
  );

  if (inline) {
    return item;
  } else {
    return (
      <FormGroup
        check
        color={color || state}
        disabled={disabled}
        children={item}
      />
    );
  }
};

export default FormChoice;
