import React from 'react';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import Label from '../Label/Label';

export interface SortOption {
  label?: string;
  value: string;
}

export type SortDirection = 'ascending' | 'descending';

interface ListHeaderSortProps {
  direction?: SortDirection;
  label?: string;
  onDirectionClick?: MouseEventHandler<HTMLButtonElement>;
  onValueChange?: ChangeEventHandler<HTMLInputElement>;
  options?: SortOption[];
  value?: string;
}

const defaultProps: ListHeaderSortProps = {
  direction: 'ascending',
  label: 'Sort by',
  options: [],
};

function ListHeaderSort({
  direction = defaultProps.direction,
  label = defaultProps.label,
  onDirectionClick,
  onValueChange,
  options,
  value,
}: ListHeaderSortProps) {
  return (
    <div className="d-flex align-items-center ms-auto col-4">
      <Label for="list-header-sort-select" className="text-nowrap m-0 pe-2">
        {label}
      </Label>
      <Input
        id="list-header-sort-select"
        aria-label="Select the item field to sort by"
        type="select"
        value={value}
        onChange={onValueChange}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option?.label ?? option.value}
          </option>
        ))}
      </Input>
      <Button
        color="link"
        id="sort-button"
        onClick={onDirectionClick}
        aria-label="Change Sort Direction"
      >
        <Icon name={direction === 'ascending' ? 'arrow-down' : 'arrow-up'} />
      </Button>
    </div>
  );
}

export default ListHeaderSort;
