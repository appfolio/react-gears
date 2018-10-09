import PropTypes from 'prop-types';
import React from 'react';
import { warnOnce } from 'reactstrap/lib/utils';
import FormLabelGroup from './FormLabelGroup';
import Label from './Label';

const ValidatedFormGroup = ({ children, error, label, labelTag: Tag, ...props }) => {
  warnOnce('The "ValidatedFormGroup" component has been deprecated.\nPlease use component "FormLabelGroup".');
  return (
    <FormLabelGroup
      label={label}
      feedback={error}
      {...props}
    >
      {children}
    </FormLabelGroup>
  );
};

export default ValidatedFormGroup;

ValidatedFormGroup.defaultProps = {
  children: [],
  error: null,
  labelTag: Label,
};
ValidatedFormGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
  label: PropTypes.node,
  labelTag: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.string
  ]),
};
