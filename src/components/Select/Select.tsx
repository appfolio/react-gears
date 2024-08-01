import React, { useState, useRef, useEffect } from 'react';
import ReactSelect, {
  components as ReactSelectComponents,
  Props as ReactSelectProps,
  ActionMeta,
  SingleValue,
  MultiValue,
  ValueContainerProps,
} from 'react-select';
import AsyncSelect from 'react-select/async';
import AsyncCreatableSelect from 'react-select/async-creatable';
import CreatableSelect from 'react-select/creatable';

export interface Option {
  label: string;
  value: any;
}

interface SelectProps extends Omit<ReactSelectProps<Option, boolean>, 'onChange'> {
  options?: Option[];
  defaultValue?: Option | Option[] | null;
  value?: Option | Option[] | null;
  onChange?: (value: Option | Option[] | null, action: ActionMeta<Option>) => void;
  loadOptions?: (inputValue: string, callback: (options: Option[]) => void) => void;
  creatable?: boolean;
  multi?: boolean;
  name?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

const Select: React.FC<SelectProps> = ({
                                         options,
                                         defaultValue,
                                         value,
                                         onChange,
                                         loadOptions,
                                         creatable,
                                         multi,
                                         name,
                                         inputProps,
                                         className,
                                         ...props
                                       }) => {
  const [internalValue, setInternalValue] = useState<Option | Option[] | null>(
    value || defaultValue || null
  );
  const selectRef = useRef<any>(null);
  const isControlled = value !== undefined;

  useEffect(() => {
    if (isControlled) {
      setInternalValue(value);
    }
  }, [value, isControlled]);

  const handleChange = (
    newValue: SingleValue<Option> | MultiValue<Option>,
    action: ActionMeta<Option>
  ) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue, action);
  };

  let SelectComponent: any = ReactSelect;
  if (loadOptions) {
    SelectComponent = creatable ? AsyncCreatableSelect : AsyncSelect;
  } else if (creatable) {
    SelectComponent = CreatableSelect;
  }

  const selectClassName = `Select ${multi ? 'Select--multi' : 'Select--single'} ${
    loadOptions ? 'select-async' : ''
  } ${className || ''}`.trim();

  const CustomValueContainer = ({ children, ...props }: ValueContainerProps<Option, boolean>) => {
    return (
      <ReactSelectComponents.ValueContainer {...props}>
        {children}
        {name && <input type="hidden" name={name} value={props.getValue()[0]?.value || ''} />}
      </ReactSelectComponents.ValueContainer>
    );
  };

  return (
    <SelectComponent
      ref={selectRef}
      options={options}
      value={internalValue}
      onChange={handleChange}
      loadOptions={loadOptions}
      isMulti={multi}
      className={selectClassName}
      classNamePrefix="Select"
      {...props}
      components={{
        ...ReactSelectComponents,
        Input: (inputComponentProps: any) => (
          <ReactSelectComponents.Input
            {...inputComponentProps}
            {...inputProps}
            name={inputProps?.name || name}
          />
        ),
        ValueContainer: CustomValueContainer,
      }}
    />
  );
};

// For testing purposes
Select.Async = AsyncSelect;
Select.AsyncCreatable = AsyncCreatableSelect;
Select.Creatable = CreatableSelect;

export default Select;
