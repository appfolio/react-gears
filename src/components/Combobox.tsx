import React, { useEffect, useState, useRef } from 'react';
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
  | 'up'
  | 'down'
  | 'left'
  | 'right';

type Option = {
  label: string;
  value: any
}

interface ComboboxProps extends InputProps {
  options: Option[];
  direction?: Direction;
  dropdownProps?: DropdownProps;
  noResultsLabel?: string;
  onChange?: (value: any) => void;
  filterOptions?: (options: Option[], value: any) => Option[];
  renderInputValue?: (option: Option) => string;
  renderOption?: (option: Option) => React.ReactNode;
}

const defaultProps = {
  noResultsLabel: 'No results found',
  onChange: () => {},
  filterOptions: (o: Option[], v: any) => o.filter(option => v ? option.label.toLowerCase().indexOf(v.toLowerCase()) === 0 : true),
  renderInputValue: (option: Option) => option.label,
  renderOption: (option: Option) => option.label,
};

const Combobox: React.FunctionComponent<ComboboxProps> = ({
  className, direction, disabled, dropdownProps, options, placeholder, value,
  noResultsLabel = defaultProps.noResultsLabel,
  onChange = defaultProps.onChange,
  filterOptions = defaultProps.filterOptions,
  renderInputValue = defaultProps.renderInputValue,
  renderOption = defaultProps.renderOption,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [visibleOptions, setVisibleOptions] = useState<Option[]>([]);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(0);

  const dropdownMenu = useRef(null);
  const focusedOption = useRef(null);

  useEffect(() => {
    if (visibleOptions.length > 0) {
      setFocusedOptionIndex(0);
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

  const scrollFocusedOptionIntoView = () => {
    if (dropdownMenu.current === null || focusedOption.current === null) return;
    /* eslint-disable react/no-find-dom-node */
    const focusedOptionNode = findDOMNode(focusedOption.current) as HTMLElement;
    const menuNode = findDOMNode(dropdownMenu.current) as HTMLElement;
    /* eslint-enable react/no-find-dom-node */

    if (focusedOptionNode === null || menuNode === null) return;

    const scrollTop = menuNode.scrollTop;
    const scrollBottom = scrollTop + menuNode.offsetHeight;
    const optionTop = focusedOptionNode.offsetTop;
    const optionBottom = optionTop + focusedOptionNode.offsetHeight;

    if (scrollTop > optionTop) {
      menuNode.scrollTop -= focusedOptionNode.offsetHeight;
    } else if (scrollBottom < optionBottom) {
      menuNode.scrollTop += focusedOptionNode.offsetHeight;
    }
  };

  useEffect(scrollFocusedOptionIntoView, [focusedOptionIndex]);

  const selectOption = (option: Option) => {
    setInputValue(option.label);
    setOpen(false);
  };

  const handleOptionsKeyboardNav = ({ key }: React.KeyboardEvent<HTMLElement>) => {
    if (!open && key === 'ArrowDown') {
      setOpen(true);
    } else if (key === 'Enter') {
      selectOption(visibleOptions[focusedOptionIndex]);
    } else if (key === 'ArrowDown' && focusedOptionIndex < visibleOptions.length - 1) {
      setFocusedOptionIndex(focusedOptionIndex + 1);
    } else if (key === 'ArrowUp' && focusedOptionIndex > 0) {
      setFocusedOptionIndex(focusedOptionIndex - 1);
    }
  };

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
            data-testid="combobox-input"
            disabled={disabled}
            placeholder={placeholder}
            onFocus={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              setOpen(true);
            }}
            onChange={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setInputValue(e.target.value);
            }}
            onKeyDown={handleOptionsKeyboardNav}
            type="search"
            value={inputValue}
            {...props}
          />
          <InputGroupAddon addonType="append">
            <Button
              className="px-2"
              data-testid="combobox-caret"
              disabled={disabled}
              active={open}
              onMouseDown={(ev) => {
                ev.preventDefault();
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
        data-testid="combobox-menu"
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
              active={focusedOptionIndex === i}
              onMouseEnter={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                setFocusedOptionIndex(i);
              }}
              onMouseDown={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                selectOption(option);
              }}
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
Combobox.defaultProps = defaultProps;

export default Combobox;
