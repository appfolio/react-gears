import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
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
    value: PropTypes.string,
    additionalStates: PropTypes.arrayOf(
      PropTypes.shape({
        label: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
      })
    )
  }

  static defaultProps = {
    onChange: () => {}
  }

  get states() {
    const { additionalStates } = this.props;

    if (additionalStates) {
      return STATES.concat(additionalStates);
    }

    return STATES;
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

    const classNames = classnames('custom-select', className);

    return (
      <Input
        type="select"
        {...props}
        className={classNames}
        disabled={disabled}
        id={id}
        name={name}
        onChange={e => onChange(e.target.value === '' ? null : e.target.value)}
      >
        <option value="">{placeholder}</option>
        {this.states.map(state =>
          <option title={state.label} value={state.value} key={state.value}>{state.value}</option>)}
      </Input>
    );
  }
}
