import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactSelect from 'react-select-plus';
import Close from '../Button/Close';
import SelectArrow from './SelectArrow';
import SelectMultiValue from './SelectMultiValue';
import Option from './SelectOption.js';

const getSelectArrow = (isOpen, arrowRenderer) => (
  <SelectArrow isOpen={isOpen} render={arrowRenderer} />
);

const getCloseButton = () => (
  <Close className="d-flex" tabIndex={-1} style={{ fontSize: '.5rem' }} />
);

const Select = ({
  arrowRenderer,
  className,
  defaultValue,
  inputProps,
  onChange: propsOnChange,
  value: propsValue,
  valueComponent,
  ...props
}) => {
  const valueNotSet = typeof propsValue === 'undefined';
  const [value, setValue] = useState(valueNotSet ? defaultValue : propsValue);

  if (!valueNotSet && !Object.is(propsValue, value)) {
    setValue(propsValue);
  }

  const onChange = (newValue) => {
    setValue(newValue);
    propsOnChange?.(newValue);
  };

  let SelectElement = ReactSelect;
  if (props.loadOptions && props.creatable) {
    SelectElement = ReactSelect.AsyncCreatable;
  } else if (props.loadOptions) {
    SelectElement = ReactSelect.Async;
  } else if (props.creatable) {
    SelectElement = ReactSelect.Creatable;
  }
  const classNames = classnames(className, { 'select-async': props.loadOptions });
  const valueComponentRenderer = valueComponent || (props.multi ? SelectMultiValue : undefined);

  return (
    <SelectElement
      arrowRenderer={({ isOpen }) => getSelectArrow(isOpen, arrowRenderer)}
      className={classNames}
      clearRenderer={getCloseButton}
      inputProps={{ name: props.name, ...inputProps }}
      onChange={onChange}
      optionComponent={Option}
      value={value}
      valueComponent={valueComponentRenderer}
      {...props}
    />
  );
};

Select.propTypes = {
  defaultValue: PropTypes.any,
  ...ReactSelect.propTypes,
};
Select.displayName = 'Select';

export default Select;
