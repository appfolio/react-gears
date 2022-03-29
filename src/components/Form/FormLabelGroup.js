import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Label from '../Label/Label';
import Col from '../Layout/Col';
import FormFeedback from './FormFeedback';
import FormGroup from './FormGroup';
import FormText from './FormText';
import Required from './components/Required';

const labelSizeTranslations = {
  sm: 2,
  md: 3,
  lg: 4,
};

// Note:  `inline` has no effect at the moment.  In reactstrap 5 and later, this property appears
// to be relevant for the <FormGroup>, though.  As such, we may be able to simplify this class with
// the built-in support of inline forms in newer versions of reactstrap.
class FormLabelGroup extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    feedback: PropTypes.node,
    hint: PropTypes.node,
    inline: PropTypes.bool,
    inputId: PropTypes.string,
    label: PropTypes.node,
    labelSize: PropTypes.oneOf([null, 'sm', 'md', 'lg']),
    required: PropTypes.bool,
    rowClassName: PropTypes.string,
    size: PropTypes.string,
    srLabel: PropTypes.bool,
    stacked: PropTypes.bool,
    validFeedback: PropTypes.node,
    width: PropTypes.object,
  };

  static defaultProps = {
    inline: false,
    required: false,
    srLabel: false,
    stacked: false,
    width: { xs: 12 },
  };

  render() {
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
      srLabel,
      stacked,
      validFeedback,
      width,
    } = this.props;

    const containerClassNames = classnames(
      {
        'is-invalid': feedback,
        'is-valid': validFeedback,
      },
      rowClassName
    );
    const labelClassNames = classnames({
      'text-sm-end pe-0': !stacked,
      'text-danger': feedback,
      'text-success': validFeedback,
      'visually-hidden visually-hidden-focusable': srLabel,
    });
    const hiddenClassNames = classnames(
      {
        'is-invalid': feedback,
        'is-valid': validFeedback,
      },
      'form-control'
    );
    const labelWidth = stacked ? 12 : labelSizeTranslations[labelSize || 'md'];
    const inputWidth = stacked || !label ? 12 : 12 - labelWidth;
    const valueWidth = stacked
      ? width
      : {
          xs: width.xs,
          sm: width.sm ? Math.min(inputWidth, width.sm) : inputWidth,
          md: width.md ? Math.min(inputWidth, width.md) : undefined,
          lg: width.lg ? Math.min(inputWidth, width.lg) : undefined,
          xl: width.xl ? Math.min(inputWidth, width.xl) : undefined,
        };

    return (
      <FormGroup row className={containerClassNames}>
        {label && (
          <Label for={inputId} sm={labelWidth} size={size} className={labelClassNames}>
            {label}
            {required && label ? <Required /> : null}
          </Label>
        )}
        <Col {...valueWidth}>
          {children}
          {(feedback || validFeedback) && <div className={hiddenClassNames} hidden />}
          {hint && <FormText color="muted">{hint}</FormText>}
          {feedback && <FormFeedback className="d-flex">{feedback}</FormFeedback>}
          {validFeedback && (
            <FormFeedback className="d-flex" valid>
              {validFeedback}
            </FormFeedback>
          )}
        </Col>
      </FormGroup>
    );
  }
}

export default FormLabelGroup;
