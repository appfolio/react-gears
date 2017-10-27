import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

// TODO Dynamic states based on country:
import states from './address/USStates.js';

const US_STATES = states.map(state => ({
  label: state.value,
  value: state.value
}));

export default class StateInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    country: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    country: 'US',
    onChange: () => {}
  }

  render() {
    const {
      className,
      country,
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
        {US_STATES.map(state =>
          <option value={state.value} key={state.value}>{state.label}</option>)}
      </Input>
    );
  }
}