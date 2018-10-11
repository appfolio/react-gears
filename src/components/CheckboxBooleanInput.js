import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

class CheckboxBooleanInput extends React.Component {
  static propTypes = {
    checkboxLabel: PropTypes.node,
    className: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.bool
  };

  render() {
    const { checkboxLabel, className, onChange, value, id, ...inputProps } = this.props;
    const classNames = classnames('col-form-label d-flex align-items-center h-100', className);

    return (
      <FormGroup check className={classNames}>
        <Input
          id={id}
          {...inputProps}
          type="checkbox"
          checked={value}
          onChange={e => onChange && onChange(e.target.checked)}
          className="my-0"
        />
        {checkboxLabel && (
          <Label check for={id} className="my-0">
            {checkboxLabel}
          </Label>
        )}
      </FormGroup>
    );
  }
}

export default CheckboxBooleanInput;
