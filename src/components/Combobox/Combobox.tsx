import equal from 'fast-deep-equal';
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { createPortal, findDOMNode } from 'react-dom';
import { DropdownProps, InputProps } from 'reactstrap';
import Badge from '../Badge/Badge';
import Button from '../Button/Button';
import Dropdown from '../Dropdown/Dropdown';
import DropdownItem from '../Dropdown/DropdownItem';
import DropdownMenu from '../Dropdown/DropdownMenu';
import DropdownToggle from '../Dropdown/DropdownToggle';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';

type Direction = 'up' | 'down';

type Option<T> = {
  label: string;
  value: T;
  disabled?: boolean;
};

type OptionGroup<T> = {
  label: string;
  options: Option<T>[];
};

interface ComboboxProps<T> extends Omit<InputProps, 'onChange'> {
  options: Option<T>[] | OptionGroup<T>[];
  direction?: Direction;
  dropdownProps?: DropdownProps;
  noResultsLabel?: string;
  onChange?: (value?: T | T[]) => void;
  onCreate?: (str: string) => T;
  isValidNewOption?: (label: string) => boolean;
  filterOptions?: (options: Option<T>[], value: string) => Option<T>[];
  renderOption?: (option: Option<T>) => React.ReactNode;
  menuMaxHeight?: string;
  multi?: boolean;
  portalEl?: HTMLElement;
}

const defaultProps = {
  noResultsLabel: 'No results found',
  onChange: () => {},
  filterOptions: (o: Option<any>[], v: any) =>
    o.filter((option) => (v ? option.label.toLowerCase().indexOf(v.toLowerCase()) > -1 : true)),
  isValidNewOption: () => true,
  renderOption: (option: Option<any>) => option.label,
};

