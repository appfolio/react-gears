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
  return (typeof type === 'string') ?
    typeTranslations[type] || Input :
    type;
}

function parseFeedback(feedback) {
  return typeof feedback === 'object' ?
    [null, { error: feedback }] :
    [feedback, {}];
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

  const [baseFeedback, childFeedback] = parseFeedback(feedback);

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
        type={typeof type === 'string' ? type : null}
        valid={!!validFeedback}
        invalid={!!feedback}
        children={React.Children.map(children, child => React.cloneElement(child, { type }))}
        {...attributes}
        {...childFeedback}
      />
    </FormLabelGroup>
  );
};

FormRow.propTypes = {
  children: PropTypes.node,
  feedback: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.object
  ]),
  hint: PropTypes.string,
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
