import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export interface SortOption {
  label?: string;
  value: string;
}

export type SortDirection = 'ascending' | 'descending';

interface ListHeaderSortProps {
  direction?: SortDirection;
  onDirectionClick?: MouseEventHandler<HTMLButtonElement>;
  onValueChange?: ChangeEventHandler<HTMLSelectElement>;
  options?: SortOption[];
  value?: string;
}

const defaultProps: ListHeaderSortProps = { direction: 'ascending', options: [] };

const ListHeaderSort = ({
  direction = defaultProps.direction,
  onDirectionClick,
  onValueChange,
  options,
  value,
}: ListHeaderSortProps) => (
  <div className="d-flex align-items-center">
    <select
      aria-label="Select the item field to sort by"
      className="form-select"
      value={value}
      onChange={onValueChange}
    >
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option?.label ?? option.value}
        </option>
      ))}
    </select>
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

export default ListHeaderSort;
