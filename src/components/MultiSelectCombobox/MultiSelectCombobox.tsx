import React, { Children } from 'react';
import type { ComboboxOption, ControlledModeChildren } from './Combobox.types';
import type { ControlledMultiSelectComboboxProps } from './ControlledMultiSelectCombobox';
import ControlledMultiSelectCombobox from './ControlledMultiSelectCombobox';
import type { UncontrolledMultiSelectComboboxProps } from './UncontrolledMultiSelectCombobox';
import UncontrolledMultiSelectCombobox from './UncontrolledMultiSelectCombobox';
import checkInvariantViolations from './util/checkInvariantViolations';

interface MultiSelectComboboxProps<T extends ComboboxOption>
  extends Partial<UncontrolledMultiSelectComboboxProps<T>>,
    Partial<ControlledMultiSelectComboboxProps> {}

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
    <ControlledMultiSelectCombobox isOpen={isOpen} onToggle={onToggle} {...remainingProps}>
      {children as ControlledModeChildren}
    </ControlledMultiSelectCombobox>
  );
}

export default MultiSelectCombobox;
