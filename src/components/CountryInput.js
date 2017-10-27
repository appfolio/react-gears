import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import COUNTRIES from './address/Countries.js';

export default class CountryInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    locale: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    onChange: () => {}
  }

  render() {
    const {
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
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      >
        {COUNTRIES.map(country =>
          <option value={country.value} key={country.value}>{country.label}</option>)}
      </Input>
    );
  }
}
