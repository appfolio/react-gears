import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from './Input';
import US from './address/USStates';
import CA from './address/CAProvinces';

const STATES_LOOKUP = {
  CA,
  US
};

export default class StateInput extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    countries: PropTypes.arrayOf(PropTypes.string),
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string
  }

  static defaultProps = {
    countries: ['US'],
    onChange: () => {}
  }

  render() {
    const {
      className,
      countries,
      disabled,
      id,
      name,
      onChange,
      placeholder,
      ...props
    } = this.props;

    const classNames = classnames('custom-select', className);

    const STATES = countries.reduce((result, country) => {
      const states = STATES_LOOKUP[country] || [];
      return [...result, ...states];
    }, []);

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
        {STATES.map(state =>
          <option title={state.label} value={state.value} key={state.value}>{state.value}</option>)}
      </Input>
    );
  }
}
