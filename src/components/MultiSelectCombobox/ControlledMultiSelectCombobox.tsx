import type { MouseEventHandler, ReactElement } from 'react';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import type { ComboboxItemsProps } from './ComboboxItems';
import type { ComboboxSelectionsProps } from './ComboboxSelections';

export interface ControlledMultiSelectComboboxProps {
  children: [ReactElement<ComboboxSelectionsProps>, ReactElement<ComboboxItemsProps>];
  closeOnSelect?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

const ControlledMultiSelectCombobox = ({
  children,
  closeOnSelect,
  isOpen,
  onToggle,
}: ControlledMultiSelectComboboxProps) => {
  const handleToggle: MouseEventHandler = (e) => {
    if (closeOnSelect || (e?.target as HTMLButtonElement)?.getAttribute('role') !== 'menuitem') {
      onToggle?.();
    }
  };

  return (
    <Dropdown isOpen={isOpen} toggle={handleToggle}>
      {children}
    </Dropdown>
  );
};

export default ControlledMultiSelectCombobox;
