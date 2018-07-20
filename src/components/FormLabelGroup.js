import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
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
    feedback,
    inputId,
    hint,
    label,
    labelSize,
    required,
    rowClassName,
    size,
    stacked,
    validFeedback,
    width
  } = props;

  const containerClassNames = classnames({
    'is-invalid': feedback,
    'is-valid': validFeedback
  }, rowClassName);
  const labelClassNames = classnames({
    'text-sm-right pr-0': !stacked,
    'text-danger': feedback,
    'text-success': validFeedback
  });
  const hiddenClassNames = classnames({
    'is-invalid': feedback,
    'is-valid': validFeedback
  }, 'form-control');
  const labelWidth = stacked ? 12 : (labelSizeTranslations[labelSize || 'md']);
  const inputWidth = (stacked || !label) ? 12 : (12 - labelWidth);

  return (
    <FormGroup row className={containerClassNames}>
      {label && (
        <Label for={inputId} sm={labelWidth} size={size} className={labelClassNames}>
          {label}
          {required && label ? <Required /> : null}
        </Label>
      )}
      <Col sm={inputWidth}>
        <Row>
          <Col {...width}>
            {children}
            {(feedback || validFeedback) && <div className={hiddenClassNames} hidden />}
            {hint && <FormText color="muted">{hint}</FormText>}
            {feedback && <FormFeedback className="d-flex" >{feedback}</FormFeedback>}
            {validFeedback && <FormFeedback className="d-flex" valid>{validFeedback}</FormFeedback>}
          </Col>
        </Row>
      </Col>
    </FormGroup>
  );
};

FormLabelGroup.propTypes = {
  children: PropTypes.node.isRequired,
  feedback: PropTypes.node,
  inline: PropTypes.bool,
  inputId: PropTypes.string,
  hint: PropTypes.string,
  label: PropTypes.node,
  labelSize: PropTypes.oneOf([null, 'sm', 'md', 'lg']),
  required: PropTypes.bool,
  rowClassName: PropTypes.string,
  size: PropTypes.string,
  stacked: PropTypes.bool,
  validFeedback: PropTypes.node,
  width: PropTypes.object
};

FormLabelGroup.defaultProps = {
  inline: false,
  required: false,
  stacked: false,
  width: { xs: 12 }
};

export default FormLabelGroup;
