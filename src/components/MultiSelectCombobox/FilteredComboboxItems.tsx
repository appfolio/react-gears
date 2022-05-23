import type { ReactElement, Ref } from 'react';
import React, { Children } from 'react';
import Button from '../Button/Button';
import DropdownItem from '../Dropdown/DropdownItem';
import DropdownMenu from '../Dropdown/DropdownMenu';
import Input from '../Input/Input';
import type { ComboboxItemProps } from './ComboboxItem';

export interface FilteredComboboxItemsProps {
  allowCreation?: boolean;
  children?: ReactElement<ComboboxItemProps>[] | ReactElement<ComboboxItemProps>;
  filterValue: string;
  filterInputRef?: Ref<HTMLInputElement>;
  maxHeight?: string;
  noResultsLabel?: string;
  onCreateClick?: (value: string) => void;
  onFilterChange?: (value: string) => void;
}

const defaultProps = {
  allowCreation: false,
  maxHeight: '12rem',
  noResultsLabel: 'No results found',
};

const FilteredComboboxItems = ({
  allowCreation = defaultProps.allowCreation,
  children,
  filterValue,
  filterInputRef,
  maxHeight = defaultProps.maxHeight,
  noResultsLabel = defaultProps.noResultsLabel,
  onCreateClick,
  onFilterChange,
}: FilteredComboboxItemsProps) => (
  <div className="d-flex flex-column h-100">
    <DropdownMenu className="border-secondary w-100" updateOnSelect>
      <div className="p-3">
        <Input
          aria-label="Filter available items"
          innerRef={filterInputRef}
          onChange={(e) => onFilterChange?.(e.target.value)}
          tabIndex={0}
          value={filterValue}
        />
      </div>
      <div className="overflow-auto" style={{ maxHeight }}>
        {Children.count(children) === 0 ? (
          <span className="text-muted ps-2">{noResultsLabel}</span>
        ) : (
          children
        )}
      </div>
      {allowCreation && filterValue !== '' && (
        <>
          <DropdownItem divider />
          <Button color="link" onClick={() => onCreateClick?.(filterValue)}>
            Create {filterValue}
          </Button>
        </>
      )}
    </DropdownMenu>
  </div>
);

export default FilteredComboboxItems;
