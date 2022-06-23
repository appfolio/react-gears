import type { MouseEventHandler } from 'react';
import React from 'react';
import DropdownItem from '../Dropdown/DropdownItem';

export interface ComboboxItemProps {
  children: string;
  onClick: MouseEventHandler;
}

const ComboboxItem = ({ children, onClick }: ComboboxItemProps) => (
  <DropdownItem onClick={onClick} className="overflow-hidden text-truncate" title={children}>
    {children}
  </DropdownItem>
);

export default ComboboxItem;
