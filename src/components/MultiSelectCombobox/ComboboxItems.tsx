import type { ReactElement } from 'react';
import React from 'react';
import DropdownMenu from '../Dropdown/DropdownMenu';
import type { ComboboxItemProps } from './ComboboxItem';

export interface ComboboxItemsProps {
  children?: ReactElement<ComboboxItemProps>[] | ReactElement<ComboboxItemProps>;
  maxHeight?: string;
}

const defaultProps = { maxHeight: '12rem' };

const ComboboxItems = ({ children, maxHeight = defaultProps.maxHeight }: ComboboxItemsProps) => (
  <DropdownMenu
    className="w-100"
    style={{ maxHeight, overflowY: 'auto' }}
    title="Menu Items"
    updateOnSelect
  >
    <div>{children}</div>
  </DropdownMenu>
);

export default ComboboxItems;