function Combobox<T>({
  className,
  direction,
  disabled,
  dropdownProps,
  inputClassName,
  options: optionsProp,
  placeholder,
  value,
  menuMaxHeight,
  multi,
  noResultsLabel = defaultProps.noResultsLabel,
  portalEl,
  onChange = defaultProps.onChange,
  onCreate,
  isValidNewOption = defaultProps.isValidNewOption,
  filterOptions = defaultProps.filterOptions,
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
    if (optionsProp === [] || !optionsProp) {
      return [];
    }

    if (grouped) {
      return (optionsProp as OptionGroup<T>[]).reduce(
        (o: Option<T>[], current: OptionGroup<T>) => [...o, ...current.options],
        []
      );
    }
    return optionsProp as Option<T>[];
  }, [optionsProp, grouped]);
  const selected = useMemo<Option<T> | Option<T>[]>(
    () =>
      multi
        ? (value || []).map((v: T) => options.find((option) => equal(option.value, v)))
        : options.find((option) => equal(option.value, value)),
    [value, options, multi]
  );
  const noMatches = visibleOptions.length === 0;
  const cursorAtStart = () =>
    inputElement?.current?.selectionStart === 0 && inputElement?.current?.selectionEnd === 0;

  useEffect(() => {
    if (visibleOptions.length > 0) {
      setFocusedOptionIndex(0);
    }
  }, [visibleOptions]);

  useEffect(() => {
    setInputValue(!multi && selected ? (selected as Option<T>).label : '');
  }, [selected, open, multi]);

  useEffect(() => {
    if (!open && inputElement.current) {
      inputElement.current.blur();
    }

    if (open && !multi && selected && inputElement?.current) {
      window.setTimeout(() => {
        inputElement!.current?.setSelectionRange(0, 0);
      }, 1);
    }
  }, [open, multi, selected]);

  useEffect(() => {
    let selectableOptions = [...options];

    if (multi && value) {
      selectableOptions = options.filter((o) => value.indexOf(o.value) === -1);
    }

    setVisibleOptions(
      filterOptions(
        selectableOptions,
        !multi && selected && inputValue === (selected as Option<T>).label ? '' : inputValue
      )
    );
  }, [inputValue, setVisibleOptions, filterOptions, options, multi, value, selected]);

  const scrollFocusedOptionIntoView = () => {
    if (dropdownMenu.current === null || focusedOption.current === null) {
      return;
    }
    /* eslint-disable react/no-find-dom-node */
    const focusedOptionNode = findDOMNode(focusedOption.current) as HTMLElement;
    const menuNode = findDOMNode(dropdownMenu.current) as HTMLElement;
    /* eslint-enable react/no-find-dom-node */

    if (focusedOptionNode === null || menuNode === null) {
      return;
    }

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
    return equal(value, option.value);
  };

  const selectOption = (optionValue: T) => {
    if (multi) {
      onChange([...(value || []), optionValue]);
      return;
    }
    onChange(optionValue);
    setOpen(false);
  };

  const showSelectedPreview = () => {
    setInputValue(`${(selected as Option<T>).label} `);
    window.setTimeout(() => {
      inputElement!.current!.setSelectionRange(0, 0);
    }, 1);
  };

  const clearSelectedPreview = () => {
    if (!multi && selected && (selected as Option<T>).label === inputValue) {
      if (cursorAtStart()) {
        setInputValue('');
      }
    }
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
    if (!onCreate) {
      return;
    }

    const optionValue = onCreate(inputValue);
    if (optionValue) {
      selectOption(optionValue);
    }
  };

  const handleOptionsKeyboardNav = (e: React.KeyboardEvent<HTMLElement>) => {
    const input = inputElement?.current;
    const allSelected = input?.selectionStart === 0 && input.selectionEnd === input.value.length;
    const isDisplayingSelected = !multi && selected && inputValue === (selected as Option<T>).label;
    const key = e.key;

    if (!open && key === 'ArrowDown') {
      setOpen(true);
    } else if (key === 'Enter') {
      if (noMatches) {
        createOption();
        return;
      }

      selectOption(visibleOptions[focusedOptionIndex].value);
      e.preventDefault();
    } else if (key === 'ArrowDown' && focusedOptionIndex < visibleOptions.length - 1) {
      setFocusedOptionIndex(focusedOptionIndex + 1);
    } else if (key === 'ArrowUp' && focusedOptionIndex > 0) {
      setFocusedOptionIndex(focusedOptionIndex - 1);
    } else if (
      selected &&
      key === 'Backspace' &&
      (cursorAtStart() || (allSelected && isDisplayingSelected))
    ) {
      if (multi) {
        const newValue = [...value];
        newValue.pop();
        onChange(newValue);
        return;
      }
      onChange(undefined);
    } else if (
      !multi &&
      selected &&
      key === 'Backspace' &&
      ((input?.selectionStart === 1 && input?.selectionEnd === 1) ||
        (allSelected && !isDisplayingSelected))
    ) {
      showSelectedPreview();
    }
  };

  const renderOptions = (opts: Option<T>[]) =>
    opts.map((option) => {
      const visibleIndex = visibleOptions.indexOf(option);
      const key = JSON.stringify(option.value);
      return (
        <DropdownItem
          disabled={option.disabled}
          className={`${isOptionVisible(option) ? '' : 'visually-hidden'}`}
          data-testid="react-gears-combobox-dropdownitem-options"
          key={key}
          id={`option-${key}`}
          active={focusedOptionIndex === visibleIndex}
          onMouseEnter={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            setFocusedOptionIndex(visibleIndex);
          }}
          onMouseDown={(ev) => {
            if (ev.button !== 0) {
              return;
            }

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

  const renderGroupedOptions = (groups: OptionGroup<T>[]) =>
    groups.map((group, i) => (
      <>
        <DropdownItem header data-testid="react-gears-combobox-dropdownitem-grouped-options">
          {group.label}
        </DropdownItem>
        {renderOptions(group.options)}
        {i !== groups.length - 1 && <DropdownItem divider />}
      </>
    ));

  const renderNoOptions = () => {
    if (onCreate) {
      return (
        <DropdownItem
          active={noMatches}
          data-testid="react-gears-combobox-dropdownitem-create-new-option"
          disabled={!isValidNewOption(inputValue)}
          onMouseDown={(ev) => {
            if (ev.button !== 0) {
              return;
            }

            ev.preventDefault();
            ev.stopPropagation();
            createOption();
          }}
        >
          {`Create "${inputValue}"`}
        </DropdownItem>
      );
    }

    return <DropdownItem disabled>{noResultsLabel}</DropdownItem>;
  };

  const menu = (
    <DropdownMenu
      data-testid="react-gears-combobox-dropdownmenu"
      className="p-0 w-100"
      style={{ maxHeight: menuMaxHeight || '12rem', overflowY: 'auto' }}
      {...dropdownProps}
      ref={dropdownMenu}
      role="listbox"
      aria-activedescendant={
        visibleOptions[focusedOptionIndex] &&
        `option-${JSON.stringify(visibleOptions[focusedOptionIndex].value)}`
      }
      aria-multiselectable={multi}
    >
      {grouped ? renderGroupedOptions(optionsProp as OptionGroup<T>[]) : renderOptions(options)}
      {noMatches && renderNoOptions()}
    </DropdownMenu>
  );

  return (
    <>
      {multi && (selected as Option<T>[]).length > 0 && (
        <div className="d-flex flex-wrap mb-2">
          {(selected as Option<T>[]).map((o: Option<T>) => {
            const key = JSON.stringify(o.value);
            return (
              <Button
                key={key}
                color=""
                className="btn-sm p-0 me-1"
                onClick={() => removeOption(o)}
                aria-label={`Remove option: ${key}`}
              >
                <Badge style={{ textTransform: 'none' }} className="p-2">
                  {o.label} <Icon name="close" />
                </Badge>
              </Button>
            );
          })}
          <Button
            key="clear-all"
            color=""
            className="btn-sm p-0 me-1 text-secondary"
            onClick={() => onChange([])}
            aria-label="Remove all selected options"
          >
            <Icon name="close" />
          </Button>
        </div>
      )}
      <Dropdown
        data-testid="react-gears-combobox-dropdown"
        direction={direction}
        isOpen={!disabled && open}
        toggle={() => {}}
        onBlur={({ currentTarget: blurred, relatedTarget: focused }) => {
          if (focused instanceof Node && blurred.contains(focused)) {
            return;
          }
          setOpen(false);
        }}
      >
        <DropdownToggle tag="div" disabled={disabled}>
          <InputGroup className={className}>
            <Input
              innerRef={inputElement}
              data-testid="react-gears-combobox-input"
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

                if (!multi && selected && cursorAtStart() && e.target.value === '') {
                  onChange(undefined);
                }
              }}
              onMouseDown={(ev) => {
                if (ev.button !== 0) {
                  ev.preventDefault();
                  return;
                }

                if (!multi && selected) {
                  inputElement!.current!.setSelectionRange(0, 0);

                  if ((selected as Option<T>).label === inputValue) {
                    ev.preventDefault();
                  }
                }

                // @ts-ignore
                ev.target.focus();
              }}
              onKeyDown={handleOptionsKeyboardNav}
              onKeyPress={clearSelectedPreview}
              onPaste={clearSelectedPreview}
              type={props.type || 'search'}
              value={inputValue}
              aria-label="Filter options"
              {...props}
            />
            <Button
              className="px-2"
              data-testid="react-gears-combobox-button"
              disabled={disabled}
              active={open}
              onMouseDown={(ev: React.MouseEvent<HTMLButtonElement>) => {
                if (ev.button !== 0) {
                  return;
                }

                ev.stopPropagation();
                setOpen(!open);
              }}
              type="button"
              aria-label="Toggle options menu"
            >
              <Icon name={open ? 'caret-up' : 'caret-down'} fixedWidth />
            </Button>
          </InputGroup>
        </DropdownToggle>
        {portalEl ? <div>{createPortal(menu, portalEl)}</div> : menu}
      </Dropdown>
    </>
  );
}

Combobox.displayName = 'Combobox';
Combobox.defaultProps = defaultProps;

export default Combobox;
