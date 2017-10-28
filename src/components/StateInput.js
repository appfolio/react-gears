import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import STATES from './address/USStates.js'; // TODO Dynamic states based on country

export default class StateInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
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
        onChange={e => onChange(e.target.value === '' ? null : e.target.value)}
      >
        <option value="">{placeholder}</option>
        {STATES.map(state =>
          <option title={state.label} value={state.value} key={state.value}>{state.value}</option>)}
      </Input>
    );
  }
}
