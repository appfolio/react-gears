import classnames from 'classnames';
import React from 'react';
import { FormGroup as RSFormGroup } from 'reactstrap';

// ref
const FormGroup = (props: any) => {
  let className = 'form-group';
  if (props.className) {
    // Need form-group for property tests compatibility
    className = classnames(props.className, 'form-group');
  }

  return <RSFormGroup {...props} className={className} />;
};

export default FormGroup;
