import React, { MouseEventHandler, useEffect, useState } from 'react';
import type { ChangeEventHandler, ReactElement } from 'react';
import { ListGroup } from 'reactstrap';
import ListHeader from './ListHeader';
import ListHeaderCheckbox, { CheckboxTriState } from './ListHeaderCheckbox';
import ListHeaderFilter from './ListHeaderFilter';
import ListHeaderSort, { SortDirection } from './ListHeaderSort';
import type { SortOption } from './ListHeaderSort';
import ListItem from './ListItem';
import type { ListDataItem } from './ListItem';

type ItemId = string | number;

export interface UncontrolledListProps<T extends ListDataItem> {
  comparisonKey?: string;
  filterable?: boolean;
  filterItem?: (filterText: string, item: T) => boolean;
  flush?: boolean;
  items?: T[];
  maxHeight?: string;
  renderItem?: (item: T) => ReactElement;
  selectable?: boolean;
  sortable?: boolean;
  sortOptions?: SortOption[];
}

const defaultProps = {
  comparisonKey: 'id',
  items: [],
  maxHeight: 'auto',
  sortOptions: [],
};

function UncontrolledList<T extends ListDataItem>({
  comparisonKey = defaultProps.comparisonKey,
  filterable,
  filterItem,
  flush,
  items = defaultProps.items,
  maxHeight = defaultProps.maxHeight,
  renderItem,
  selectable,
  sortable,
  sortOptions = defaultProps.sortOptions,
}: UncontrolledListProps<T>) {
  const [selectAllState, setSelectAllState] = useState<CheckboxTriState>('unchecked');
  const [selectedIds, setSelectedIds] = useState<ItemId[]>([]);
  const [sortDirection, setSortDirection] = useState<SortDirection>('ascending');
  const [sortValue, setSortValue] = useState<string | undefined>();
  const [filterText, setFilterText] = useState('');
  const [visibleItems, setVisibleItems] = useState<T[]>([]);

  useEffect(() => {
    let newVisibleItems = [...items];

    if (sortable && sortOptions.length > 0) {
      const currentSortValue = sortValue ?? sortOptions[0].value;
      if (!sortValue) {
        setSortValue(currentSortValue);
      }

      let sortResult = 1;
      if (sortDirection === 'descending') {
        sortResult *= -1;
      }
      newVisibleItems.sort((a: T, b: T) => {
        if (a[currentSortValue] > b[currentSortValue]) {
          return sortResult;
        }
        return sortResult * -1;
      });
    }
    if (filterable && filterItem) {
      newVisibleItems = newVisibleItems.filter((item) => filterItem(filterText, item));
    }
    setVisibleItems(newVisibleItems);
  }, [items, sortDirection, sortValue, filterable, filterItem, filterText, sortOptions, sortable]);

  const handleHeaderCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {
    if (selectAllState === 'checked' || selectAllState === 'indeterminate') {
      setSelectAllState('unchecked');
      setSelectedIds([]);
    } else if (selectAllState === 'unchecked') {
      setSelectAllState('checked');
      setSelectedIds(items.map((item) => item[comparisonKey]));
    }
  };

  const handleHeaderFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterText(e.target.value);
  };

  const handleHeaderSortDirectionChange: MouseEventHandler<HTMLButtonElement> = () => {
    setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
  };

  const handleHeaderSortValueChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setSortValue(e.target.value);
  };

  const handleItemSelectToggle = (item: T, checked: boolean) => {
    const isSelected = selectedIds.includes(item[comparisonKey]);
    const newSelections = [...selectedIds];

    if (isSelected && !checked) {
      const index = selectedIds.indexOf(item[comparisonKey]);
      newSelections.splice(index, 1);
      setSelectedIds(newSelections);
    } else if (!isSelected && checked) {
      newSelections.push(item[comparisonKey]);
      setSelectedIds(newSelections);
    }

    if (newSelections.length === 0) {
      setSelectAllState('unchecked');
    } else if (newSelections.length === items.length) {
      setSelectAllState('checked');
    } else {
      setSelectAllState('indeterminate');
    }
  };

  const showHeader = selectable || filterable || sortable;

  return (
    <div>
      {showHeader && (
        <ListHeader className="justify-content-between">
          <div className="d-flex align-items-center">
            {selectable && (
              <ListHeaderCheckbox
                checkboxState={selectAllState}
                onChange={handleHeaderCheckboxChange}
              />
            )}
            {filterable && (
              <ListHeaderFilter
                placeholder="Search for an item"
                onChange={handleHeaderFilterChange}
                value={filterText}
              />
            )}
          </div>
          <div>
            {sortable && (
              <ListHeaderSort
                direction={sortDirection}
                onDirectionClick={handleHeaderSortDirectionChange}
                onValueChange={handleHeaderSortValueChange}
                options={sortOptions}
                value={sortValue}
              />
            )}
          </div>
        </ListHeader>
      )}
      <ListGroup flush={flush} style={{ maxHeight }} className="overflow-auto">
        {visibleItems.map((item) => (
          <ListItem
            key={item[comparisonKey]}
            onSelectToggle={(e) => handleItemSelectToggle(item, e.target.checked)}
            selectable={selectable}
            selected={selectedIds.includes(item[comparisonKey])}
          >
            {renderItem?.(item) ?? item[comparisonKey]}
          </ListItem>
        ))}
      </ListGroup>
    </div>
  );
}

export default UncontrolledList;
