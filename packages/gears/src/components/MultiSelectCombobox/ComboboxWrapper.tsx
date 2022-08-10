import type { MouseEventHandler, ReactElement } from 'react';
import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import type { ComboboxItemsProps } from './ComboboxItems';
import type { ComboboxSelectionsProps } from './ComboboxSelections';

export interface ComboboxWrapperProps {
  children: [ReactElement<ComboboxSelectionsProps>, ReactElement<ComboboxItemsProps>];
  closeOnSelect?: boolean;
  isOpen?: boolean;
  onToggle?: () => void;
}

const ComboboxWrapper = ({ children, closeOnSelect, isOpen, onToggle }: ComboboxWrapperProps) => {
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

export default ComboboxWrapper;
