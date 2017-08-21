import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, Input, Label, Col, Row, FormFeedback, FormText } from 'reactstrap';

import CheckboxInput from './CheckboxInput';
import RadioInput from './RadioInput';
import StaticInput from './StaticInput';
import FileInput from './FileInput';

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

const FormRow = props => {
  const {
    children,
    color,
    feedback,
    hint,
    id,
    inline,
    label,
    required,
    rowClassName,
    size,
    stacked,
    state,
    type,
    width,
    ...attributes
  } = props;

  const InputElement = determineElement(type);

  const [baseFeedback, childFeedback] = parseFeedback(feedback);
  const rowColor = color || state || (baseFeedback && 'danger');

  const labelWidth = stacked ? 12 : 3;
  const labelAlignment = stacked ? '' : 'text-sm-right';

  const inputContainerWidth = stacked ? 12 : 9;

  return (
    <FormGroup
      row
      className={rowClassName}
      color={rowColor}
    >
      {label && (
        <Label for={id} sm={labelWidth} size={size} className={labelAlignment}>
          {label}
          {required && label ? <span className="text-danger">&nbsp;*</span> : null}
        </Label>
      )}
      <Col sm={inputContainerWidth}>
        <Row>
          <Col {...width} >
            <InputElement
              id={id}
              size={size}
              state={rowColor}
              type={type}
              children={React.Children.map(children, child => React.cloneElement(child, { type }))}
              {...attributes}
              {...childFeedback}
            />
          </Col>
        </Row>
        {hint ? <FormText color="muted" children={hint} /> : null}
        {baseFeedback ? <FormFeedback children={baseFeedback} /> : null}
      </Col>
    </FormGroup>
  );
};

FormRow.propTypes = {
  label: PropTypes.string,
  hint: PropTypes.string,
  feedback: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  required: PropTypes.bool,
  rowClassName: PropTypes.string,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func
  ]),
  inline: PropTypes.bool,
  stacked: PropTypes.bool,
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
  type: 'text',
  width: { xs: 12 }
};

export default FormRow;
