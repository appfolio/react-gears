import React from 'react';
import type { ChangeEventHandler } from 'react';

export interface SortOption {
  label?: string;
  value?: string;
}

interface ListHeaderSortOptionsProps {
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  options?: SortOption[];
  value?: string;
}

const defaultProps: ListHeaderSortOptionsProps = { options: [] };

const ListHeaderSortOptions = ({
  onChange,
  options = defaultProps.options,
  value,
}: ListHeaderSortOptionsProps) => (
  <select
    aria-label="Select the item field to sort by"
    className="form-select"
    value={value}
    onChange={onChange}
  >
    {options?.map((option) => (
      <option key={option.value} value={option.value}>
        {option?.label ?? option.value}
      </option>
    ))}
  </select>
);

export default ListHeaderSortOptions;
