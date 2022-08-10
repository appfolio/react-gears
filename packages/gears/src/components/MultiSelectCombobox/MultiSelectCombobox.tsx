import React, { Children } from 'react';
import type { ComboboxOption, ControlledModeChildren } from './Combobox.types';
import type { ComboboxWrapperProps } from './ComboboxWrapper';
import ComboboxWrapper from './ComboboxWrapper';
import UncontrolledMultiSelectCombobox from './UncontrolledMultiSelectCombobox';
import type { UncontrolledMultiSelectComboboxProps } from './UncontrolledMultiSelectCombobox';
import checkInvariantViolations from './util/checkInvariantViolations';

interface MultiSelectComboboxProps<T extends ComboboxOption>
  extends Partial<UncontrolledMultiSelectComboboxProps<T>>,
    Partial<ComboboxWrapperProps> {}

function MultiSelectCombobox<T extends ComboboxOption>({
  children,
  onChange,
  options,
  isOpen,
  onToggle,
  ...remainingProps
}: MultiSelectComboboxProps<T>) {
  const childrenCount = Children.count(children);

  checkInvariantViolations({
    childrenTypes: Children.map(children, (child) => child?.type),
    hasOnChange: typeof onChange !== 'undefined',
    hasOptions: typeof options !== 'undefined',
  });

  if (childrenCount === 0 && options && onChange) {
    return (
      <UncontrolledMultiSelectCombobox options={options} onChange={onChange} {...remainingProps} />
    );
  }
  return (
    <ComboboxWrapper isOpen={isOpen} onToggle={onToggle} {...remainingProps}>
      {children as ControlledModeChildren}
    </ComboboxWrapper>
  );
}

export default MultiSelectCombobox;
