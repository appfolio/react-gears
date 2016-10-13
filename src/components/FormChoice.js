import React from 'react';
import classname from 'classnames';
import { FormGroup, Input, Label } from 'reactstrap';

const FormChoice = props => {
  const {
    inline,
    color,
    state,
    disabled,
    children,
    type,
    ...attributes
  } = props;

  const labelClasses = classname({ 'form-check-inline': inline });
  const item = (
    <Label className={labelClasses} check={!inline}>
      <Input type={type} {...attributes} disabled={disabled} />
      <span children={children} />
    </Label>
  );

  if (type === 'select') {
    return <option {...attributes} children={children} />;
  } else if (inline) {
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
