import PropTypes from 'prop-types';
import React from 'react';
import Col from './Col';
import FormGroup from './FormGroup';
import FormText from './FormText';
import FormFeedback from './FormFeedback';
import Label from './Label';
import Required from './Required';
import Row from './Row';

const FormLabelGroup = (props) => {
  const {
    children,
    color,
    feedback,
    inputId,
    hint,
    label,
    required,
    rowClassName,
    size,
    stacked,
    width
  } = props;

  const rowColor = color || (feedback && 'danger');
  const labelWidth = stacked ? 12 : 3;
  const labelAlignment = stacked ? '' : 'text-sm-right';
  const inputContainerWidth = stacked ? 12 : 9;

  return (
    <FormGroup row className={rowClassName} color={rowColor}>
      {label && (
        <Label for={inputId} sm={labelWidth} size={size} className={labelAlignment}>
          {label}
          {required && label ? <Required /> : null}
        </Label>
      )}
      <Col sm={inputContainerWidth}>
        <Row>
          <Col {...width}>
            {children}
            {hint && <FormText color="muted">{hint}</FormText>}
            {feedback && <FormFeedback>{feedback}</FormFeedback>}
          </Col>
        </Row>
      </Col>
    </FormGroup>
  );
};

FormLabelGroup.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  feedback: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  inline: PropTypes.bool,
  inputId: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.node,
  required: PropTypes.bool,
  rowClassName: PropTypes.string,
  size: PropTypes.string,
  stacked: PropTypes.bool,
  width: PropTypes.object
};

FormLabelGroup.defaultProps = {
  inline: false,
  required: false,
  stacked: false,
  width: { xs: 12 }
};

export default FormLabelGroup;
