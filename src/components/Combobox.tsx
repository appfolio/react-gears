import React, { useEffect, useState, useRef, FunctionComponent, ReactNode } from 'react';
import { DropdownProps, InputProps } from 'reactstrap';
import Button from './Button';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';

type Direction =
  | "up"
  | "down"
  | "left"
  | "right";

type Option = {
  label: string;
  value: any
}

interface ComboboxProps extends InputProps {
  direction?: Direction;
  dropdownProps?: DropdownProps;
  noResultsLabel?: string;
  onChange: (value: any) => void;
  options: Option[];
  filterOptions: (options: Option[], value: any) => Option[];
  isSelected: (option: Option, value: any) => boolean;
  renderInputValue: (option: Option) => string;
  renderOption: (option: Option) => ReactNode;
}

const Combobox: FunctionComponent<ComboboxProps>= ({
  className, direction, disabled, dropdownProps, noResultsLabel, onChange, options, placeholder, value,
  filterOptions, isSelected, renderInputValue, renderOption,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(value || '');
  const dropdown = useRef<any>(null);
  const input = useRef(null);
  const visibleOptions = filterOptions(options, inputValue);

  useEffect(() => {
    const matchingOption = options.find(option => option.value === value);
    setInputValue(matchingOption ? renderInputValue(matchingOption) : '');
  }, [value]);

  useEffect(() => {
    const matchingOption = options.find(option => option.label === inputValue);
    // TODO 4 options:
    onChange(matchingOption ? matchingOption.value : null); // Matching or Null if no matching
    // if (matchingOption) onChange(matchingOption.value);  // Matching only
    // onChange(matchingOption ? matchingOption.value : inputValue); // Matching or inputValue if no matching
    // call onSelect from menu, maybe on enter when one choice
  }, [inputValue]);

  // TODO support enter to pick when one choice
  // TODO arrow down to dropdown from input
  // TODO select all when click from blurred
  // TODO instead onSelect when clicked/enter?  onChange, value, etc can be passthrough?

  return (
    <Dropdown
      direction={direction}
      isOpen={!disabled && open}
      toggle={() => {}}
      onBlur={() => setOpen(false)}
    >
      <DropdownToggle tag="div" disabled={disabled}>
        <InputGroup className={className}>
          <Input
            disabled={disabled}
            ref={input}
            placeholder={placeholder}
            onFocus={() => setOpen(true)}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                console.log(dropdown)
                // console.log(dropdown.current)
                dropdown!.current!.focus();
              }
            }}
            type="search"
            value={inputValue}
            {...props}
          />
          <InputGroupAddon addonType="append">
            <Button
              className="px-2"
              disabled={disabled}
              active={open}
              onClick={() => setOpen(!open)}
              type="button"
              tabIndex={-1}
            >
              <Icon name={open ? 'caret-up' : 'caret-down'} fixedWidth />
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </DropdownToggle>
      <DropdownMenu
        className="p-0 w-100"
        style={{
          maxHeight: '12rem',
          overflowY: 'auto'
        }}
        {...dropdownProps}
      >
        {visibleOptions
          .map((option, i) => (
            <DropdownItem
              key={option.value}
              active={isSelected(option, inputValue)}
              onMouseDown={() => { setInputValue(option.label); setOpen(false); }}
              ref={i === 0 ? dropdown : null}
            >
              {renderOption(option)}
            </DropdownItem>
          ))}
        {visibleOptions.length === 0 && (
          <DropdownItem disabled>
            {noResultsLabel}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

Combobox.displayName = 'Combobox';

Combobox.defaultProps = {
  noResultsLabel: 'No Results Found',
  onChange: () => {},
  filterOptions: (options: Option[], value: any) => options.filter(option => value ? option.label.toLowerCase().indexOf(value.toLowerCase()) === 0 : true),
  isSelected: (option: Option, value: any) => value === option.label,
  renderInputValue: (option: Option) => option.label,
  renderOption: (option: Option) => option.label
};

export default Combobox;
