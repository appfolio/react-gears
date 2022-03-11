import classname from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

let count = 0;

function getID() {
  return `form-choice-${count++}`;
}

class FormChoice extends React.Component {
  static propTypes = {
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    containerClassName: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio', 'select']),
    value: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.id = props.id || getID();
  }

  render() {
    /* eslint-disable-next-line  @typescript-eslint/no-unused-vars -- Let's figure out a better way to omit props for this scenario */
    const { id, inline, disabled, children, containerClassName, type, value, ...attributes } =
      this.props;

    if (type === 'select') {
      return (
        <option {...attributes} disabled={disabled} value={value}>
          {children}
        </option>
      );
    }

    const containerClasses = classname({ 'form-check-inline': inline }, containerClassName);

    const computedValue = value || children;

    const item = (
      <div className={containerClasses}>
        <Input
          id={this.id}
          type={type}
          {...attributes}
          disabled={disabled}
          value={computedValue}
          style={{ cursor: disabled && 'not-allowed' }}
        />
        <Label
          className="form-check-label"
          check={!inline}
          for={this.id}
          style={{ cursor: disabled && 'not-allowed' }}
        >
          {children}
        </Label>
      </div>
    );

    if (inline) {
      return item;
    }
    return (
      <FormGroup check disabled={disabled}>
        {item}
      </FormGroup>
    );
  }
}

export default FormChoice;
