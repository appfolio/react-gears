import classnames from 'classnames';
import React from 'react';
import Label from '../Label/Label';
import Col from '../Layout/Col';
import Required from './components/Required';
import FormFeedback from './FormFeedback';
import FormGroup from './FormGroup';
import FormText from './FormText';

const labelSizeTranslations = {
  sm: 2,
  md: 3,
  lg: 4,
};

const defaultProps = {
  labelSize: 'md' as const,
  width: { xs: 12 },
};

type FormLabelGroupProps = React.PropsWithChildren<{
  feedback?: React.ReactNode;
  hint?: React.ReactNode;
  inline?: boolean;
  inputId?: string;
  label?: React.ReactNode;
  labelSize?: keyof typeof labelSizeTranslations;
  required?: boolean;
  rowClassName?: string;
  size?: string;
  srLabel?: boolean;
  stacked?: boolean;
  validFeedback?: React.ReactNode;
  width?: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
}>;

function FormLabelGroup({
  children,
  feedback,
  hint,
  inline,
  inputId,
  label,
  labelSize = defaultProps.labelSize,
  required,
  rowClassName,
  size,
  srLabel,
  stacked,
  validFeedback,
  width = defaultProps.width,
}: FormLabelGroupProps) {
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
  const labelWidth = stacked ? 12 : labelSizeTranslations[labelSize];
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
    <FormGroup inline={inline} row className={containerClassNames}>
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

export default FormLabelGroup;
