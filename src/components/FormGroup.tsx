import React from 'react';
import { FormGroup } from 'reactstrap';
import classnames from 'classnames';

export default (props: any) => {
  let className = 'form-group';
  if (props.className) {
    // Need form-group for property tests compatibility
    className = classnames(props.className, 'form-group');
  }

  return (
    <FormGroup {...props} className={className} />
  );
};
