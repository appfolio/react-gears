import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

let count = 0;

function getID() {
  return `checkbox-boolean-input-${count++}`; // eslint-disable-line no-plusplus
}

class CheckboxBooleanInput extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    checkboxLabel: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.id = props.id || getID();
  }

  render() {
    const { checkboxLabel, className, onChange, value, ...inputProps } = this.props;
    const classNames = classnames('col-form-label d-flex align-items-center h-100', className);

    return (
      <FormGroup check className={classNames}>
        <Input
          id={this.id}
          {...inputProps}
          type="checkbox"
          checked={value}
          onChange={e => onChange && onChange(e.target.checked)}
          className="my-0"
        />
        {checkboxLabel && (
          <Label check for={this.id} className="my-0">
            {checkboxLabel}
          </Label>
        )}
      </FormGroup>
    );
  }
}

export default CheckboxBooleanInput;
