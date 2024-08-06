// @ts-nocheck
import React, { useState, forwardRef, useEffect } from 'react';
import ReactSelect, {
  OptionProps,
  MultiValueProps,
  IndicatorProps,
  StylesConfig,
  Props as SelectProps,
  ActionMeta,
} from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import CreatableSelect from 'react-select/creatable';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';

// Type definitions
type OptionType = { label: string; value: any; disabled?: boolean };

interface CustomSelectProps extends Omit<SelectProps<OptionType, boolean>, 'onChange' | 'isMulti' | 'isDisabled'> {
  onChange?: (value: any, action?: ActionMeta<OptionType>) => void;
  arrowRenderer?: (props: { isOpen: boolean }) => React.ReactNode;
  valueComponent?: React.ComponentType<MultiValueProps<OptionType>>;
  optionComponent?: React.ComponentType<OptionProps<OptionType>>;
  loadOptions?: (input: string, callback: (options: OptionType[]) => void) => void;
  creatable?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  multi?: boolean;
  disabled?: boolean;
  isValidNewOption?: (inputValue: any) => boolean;
}

// Utility functions
const getSelectArrow = (isOpen: boolean, arrowRenderer?: (props: { isOpen: boolean }) => React.ReactNode) =>
  arrowRenderer ? arrowRenderer({ isOpen }) : <Icon name={`caret-${isOpen ? 'up' : 'down'}`} />;

const getCloseButton = () => (
  <Icon name="xmark" className="ms-1" style={{ opacity: 0.5, fontSize: '.5rem' }} />
);

// Custom components
const CustomMultiValue: React.FC<MultiValueProps<OptionType>> = (props) => {
  const { children, removeProps, ...badgeProps } = props;

  return (
    <Badge
      color="light"
      className="ms-1 fw-normal border d-inline-flex align-items-center text-start"
      style={{ textTransform: 'none', whiteSpace: 'normal' }}
      {...badgeProps}
    >
      {children}
      <span {...removeProps}>
        {getCloseButton()}
      </span>
    </Badge>
  );
};

const CustomOption: React.FC<OptionProps<OptionType>> = (props) => {
  const { children, isDisabled, isFocused, isSelected, innerProps, data } = props;

  return (
    <div
      className={`
        dropdown-item
        ${isSelected && !isFocused ? 'bg-light' : ''}
        ${isFocused ? 'bg-primary text-white' : ''}
        ${isDisabled || data.disabled ? 'disabled' : ''}
      `.trim()}
      {...innerProps}
      aria-disabled={isDisabled || data.disabled}
    >
      {children}
    </div>
  );
};

const CustomArrow: React.FC<IndicatorProps<OptionType>> = ({ selectProps }) => {
  const { menuIsOpen, arrowRenderer } = selectProps as CustomSelectProps;
  return <>{getSelectArrow(!!menuIsOpen, arrowRenderer)}</>;
};

// Main Select component
const Select = forwardRef<any, CustomSelectProps>((props, ref) => {
  const {
    arrowRenderer,
    className,
    defaultValue,
    inputProps,
    valueComponent,
    optionComponent,
    loadOptions,
    creatable,
    onChange,
    multi,
    isValidNewOption,
    value: propsValue,
    options: propsOptions,
    disabled,
    ...restProps
  } = props;

  const [value, setValue] = useState(propsValue || defaultValue);
  const [options, setOptions] = useState(propsOptions || []);

  useEffect(() => {
    if (propsValue !== undefined) {
      setValue(propsValue);
    }
  }, [propsValue]);

  useEffect(() => {
    if (propsOptions) {
      setOptions(propsOptions);
    }
  }, [propsOptions]);

  const handleChange = (newValue: any, action: ActionMeta<OptionType>) => {
    setValue(newValue);
    if (onChange) {
      // For multi-select, always pass an array
      if (multi) {
        onChange(newValue || [], action);
      } else {
        onChange(newValue, action);
      }
    }
  };

  // Handle async options loading
  const loadOptionsWrapper = loadOptions
    ? (inputValue: string) =>
      new Promise<OptionType[]>((resolve) => {
        loadOptions(inputValue, (result: any) => {
          resolve(result.options || []);
        });
      })
    : undefined;

  // Determine which Select component to use
  let SelectElement: typeof ReactSelect | typeof AsyncSelect | typeof CreatableSelect | typeof AsyncCreatableSelect = ReactSelect;
  if (loadOptionsWrapper && creatable) {
    SelectElement = AsyncCreatableSelect;
  } else if (loadOptionsWrapper) {
    SelectElement = AsyncSelect;
  } else if (creatable) {
    SelectElement = CreatableSelect;
  }

  // Custom styles
  const customStyles: StylesConfig<OptionType, boolean> = {
    control: (base) => {return {
      ...base,
      minHeight: '2.35rem',
    }},
    option: (base, state) => {return {
      ...base,
      backgroundColor: state.isDisabled ? '#f8f9fa' : base.backgroundColor,
      color: state.isDisabled ? '#6c757d' : base.color,
      cursor: state.isDisabled ? 'not-allowed' : 'default',
    }},
  };

  const isValidNewOptionWrapper = isValidNewOption
    // eslint-disable-next-line no-shadow
    ? ({ label, value, options }: CreateOptionProps<OptionType>) => isValidNewOption({ label, value })
    : undefined;

  return (
    <SelectElement
      ref={ref}
      className={`${className || ''} ${loadOptionsWrapper ? 'select-async' : ''}`.trim()}
      components={{
        MultiValue: valueComponent || CustomMultiValue,
        Option: optionComponent || CustomOption,
        DropdownIndicator: CustomArrow,
      }}
      styles={customStyles}
      inputProps={{ name: props.name, ...inputProps }}
      isMulti={multi}
      isDisabled={disabled}
      loadOptions={loadOptionsWrapper}
      onChange={handleChange}
      value={value}
      options={options}
      isValidNewOption={isValidNewOptionWrapper}
      isOptionDisabled={(option: OptionType) => !!option.disabled}
      {...restProps}
    />
  );
});

Select.displayName = 'Select';

export default Select;
