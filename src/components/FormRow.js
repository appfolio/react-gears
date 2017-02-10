import React from 'react';
import { FormGroup, Input, Label, Col, FormFeedback, FormText } from 'reactstrap';

import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import StaticInput from './StaticInput';

const typeTranslations = {
  checkbox: CheckboxInput,
  radio: RadioInput,
  static: StaticInput
};

function determineElement(type) {
  return (typeof type === 'string') ?
    typeTranslations[type] || Input :
    type;
}

function parseFeedback(feedback) {
  return typeof feedback === 'object' ?
    [ null, { error: feedback } ] :
    [ feedback, {} ];
}

const FormRow = props => {
  const {
    id,
    size,
    label,
    color,
    state,
    hint,
    feedback,
    required,
    type,
    children,
    inline,
    ...attributes
  } = props;

  const InputElement = determineElement(type);

  const [ baseFeedback, childFeedback ]= parseFeedback(feedback);
  const rowColor = color || state || (baseFeedback && 'danger');

  return (
    <FormGroup row color={rowColor}>
      <Label for={id} sm={3} size={size}>
        {label}
        {required && label ? <span className="text-danger"> *</span> : null}
      </Label>
      <Col sm={9}>
        <InputElement
          id={id}
          size={size}
          state={rowColor}
          type={type}
          children={React.Children.map(children, child => React.cloneElement(child, { type }))}
          {...attributes}
          {...childFeedback}
        />
        {hint ? <FormText color="muted" children={hint} /> : null}
        {baseFeedback ? <FormFeedback children={baseFeedback} /> : null}
      </Col>
    </FormGroup>
  );
};

FormRow.propTypes = {
  label: React.PropTypes.string,
  hint: React.PropTypes.string,
  feedback: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.object
  ]),
  required: React.PropTypes.bool,
  type: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.element,
    React.PropTypes.func
  ]),
  inline: React.PropTypes.bool
};

FormRow.defaultProps = {
  label: '',
  hint: '',
  feedback: '',
  required: false,
  type: 'text',
  inline: false
};

export default FormRow;
