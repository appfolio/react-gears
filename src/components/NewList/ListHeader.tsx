import React, { useRef, useEffect } from 'react';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export type CheckboxState = 'checked' | 'unchecked' | 'indeterminate';
export interface SortOption {
  label?: string;
  value?: string;
}

export type SortDirection = 'ascending' | 'descending';

export interface ListHeaderProps {
  checkbox?: boolean;
  checkboxState?: CheckboxState;
  filterable?: boolean;
  filterPlaceholder?: string;
  filterValue?: string;
  onCheckboxChange?: (checked: boolean) => void;
  onFilterChange?: (value: string) => void;
  onSortDirectionToggle?: () => void;
  onSortValueChange?: (value: string) => void;
  sortable?: boolean;
  sortDirection?: SortDirection;
  sortOptions?: SortOption[];
  sortValue?: string;
}

const defaultProps: ListHeaderProps = {
  checkboxState: 'unchecked',
  filterPlaceholder: 'Search',
  sortDirection: 'ascending',
};

const ListHeader = ({
  checkbox,
  checkboxState,
  filterable,
  filterPlaceholder = defaultProps.filterPlaceholder,
  filterValue,
  onCheckboxChange,
  onFilterChange,
  onSortDirectionToggle,
  onSortValueChange,
  sortable,
  sortDirection = defaultProps.sortDirection,
  sortOptions,
  sortValue,
}: ListHeaderProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (checkboxRef.current) {
      switch (checkboxState) {
        case 'checked':
          checkboxRef.current.checked = true;
          checkboxRef.current.indeterminate = false;
          break;
        case 'unchecked':
          checkboxRef.current.checked = false;
          checkboxRef.current.indeterminate = false;
          break;
        case 'indeterminate':
          checkboxRef.current.checked = false;
          checkboxRef.current.indeterminate = true;
          break;
        default:
          break;
      }
    }
  }, [checkboxState]);

  const handleCheckboxChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onCheckboxChange?.(e.target.checked);
  };

  const handleSortDirectionToggle: MouseEventHandler<HTMLButtonElement> = () => {
    onSortDirectionToggle?.();
  };

  const handleSortValueChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onSortValueChange?.(e.target.value);
  };

  const handleFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    onFilterChange?.(e.target.value);
  };

  return (
    // TODO: assert invariatnt for sortable, sortOptions
    <div className="d-flex justify-content-between bg-secondary p-3 rounded-top">
      <div className="d-flex align-items-center min-vw-25">
        {checkbox && (
          <input
            aria-label={checkboxState === 'unchecked' ? 'Select all items' : 'Deselect all items'}
            className="ms-1 me-3"
            ref={checkboxRef}
            type="checkbox"
            checked={checkboxState === 'checked'}
            onChange={handleCheckboxChange}
          />
        )}
        {filterable && (
          <input
            className="form-control"
            type="search"
            placeholder={filterPlaceholder}
            value={filterValue}
            onChange={handleFilterChange}
          />
        )}
      </div>
      {sortable && sortOptions && (
        <div className="d-flex min-vw-25">
          <select
            aria-label="Select the item field to sort by"
            className="form-select"
            value={sortValue}
            onChange={handleSortValueChange}
          >
            {sortOptions?.map((option) => (
              <option key={option.value} value={option.value}>
                {option?.label ?? option.value}
              </option>
            ))}
          </select>
          <Button
            className="ms-1 ps-2 pe-0"
            color="link"
            id="sort-button"
            onClick={handleSortDirectionToggle}
          >
            <Icon name={sortDirection === 'ascending' ? 'arrow-down' : 'arrow-up'} size="lg" />
            <span className="sr-only">Change Sort Direction</span>
          </Button>
        </div>
      )}
    </div>
  );
};

export default ListHeader;
