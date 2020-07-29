import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Input from './Input';
import US from './address/USStates';
import CA from './address/CAProvinces';

const STATES_LOOKUP: {
  [key: string]: { label: string, value: string }[] | undefined
  'US': { label: string, value: string }[],
  'CA': { label: string, value: string }[],
} = {
  CA,
  US
};

type StateInputProps = {
  className?: string,
  countries?: string[],
  disabled?: boolean,
  id?: string,
  name?: string,
  onChange?: (value: string | null) => any,
  placeholder?: string,
  value?: string,
}

const defaultProps = {
  countries: ['US'],
  onChange: () => {},
};

const StateInput: React.FunctionComponent<StateInputProps> = ({
  className,
  countries = defaultProps.countries,
  disabled,
  id,
  name,
  onChange = defaultProps.onChange,
  placeholder,
  ...props
}) => {
  const classNames = classnames('custom-select', className);

  const STATES = countries.reduce((result, country) => {
    const states = STATES_LOOKUP[country] || [];
    return [...result, ...states];
  }, [] as { label: string, value: string }[]);

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
};

StateInput.propTypes = {
  className: PropTypes.string,
  countries: PropTypes.arrayOf(PropTypes.string.isRequired),
  disabled: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

StateInput.defaultProps = defaultProps;

export default StateInput;
