import classnames from 'classnames';
import React, { useState, useRef } from 'react';
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
  valueComponent,
  ...props
}) => {
  const [value, setValue] = useState(props.value || defaultValue);

  // Store last props.value and call setValue when it changes.
  // This is not correct behavior for controlled components but consumers rely on it.
  const lastPropsValue = useRef(props.value);
  if (!Object.is(props.value, lastPropsValue.current)) {
    lastPropsValue.current = props.value;
    setValue(props.value);
  }

  const onChange = (newValue) => {
    setValue(newValue);
    props.onChange?.(newValue);
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
      optionComponent={Option}
      valueComponent={valueComponentRenderer}
      {...props}
      onChange={onChange}
      value={props.value || value}
    />
  );
};

Select.displayName = 'Select';

export default Select;
