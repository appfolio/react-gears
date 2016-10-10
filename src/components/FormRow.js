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
    ...attributes
  } = props;

  return (
    <FormGroup row color={color || state}>
      <Label for={id} sm={3}>
        { label }
        { required && label ? <span className="text-danger"> *</span> : null }
      </Label>
      <Col sm={9}>
        <Input
          id={id}
          state={color || state}
          {...attributes}
        />
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
  required: React.PropTypes.bool
};

FormRow.defaultProps = {
  label: '',
  hint: '',
  feedback: '',
  required: false
};

export default FormRow;
