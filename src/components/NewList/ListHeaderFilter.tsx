import React from 'react';
import type { ChangeEventHandler } from 'react';
import Input from '../Input/Input';

interface ListHeaderFilterProps {
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const ListHeaderFilter = ({ placeholder, value, onChange }: ListHeaderFilterProps) => (
  <Input type="search" placeholder={placeholder} value={value} onChange={onChange} />
);

export default ListHeaderFilter;
