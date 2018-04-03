import PropTypes from 'prop-types';
import React from 'react';
import Col from './Col';
import FormGroup from './FormGroup';
import Label from './Label';
import Row from './Row';

const FormLabelGroup = props => {
  const {
    children,
    color,
    inputId,
    invalid,
    label,
    required,
    rowClassName,
    stacked,
  } = props;

  const rowColor = color || (invalid && 'danger');
  const labelWidth = stacked ? 12 : 3;
  const labelAlignment = stacked ? '' : 'text-sm-right';
  const inputContainerWidth = stacked ? 12 : 9;

  return (
    <FormGroup row className={rowClassName} color={rowColor}>
      {label && (
        <Label for={inputId} sm={labelWidth} className={labelAlignment}>
          {label}
          {required && label ? <span className="text-danger">&nbsp;*</span> : null}
        </Label>
      )}
      <Col sm={inputContainerWidth}>
        <Row>
          {children}
        </Row>
      </Col>
    </FormGroup>
  );
};

FormLabelGroup.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  inputId: PropTypes.string,
  invalid: PropTypes.bool,
  label: PropTypes.node,
  required: PropTypes.bool,
  rowClassName: PropTypes.string,
  stacked: PropTypes.bool,
};

FormLabelGroup.defaultProps = {
  invalid: false,
};

export default FormLabelGroup;
