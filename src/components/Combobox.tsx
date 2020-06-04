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
  value: any;
  disabled?: boolean;
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
  menuMaxHeight?: string;
}

const defaultProps = {
  noResultsLabel: 'No results found',
  onChange: () => {},
  filterOptions: (o: Option[], v: any) => o.filter(option => v ? option.label.toLowerCase().indexOf(v.toLowerCase()) > -1 : true),
  renderInputValue: (option: Option) => option.label,
  renderOption: (option: Option) => option.label,
};

const Combobox: React.FunctionComponent<ComboboxProps> = ({
  className, direction, disabled, dropdownProps, options, placeholder, value, menuMaxHeight,
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

  const inputElement = useRef<HTMLInputElement>(null);
  const dropdownMenu = useRef(null);
  const focusedOption = useRef(null);

  const selectedOption = options.find(option => option.value === value);

  useEffect(() => {
    if (visibleOptions.length > 0) {
      setFocusedOptionIndex(0);
    }
  }, [visibleOptions]);

  useEffect(() => {
    setInputValue('');
    if (selectedOption && inputElement.current) inputElement.current.blur();
  }, [selectedOption, options, renderInputValue]);

  useEffect(() => {
    setVisibleOptions(filterOptions(options, inputValue));
  }, [inputValue, setVisibleOptions, filterOptions, options, selectedOption, onChange]);

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
    onChange(option.value);
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
    } else if (selectedOption && key === 'Backspace' && inputValue === '') {
      onChange(undefined);
    }
  };

  return (
    <Dropdown
      direction={direction}
      isOpen={!disabled && open}
      toggle={() => {}}
      onBlur={() => {
        setInputValue('');
        setOpen(false);
      }}
    >
      <DropdownToggle tag="div" disabled={disabled}>
        { selectedOption && inputValue === '' &&
          <div
            aria-label="Selected value"
            className="py-2 px-3"
            style={{ position: 'absolute', zIndex: 4, left: 1 }}
          >
            {selectedOption && renderInputValue(selectedOption)}
          </div>
        }
        <InputGroup className={className}>
          <Input
            innerRef={inputElement}
            data-testid="combobox-input"
            disabled={disabled}
            placeholder={selectedOption ? undefined : placeholder}
            onFocus={(ev) => {
              ev.preventDefault();
              ev.stopPropagation();
              setOpen(true);
              setInputValue('');
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
          maxHeight: menuMaxHeight || '12rem',
          overflowY: 'auto'
        }}
        {...dropdownProps}
        ref={dropdownMenu}
      >
        {visibleOptions
          .map((option, i) => (
            <DropdownItem
              disabled={option.disabled}
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
