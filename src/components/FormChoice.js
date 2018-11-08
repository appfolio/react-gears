import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

let count = 0;

function getID() {
  return `form-choice-${count++}`; // eslint-disable-line no-plusplus
}

class FormChoice extends React.Component {
  static propTypes = {
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    id: PropTypes.string,
    type: PropTypes.oneOf(['checkbox', 'radio', 'select']),
    value: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.id = props.id || getID();
  }

  render() {
    const {
      id,
      inline,
      disabled,
      children,
      type,
      value,
      ...attributes
    } = this.props;

    if (type === 'select') {
      return <option {...attributes} value={value}>{children}</option>;
    }

    const labelClasses = classname('form-check', { 'form-check-inline': inline });

    const computedValue = value || children;

    if (type !== 'checkbox' && type !== 'radio') {
      throw new Error(`Type '${type}' is not supported`);
    }

    const item = (
      <div className={labelClasses} check={!inline}>
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
      <FormGroup
        check
        disabled={disabled}
      >
        {item}
      </FormGroup>
    );
  }
}

export default FormChoice;
