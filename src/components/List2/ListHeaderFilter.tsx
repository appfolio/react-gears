import React from 'react';
import type { ChangeEventHandler } from 'react';
import Input from '../Input/Input';
import Label from '../Label/Label';

export interface ListHeaderFilterProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value?: string;
}

function ListHeaderFilter({ onChange, placeholder, value }: ListHeaderFilterProps) {
  return (
    <div className="col-4">
      <Label className="visually-hidden" for="list-header-filter-input">
        Filter by
      </Label>
      <Input
        id="list-header-filter-input"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default ListHeaderFilter;
