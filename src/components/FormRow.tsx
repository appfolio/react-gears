import PropTypes from 'prop-types';
import React, { FunctionComponent } from 'react';
import CheckboxInput from './CheckboxInput';
import FileInput from './FileInput';
import FormLabelGroup from './FormLabelGroup';
import Input from './Input';
import RadioInput from './RadioInput';
import StaticInput from './StaticInput';

const typeTranslations = {
  checkbox: CheckboxInput,
  radio: RadioInput,
  static: StaticInput,
  file: FileInput
};

function determineElement(type: any) {
  return typeof type === 'string' ? typeTranslations[type] || Input : type;
}

function inputType(type: any) {
  if (typeof type !== 'string') return null;
  if (type === 'static') return null;
  return type;
}

function parseFeedback(feedback: any) {
  return typeof feedback === 'object'
    ? [null, { error: feedback }]
    : [feedback, {}];
}

function sanitizeProps(component, props) {
  if (!component.propTypes) return props;
  const saneProps = {};
  Object.entries(props).forEach(([k, v]) => {
    if (component.propTypes[k]) saneProps[k] = v;
  });
  return saneProps;
}

interface FormRowPropTypes extends 
  Omit<React.HTMLAttributes<HTMLInputElement>, 'id'>{
  children?: ReactNode;
  label?: ReactNode;
  labelSize?: string;
  hint?: string;
  feedback?: any;
  id?: string;
  required?: boolean;
  rowClassName?: string;
  type?: any;
  inline?: boolean;
  stacked?: boolean;
  size?: string;
  validFeedback?: ReactNode;
  width?: {
    size?: boolean | number | string
    push?: string | number
    pull?: string | number
    offset?: string | number
  }
}

const FormRow: FunctionComponent<FormRowPropTypes> = (props) => {
  const {
    children,
    feedback,
    hint,
    id,
    inline,
    label,
    labelSize,
    required,
    rowClassName,
    size,
    stacked,
    type,
    validFeedback,
    width,
    ...attributes
  } = props;

  const InputElement = determineElement(type);
  const inputElementType = inputType(type);
  const [baseFeedback, childFeedback] = parseFeedback(feedback);
  const shouldPassChildren = (
    inputElementType === 'checkbox' ||
    inputElementType === 'radio' ||
    inputElementType === 'select'
  );

  const validityThings = sanitizeProps(InputElement, {
    valid: !!validFeedback,
    invalid: !!feedback
  });

  return (
    <FormLabelGroup
      feedback={baseFeedback}
      hint={hint}
      inline={inline}
      inputId={id}
      label={label}
      labelSize={labelSize}
      required={required}
      rowClassName={rowClassName}
      size={size}
      stacked={stacked}
      validFeedback={validFeedback}
      width={width}
    >
      <InputElement
        id={id}
        size={size}
        type={inputElementType}
        {...validityThings}
        {...attributes}
        {...childFeedback}
      >
        {shouldPassChildren ? React.Children.map(children, child =>
          React.cloneElement(child, { type: inputElementType })
        ) : undefined}
      </InputElement>
    </FormLabelGroup>
  );
};

FormRow.defaultProps = {
  feedback: '',
  hint: '',
  inline: false,
  label: '',
  required: false,
  rowClassName: '',
  stacked: false,
  type: 'text'
} as Partial<FormRowPropTypes>;

export default FormRow;
