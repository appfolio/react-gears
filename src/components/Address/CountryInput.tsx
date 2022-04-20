import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { type FC } from 'react';
import { type InputProps } from 'reactstrap';
import Input from '../Input/Input';
import COUNTRIES from './util/Countries'; // TODO i18n country names based on locale

interface CountryInputProps extends Omit<InputProps, 'type' | 'onChange'> {
  onChange?: (value: string) => void;
  placeholder?: string;
  value?: string;
}

const defaultProps = {
  onChange: () => {},
};

const CountryInput: FC<CountryInputProps> = ({
  onChange = defaultProps.onChange,
  ...otherProps
}) => {
  const { className, disabled, id, name, placeholder, ...props } = otherProps;

  const classNames = classnames('custom-select', className);

  return (
    <Input
      type="select"
      {...props}
      className={classNames}
      disabled={disabled}
      id={id}
      name={name}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="">{placeholder}</option>
      {COUNTRIES.map((country) => (
        <option value={country.value} key={country.value}>
          {country.label}
        </option>
      ))}
    </Input>
  );
};

CountryInput.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

CountryInput.defaultProps = defaultProps;

CountryInput.displayName = 'CountryInput';

export default CountryInput;
