import React from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

class FormChoice extends React.Component {
  static propTypes = {
    inline: PropTypes.bool,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    children: PropTypes.node,
    type: PropTypes.oneOf(['checkbox', 'radio', 'select']),
    value: PropTypes.any,
    selected: PropTypes.bool
  }
  render() {
    const {
      inline,
      disabled,
      checked,
      children,
      type,
      value,
      selected,
      ...attributes
    } = this.props;

    if (type === 'select') {
      return <option {...attributes} value={value}>{children}</option>;
    }

    const labelClasses = classname('form-check', { 'form-check-inline': inline });

    const computedValue = value || children;

    let computedChecked;

    if (type === 'checkbox') {
      computedChecked = selected && selected.indexOf(computedValue) > -1;
    } else if (type === 'radio') {
      computedChecked = selected && selected === computedValue;
    } else {
      throw new Error(`Type '${type}' is not supported`);
    }

    const item = (
      <div className={labelClasses} check={!inline}>
        <Input
          type={type}
          {...attributes}
          disabled={disabled}
          value={computedValue}
          checked={computedChecked}
          style={{ cursor: disabled && 'not-allowed' }}
        />
        <Label
          className="form-check-label"
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
