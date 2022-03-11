import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

let count = 0;

function getID() {
  return `checkbox-boolean-input-${count++}`;
}

class CheckboxBooleanInput extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    checkboxLabel: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool,
  };

  constructor(props) {
    super(props);

    this.id = props.id || getID();
  }

  render() {
    const { checkboxLabel, className, onChange, value, ...inputProps } = this.props;
    const classNames = classnames('pt-2', className);

    return (
      <FormGroup check className={classNames}>
        <Input
          id={this.id}
          {...inputProps}
          type="checkbox"
          checked={value}
          onChange={(e) => onChange && onChange(e.target.checked)}
        />
        {checkboxLabel && (
          <Label check for={this.id}>
            {checkboxLabel}
          </Label>
        )}
      </FormGroup>
    );
  }
}

export default CheckboxBooleanInput;
