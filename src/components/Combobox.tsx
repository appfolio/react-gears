import React, { useEffect, useState, useRef, useMemo } from 'react';
import { findDOMNode } from 'react-dom';
import { DropdownProps, InputProps } from 'reactstrap';
import Badge from './Badge';
import Button from './Button';
import Dropdown from './Dropdown';
import DropdownItem from './DropdownItem';
import DropdownMenu from './DropdownMenu';
import DropdownToggle from './DropdownToggle';
import Icon from './Icon';
import Input from './Input';
import InputGroup from './InputGroup';
import InputGroupAddon from './InputGroupAddon';

type Direction = 'up' | 'down';

type Option<T> = {
  label: string;
  value: T;
  disabled?: boolean;
}

interface ComboboxProps<T> extends Omit<InputProps, 'onChange'> {
  options: Option<T>[];
  direction?: Direction;
  dropdownProps?: DropdownProps;
  noResultsLabel?: string;
  onChange?: (value?: T | T[]) => void;
  filterOptions?: (options: Option<T>[], value: string) => Option<T>[];
  renderInputValue?: (option: Option<T>) => string;
  renderOption?: (option: Option<T>) => React.ReactNode;
  menuMaxHeight?: string;
  multi?: boolean;
}

const defaultProps = {
  noResultsLabel: 'No results found',
  onChange: () => {},
  filterOptions: (o: Option<any>[], v: any) => o.filter(option => v ? option.label.toLowerCase().indexOf(v.toLowerCase()) > -1 : true),
  renderInputValue: (option: Option<any>) => option.label,
  renderOption: (option: Option<any>) => option.label,
};

function Combobox<T>({
  className, direction, disabled, dropdownProps, inputClassName, options, placeholder, value, menuMaxHeight, multi,
  noResultsLabel = defaultProps.noResultsLabel,
  onChange = defaultProps.onChange,
  filterOptions = defaultProps.filterOptions,
  renderInputValue = defaultProps.renderInputValue,
  renderOption = defaultProps.renderOption,
  ...props
}: ComboboxProps<T>) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [visibleOptions, setVisibleOptions] = useState<Option<T>[]>([]);
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number>(0);

  const inputElement = useRef<HTMLInputElement>(null);
  const dropdownMenu = useRef(null);
  const focusedOption = useRef(null);
  const selected = useMemo<Option<T> | Option<T>[]>(() => multi ? (value || []).map((v: T) => options.find(option => option.value === v)) : options.find(option => option.value === value), [value, options, multi]);

  useEffect(() => {
    if (visibleOptions.length > 0) {
      setFocusedOptionIndex(0);
    }
  }, [visibleOptions]);

  useEffect(() => {
    setInputValue('');
  }, [selected, open]);

  useEffect(() => {
    if (!open && inputElement.current) inputElement.current.blur();
  }, [open]);

  useEffect(() => {
    let selectableOptions = [...options];

    if (multi && value) {
      selectableOptions = options.filter(o => value.indexOf(o.value) === -1);
    }

    setVisibleOptions(filterOptions(selectableOptions, inputValue));
  }, [inputValue, setVisibleOptions, filterOptions, options, multi, value]);

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

  const isOptionVisible = (option: Option<T>) => visibleOptions.indexOf(option) > -1;

  const isOptionSelected = (option: Option<T>) => {
    if (multi) {
      return value?.indexOf(option.value) > -1;
    }
    return value === option.value;
  };

  const selectOption = (option: Option<T>) => {
    if (multi) {
      onChange([...(value || []), option.value]);
      return;
    }
    onChange(option.value);
    setOpen(false);
  };

  const removeOption = (option: Option<T>) => {
    const i = value.indexOf(option.value);
    if (i > -1) {
      const newValue = [...value];
      newValue.splice(i, 1);
      onChange(newValue);
    }
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
    } else if (selected && key === 'Backspace' && inputValue === '') {
      if (multi) {
        const newValue = [...value];
        newValue.pop();
        onChange(newValue);
        return;
      }
      onChange(undefined);
    }
  };

  return (
    <>
      <div className="d-flex flex-wrap mb-2">
        {
          multi &&
          (selected as Option<T>[]).map((o: Option<T>) => (
            <Button color="" className="btn-sm p-0 mr-1" onClick={() => removeOption(o)}>
              <Badge key={`${o.value}`} style={{ textTransform: 'none' }} className="p-2">
                {o.label}{' '} <Icon name="close" />
              </Badge>
            </Button>
          ))
        }
      </div>
      <Dropdown
        direction={direction}
        isOpen={!disabled && open}
        toggle={() => {}}
        onBlur={() => { setOpen(false); }}
      >
        <DropdownToggle tag="div" disabled={disabled}>
          <InputGroup className={className}>
            { !multi && selected && inputValue === '' &&
              // eslint-disable-next-line jsx-a11y/no-static-element-interactions
              <div
                aria-label="Selected value"
                className="py-2 px-3"
                style={{ position: 'absolute', width: 'calc(100% - 1.5rem)', zIndex: 4, left: 1 }}
                onMouseDown={(ev) => {
                  ev.preventDefault();
                  if (inputElement.current) inputElement.current.focus();
                }}
              >
                {renderInputValue((selected as Option<T>))}
              </div>
            }
            <Input
              innerRef={inputElement}
              data-testid="combobox-input"
              disabled={disabled}
              className={inputClassName}
              placeholder={selected ? undefined : placeholder}
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
          modifiers={{
          setMaxHeight: {
            enabled: true,
            fn: (data) => {
              return {
                ...data,
                styles: {
                  ...data.styles,
                  overflowY: 'auto',
                  maxHeight: menuMaxHeight || '12rem',
                },
              };
            },
          },
        }}
          {...dropdownProps}
          ref={dropdownMenu}
          role="listbox"
          aria-activedescendant={`option-${options[focusedOptionIndex].value}`}
          aria-multiselectable={multi}
        >
          {options
          .map((option, i) => (
            <DropdownItem
              disabled={option.disabled}
              className={`${isOptionVisible(option) ? '' : 'd-none'}`}
              key={`${option.value}`}
              id={`option-${option.value}`}
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
              role="option"
              aria-selected={isOptionSelected(option)}
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
    </>
  );
}

Combobox.displayName = 'Combobox';
Combobox.defaultProps = defaultProps;

export default Combobox;
