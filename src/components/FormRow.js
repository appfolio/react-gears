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
    stacked,
    labelWidth,
    inputContainerWidth,
    width,
    ...attributes
  } = props;

  const InputElement = determineElement(type);

  const [baseFeedback, childFeedback] = parseFeedback(feedback);
  const rowColor = color || state || (baseFeedback && 'danger');

  const labelWidthNumber = stacked ? 12 : labelWidth;
  const labelAlignment = stacked ? '' : 'text-sm-right';

  const inputContainerWidthNumber = stacked ? 12 : inputContainerWidth;

  return (
    <FormGroup row color={rowColor}>
      <Label for={id} sm={labelWidthNumber} size={size} className={`pr-0 ${labelAlignment}`}>
        {required && label && !stacked ? <span className="text-danger">*&nbsp;</span> : null}
        {label}
        {required && label && stacked ? <span className="text-danger">&nbsp;*</span> : null}
      </Label>
      <Col sm={inputContainerWidthNumber}>
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
  inline: React.PropTypes.bool,
  stacked: React.PropTypes.bool,
  labelWidth: React.PropTypes.number,
  inputContainerWidth: React.PropTypes.number,
  width: React.PropTypes.object
};

FormRow.defaultProps = {
  label: '',
  hint: '',
  feedback: '',
  required: false,
  type: 'text',
  inline: false,
  stacked: false,
  labelWidth: 3,
  inputContainerWidth: 9,
  width: { xs: 12 }
};

export default FormRow;
