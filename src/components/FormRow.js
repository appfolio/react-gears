import React from 'react';
import { FormGroup, Input, Label, Col, FormFeedback, FormText } from 'reactstrap';

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

  let content;

  if (type === 'radio' || type === 'checkbox') {
    content = React.Children.map(children, child => React.cloneElement(child, {
      type,
      inline,
      ...attributes
    }));
  } else if (type === 'static') {
    content = (
      <Input
        static
        id={id}
        children={props.value || props.defaultValue}
        size={size}
        state={color || state}
        {...attributes}
      />
    );
  } else {
    const InputElement = (typeof type === 'string') ? Input : type;
    content = (
      <InputElement
        id={id}
        size={size}
        state={color || state}
        type={type}
        children={React.Children.map(children, child => React.cloneElement(child, { type }))}
        {...attributes}
      />
    );
  }

  return (
    <FormGroup row color={color || state}>
      <Label for={id} sm={3} size={size}>
        {label}
        {required && label ? <span className="text-danger"> *</span> : null}
      </Label>
      <Col sm={9}>
        {content}
        {hint ? <FormText color="muted" children={hint} /> : null}
        {feedback ? <FormFeedback children={feedback} /> : null}
      </Col>
    </FormGroup>
  );
};

FormRow.propTypes = {
  label: React.PropTypes.string,
  hint: React.PropTypes.string,
  feedback: React.PropTypes.string,
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
