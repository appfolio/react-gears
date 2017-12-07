import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import COUNTRIES from './address/Countries.js'; // TODO i18n country names based on locale

export default class CountryInput extends React.Component {
  static propTypes = {
    autoComplete: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
  };

  static defaultProps = {
    onChange: () => {}
  };

  render() {
    const {
      autoComplete,
      className,
      disabled,
      id,
      name,
      onChange,
      placeholder,
      ...props
    } = this.props;

    return (
      <Input
        type="select"
        {...props}
        className={className}
        disabled={disabled}
        id={id}
        name={name}
        onChange={e => onChange(e.target.value === '' ? null : e.target.value)}
        autoComplete={autoComplete ? 'country-name' : null}
      >
        <option value="">{placeholder}</option>
        {COUNTRIES.map(country => (
          <option value={country.value} key={country.value}>
            {country.label}
          </option>
        ))}
      </Input>
    );
  }
}
