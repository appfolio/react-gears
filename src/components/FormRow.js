import React from 'react';
import { FormGroup, Input, Label, Col, FormFeedback, FormText } from 'reactstrap';

const FormRow = props => {
  const {
    id,
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
  } else {
    content = (
      <Input
        id={id}
        state={color || state}
        type={type}
        children={React.Children.map(children, child => React.cloneElement(child, { type }))}
        {...attributes}
      />
    );
  }

  return (
    <FormGroup row color={color || state}>
      <Label for={id} sm={3}>
        { label }
        { required && label ? <span className="text-danger"> *</span> : null }
      </Label>
      <Col sm={9}>
        { content }
        { hint ? <FormText color="muted" children={hint} /> : null }
        { feedback ? <FormFeedback children={feedback} /> : null }
      </Col>
    </FormGroup>
  );
};

FormRow.propTypes = {
  label: React.PropTypes.string,
  hint: React.PropTypes.string,
  feedback: React.PropTypes.string,
  required: React.PropTypes.bool,
  type: React.PropTypes.string,
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
