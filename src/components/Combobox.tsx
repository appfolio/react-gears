import React, { useEffect, useState, useRef, FunctionComponent, ReactNode } from 'react';
import { findDOMNode } from 'react-dom';
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
  const [visibleOptions, setVisibleOptions] = useState<Option[]>([]);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(0);

  const dropdownMenu = useRef(null);
  const focusedOption = useRef(null);
  const input = useRef(null);

  useEffect(() => {
    if (visibleOptions.length > 0) {
      setFocusedOptionIndex(0)
    }
  }, [visibleOptions]);

  useEffect(() => {
    const matchingOption = options.find(option => option.value === value);
    setInputValue(matchingOption ? renderInputValue(matchingOption) : '');
  }, [value]);

  useEffect(() => {
    setVisibleOptions(filterOptions(options, inputValue));
    const matchingOption = options.find(option => option.label === inputValue);
    // TODO 4 options:
    onChange(matchingOption ? matchingOption.value : null); // Matching or Null if no matching
    // if (matchingOption) onChange(matchingOption.value);  // Matching only
    // onChange(matchingOption ? matchingOption.value : inputValue); // Matching or inputValue if no matching
    // call onSelect from menu, maybe on enter when one choice
  }, [inputValue]);

  useEffect(() => {
    window.addEventListener('keydown', onKeyPress);

    return () => {
      window.removeEventListener('keydown', onKeyPress);
    };
  });

  const scrollFocusedOptionIntoView = () => {
    if (dropdownMenu === null) return;
    const focusedOptionNode = findDOMNode(focusedOption.current) as HTMLElement;
    const menuNode = findDOMNode(dropdownMenu.current) as HTMLElement;

    if (focusedOptionNode === null || menuNode === null) return;

    const scrollTop = menuNode.scrollTop;
    const scrollBottom = scrollTop + menuNode.offsetHeight;
    const optionTop = focusedOptionNode.offsetTop;
    const optionBottom = optionTop + focusedOptionNode.offsetHeight;

    if (scrollTop > optionTop) {
      menuNode.scrollTop = menuNode.scrollTop - focusedOptionNode.offsetHeight;
    } else if (scrollBottom < optionBottom) {
      menuNode.scrollTop = menuNode.scrollTop + focusedOptionNode.offsetHeight;
    }
  }

  useEffect(scrollFocusedOptionIntoView, [focusedOptionIndex]);

  const onKeyPress = ({ key }: KeyboardEvent) => {
    if (key === 'Enter') {
      selectOption(visibleOptions[focusedOptionIndex]);
    } else if (key === 'ArrowDown' && focusedOptionIndex < visibleOptions.length - 1) {
      setFocusedOptionIndex(focusedOptionIndex + 1);
    } else if (key === 'ArrowUp' && focusedOptionIndex > 0) {
      setFocusedOptionIndex(focusedOptionIndex - 1);
    }
  };

  const selectOption = (option: Option) => {
    setInputValue(option.label);
    setOpen(false);
  }

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
            type="search"
            value={inputValue}
            {...props}
          />
          <InputGroupAddon addonType="append">
            <Button
              className="px-2"
              disabled={disabled}
              active={open}
              onMouseDown={(ev) => {
                ev.stopPropagation();
                setOpen(!open);
              }}
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
        ref={dropdownMenu}
      >
        {visibleOptions
          .map((option, i) => (
            <DropdownItem
              key={option.value}
              active={focusedOptionIndex == i}
              onMouseEnter={() => setFocusedOptionIndex(i)}
              onMouseDown={() => selectOption(option)}
              ref={i === focusedOptionIndex ? focusedOption : null}
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
