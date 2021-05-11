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

type OptionGroup<T> = {
  label: string;
  options: Option<T>[];
}

type Option<T> = {
  label: string;
  value: T;
  disabled?: boolean;
}

interface ComboboxProps<T> extends Omit<InputProps, 'onChange'> {
  options: Option<T>[] | OptionGroup<T>[];
  direction?: Direction;
  dropdownProps?: DropdownProps;
  noResultsLabel?: string;
  onChange?: (value?: T | T[]) => void;
  onCreate?: (str: string) => T;
  onInputChange?: (str: string) => void;
  isValidNewOption?: (label: string) => boolean;
  filterOptions?: (options: Option<T>[], value: string) => Option<T>[];
  renderInputValue?: (option: Option<T>) => string;
  renderOption?: (option: Option<T>) => React.ReactNode;
  menuMaxHeight?: string;
  multi?: boolean;
  icon?: React.ReactNode;
}

const defaultProps = {
  noResultsLabel: 'No results found',
  onChange: () => {},
  onInputChange: () => {},
  filterOptions: (o: Option<any>[], v: any) => o.filter(option => v ? option.label.toLowerCase().indexOf(v.toLowerCase()) > -1 : true),
  isValidNewOption: () => true,
  renderInputValue: (option: Option<any>) => option.label,
  renderOption: (option: Option<any>) => option.label,
};

function Combobox<T>({
  className, direction, disabled, dropdownProps, icon, inputClassName, options: optionsProp, placeholder, value, menuMaxHeight, multi,
  noResultsLabel = defaultProps.noResultsLabel,
  onChange = defaultProps.onChange,
  onCreate,
  onInputChange = defaultProps.onInputChange,
  isValidNewOption = defaultProps.isValidNewOption,
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

  const grouped = !!(optionsProp[0] as OptionGroup<T>)?.options;
  const options: Option<T>[] = useMemo(() => {
    if (optionsProp === [] || !optionsProp) return [];

    if (grouped) {
      return (optionsProp as OptionGroup<T>[]).reduce((o: Option<T>[], current: OptionGroup<T>) => [...o, ...current.options], []);
    }
    return optionsProp as Option<T>[];
  }, [optionsProp, grouped]);
  const selected = useMemo<Option<T> | Option<T>[]>(() => multi ? (value || []).map((v: T) => options.find(option => option.value === v)) : options.find(option => option.value === value), [value, options, multi]);
  const noMatches = visibleOptions.length === 0;

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

  const selectOption = (optionValue: T) => {
    if (multi) {
      onChange([...(value || []), optionValue]);
      return;
    }
    onChange(optionValue);
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

  const createOption = () => {
    if (!onCreate) return;

    const optionValue = onCreate(inputValue);
    if (optionValue) selectOption(optionValue);
  };

  const handleOptionsKeyboardNav = ({ key }: React.KeyboardEvent<HTMLElement>) => {
    if (!open && key === 'ArrowDown') {
      setOpen(true);
    } else if (key === 'Enter') {
      if (noMatches) {
        createOption();
        return;
      }

      selectOption(visibleOptions[focusedOptionIndex].value);
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

  const renderOptions = (opts: Option<T>[]) => opts.map((option) => {
    const visibleIndex = visibleOptions.indexOf(option);
    return (
      <DropdownItem
        disabled={option.disabled}
        className={`${isOptionVisible(option) ? '' : 'sr-only'}`}
        key={`${option.value}`}
        id={`option-${option.value}`}
        active={focusedOptionIndex === visibleIndex}
        onMouseEnter={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          setFocusedOptionIndex(visibleIndex);
        }}
        onMouseDown={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          selectOption(option.value);
        }}
        ref={visibleIndex === focusedOptionIndex ? focusedOption : null}
        role="option"
        aria-selected={isOptionSelected(option)}
      >
        {renderOption(option)}
      </DropdownItem>
    );
  });

  const renderGroupedOptions = (groups: OptionGroup<T>[]) => groups.map((group, i) => (
    <>
      <DropdownItem header>{group.label}</DropdownItem>
      {renderOptions(group.options)}
      {(i !== groups.length - 1) && <DropdownItem divider />}
    </>
  ));

  const renderNoOptions = () => {
    if (onCreate) {
      return (
        <DropdownItem
          active={noMatches}
          data-testid="create-new-option"
          disabled={!isValidNewOption(inputValue)}
          onMouseDown={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            createOption();
          }}
        >
          {`Create "${inputValue}"`}
        </DropdownItem>
      );
    }

    return (
      <DropdownItem disabled>
        {noResultsLabel}
      </DropdownItem>
    );
  };

  return (
    <>
      {
        multi && (selected as Option<T>[]).length > 0 &&
        <div className="d-flex flex-wrap mb-2">
          {
            (selected as Option<T>[]).map((o: Option<T>) => (
              <Button key={`${o.value}`} color="" className="btn-sm p-0 mr-1" onClick={() => removeOption(o)} aria-label={`Remove option: ${o.value}`}>
                <Badge style={{ textTransform: 'none' }} className="p-2">
                  {o.label}{' '} <Icon name="close" />
                </Badge>
              </Button>
            ))
          }
          <Button key="clear-all" color="" className="btn-sm p-0 mr-1 text-secondary" onClick={() => onChange([])} aria-label="Remove all selected options">
            <Icon name="close" />
          </Button>
        </div>
      }
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
                onInputChange(e.target.value);
              }}
              onKeyDown={handleOptionsKeyboardNav}
              type="search"
              value={inputValue}
              aria-label="Filter options"
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
                aria-label="Toggle options menu"
              >
                {icon || <Icon name={open ? 'caret-up' : 'caret-down'} fixedWidth />}
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
          aria-activedescendant={visibleOptions[focusedOptionIndex] && `option-${visibleOptions[focusedOptionIndex].value}`}
          aria-multiselectable={multi}
        >
          {grouped ? renderGroupedOptions(optionsProp as OptionGroup<T>[]) : renderOptions(options)}
          {noMatches && renderNoOptions()}
        </DropdownMenu>
      </Dropdown>
    </>
  );
}

Combobox.displayName = 'Combobox';
Combobox.defaultProps = defaultProps;

export default Combobox;
