import PropTypes from 'prop-types';
import React from 'react';
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

function determineElement(type) {
  return typeof type === 'string' ? typeTranslations[type] || Input : type;
}

function inputType(type) {
  if (typeof type !== 'string') return null;
  if (type === 'static') return null;
  return type;
}

function parseFeedback(feedback) {
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

const FormRow = (props) => {
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

FormRow.propTypes = {
  children: PropTypes.node,
  feedback: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  hint: PropTypes.node,
  id: PropTypes.string,
  inline: PropTypes.bool,
  label: PropTypes.node,
  labelSize: PropTypes.string,
  required: PropTypes.bool,
  rowClassName: PropTypes.string,
  size: PropTypes.string,
  stacked: PropTypes.bool,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  validFeedback: PropTypes.node,
  width: PropTypes.object
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
};

export default FormRow;
