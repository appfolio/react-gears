import PropTypes from 'prop-types';
import React from 'react';
import Col from './Col';
import FormGroup from './FormGroup';
import FormText from './FormText';
import FormFeedback from './FormFeedback';
import Label from './Label';
import Required from './Required';
import Row from './Row';

const labelSizeTranslations = {
  sm: 2,
  md: 3,
  lg: 4
};

// Note:  `inline` has no effect at the moment.  In reactstrap 5 and later, this property appears
// to be relevant for the <FormGroup>, though.  As such, we may be able to simplify this class with
// the built-in support of inline forms in newer versions of reactstrap.
const FormLabelGroup = (props) => {
  const {
    children,
    color,
    feedback,
    inputId,
    hint,
    label,
    labelSize,
    required,
    rowClassName,
    size,
    stacked,
    width
  } = props;

  const rowColor = color || (feedback && 'danger');
  const labelAlignment = stacked ? '' : 'text-sm-right pr-0';
  const labelWidth = stacked ? 12 : (labelSizeTranslations[labelSize || 'md']);
  const inputWidth = (stacked || !label) ? 12 : (12 - labelWidth);

  return (
    <FormGroup row className={rowClassName} color={rowColor}>
      {label && (
        <Label for={inputId} sm={labelWidth} size={size} className={labelAlignment}>
          {label}
          {required && label ? <Required /> : null}
        </Label>
      )}
      <Col sm={inputWidth}>
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
  labelSize: PropTypes.oneOf([null, 'sm', 'md', 'lg']),
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
