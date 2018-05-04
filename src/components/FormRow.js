import PropTypes from 'prop-types';
import React from 'react';
import CheckboxInput from './CheckboxInput';
import Col from './Col';
import FileInput from './FileInput';
import FormFeedback from './FormFeedback';
import FormGroup from './FormGroup';
import FormText from './FormText';
import Input from './Input';
import Label from './Label';
import RadioInput from './RadioInput';
import Row from './Row';
import Required from './Required';
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

  // TODO this should use FormLabelGroup vs duplicated code here:
  return (
    <FormGroup
      row
      className={rowClassName}
      color={rowColor}
    >
      {label && (
        <Label for={id} sm={labelWidth} size={size} className={labelAlignment}>
          {label}
          {required && label ? <Required /> : null}
        </Label>
      )}
      <Col sm={inputContainerWidth}>
        <Row>
          <Col {...width}>
            <InputElement
              id={id}
              size={size}
              state={rowColor}
              type={typeof type === 'string' ? type : null}
              children={React.Children.map(children, child => React.cloneElement(child, { type }))}
              {...attributes}
              {...childFeedback}
            />
            {hint && <FormText color="muted">{hint}</FormText>}
            {baseFeedback && <FormFeedback>{baseFeedback}</FormFeedback>}
          </Col>
        </Row>
      </Col>
    </FormGroup>
  );
};

FormRow.propTypes = {
  label: PropTypes.node,
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
