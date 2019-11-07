import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';

const DataList = ({ list, options, placeholder, ...props }) => {
  const [open, setOpen] = useState(false);
  const input = useRef(null);

  return (
    <InputGroup>
      <Input
        list={list}
        ref={input}
        placeholder={placeholder}
        onBlur={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        type="search"
        {...props}
      />
      <datalist id={list}>
        {options.map(value => (
          <option value={value} />
        ))}
      </datalist>
      <InputGroupAddon addonType="append">
        <Button
          color="secondary"
          className="px-2"
          onClick={() => {
            if (!open) {
              input.current.focus();
              input.current.select();
            }
          }}
        >
          <Icon name={open ? 'caret-up' : 'caret-down'} fixedWidth />
        </Button>
      </InputGroupAddon>
    </InputGroup>
  );
};

DataList.propTypes = {
  list: PropTypes.string.isRequired,
  options: PropTypes.oneOf([PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.string
};

export default DataList;
