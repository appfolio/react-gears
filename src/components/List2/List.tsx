import React, { useEffect, useState } from 'react';
import type { ChangeEventHandler, MouseEventHandler } from 'react';
import { useList, useSet } from 'react-use';
import type { FilterItemCallback, ItemId, ListComponents, ListDataItem } from './List.types';
import DefaultListHeader from './ListHeader';
import DefaultListHeaderCheckbox from './ListHeaderCheckbox';
import type { CheckboxTriState } from './ListHeaderCheckbox';
import DefaultListHeaderFilter from './ListHeaderFilter';
import DefaultListHeaderSort from './ListHeaderSort';
import type { SortDirection, SortOption } from './ListHeaderSort';
import DefaultListItem from './ListItem';
import DefaultListItemExpanded from './ListItemExpanded';
import DefaultListItems from './ListItems';
import DefaultListItemWrapper from './ListItemWrapper';
import DefaultListWrapper from './ListWrapper';

interface ListProps<T> {
  components: ListComponents;
  expandable?: boolean;
  filterable?: boolean;
  filterItem?: FilterItemCallback<T>;
  initialExpandedIds?: ItemId[];
  initialSelectionIds?: ItemId[];
  itemComparisonKey?: string;
  items: T[];
  maxItemsHeight?: string;
  selectable?: boolean;
  sortable?: boolean;
  sortOptions?: SortOption[];
}

const defaultProps = {
  initialExpandedIds: [],
  initialSelectionIds: [],
  itemComparisonKey: 'id',
  maxItemsHeight: 'auto',
  sortOptions: [],
};

const defaultComponents: Omit<Required<ListComponents>, 'ItemBody' | 'ExpandedItemBody'> = {
  Wrapper: DefaultListWrapper,
  Header: DefaultListHeader,
  HeaderCheckbox: DefaultListHeaderCheckbox,
  HeaderFilter: DefaultListHeaderFilter,
  HeaderSort: DefaultListHeaderSort,
  ListItems: DefaultListItems,
  ListItemWrapper: DefaultListItemWrapper,
  ListItem: DefaultListItem,
  ListItemExpanded: DefaultListItemExpanded,
};

function List<T extends ListDataItem>({
  components,
  expandable,
  filterable,
  filterItem,
  initialExpandedIds,
  initialSelectionIds,
  itemComparisonKey = defaultProps.itemComparisonKey,
  items,
  maxItemsHeight = defaultProps.maxItemsHeight,
  selectable,
  sortable,
  sortOptions = defaultProps.sortOptions,
}: ListProps<T>) {
  const Components = { ...defaultComponents, ...components };

  const [selectAllState, setSelectAllState] = useState<CheckboxTriState>('unchecked');
  const [filterText, setFilterText] = useState('');
  const [sortDirection, setSortDirection] = useState<SortDirection>('ascending');
  const [sortValue, setSortValue] = useState<string | undefined>();
  const [visibleItems, setVisibleItems] = useState<T[]>([]);

  const [
    selectionIds,
    { removeAt: removeSelectionAt, push: addSelection, clear: clearSelections, set: setSelections },
  ] = useList<ItemId>(initialSelectionIds);

  const [, { add: addExpanded, remove: removeExpanded, has: isExpandedId }] = useSet<ItemId>(
    new Set(initialExpandedIds)
  );

  // Calculate the list of visible items, taking into account filtering and sorting constraints
  useEffect(() => {
    let currentSortValue = sortValue;
    if (!currentSortValue && sortable && sortOptions.length > 0) {
      currentSortValue = sortOptions[0].value;
      setSortValue(currentSortValue);
    }

    let newVisibleItems = [...items];

    if (sortable && sortValue) {
      let sortResult = 1;
      if (sortDirection === 'descending') {
        sortResult *= -1;
      }
      newVisibleItems.sort((a: T, b: T) => {
        if (a[sortValue] > b[sortValue]) {
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

  // Calculate the state of the "select all" header checkbox whenever the list of selected items changes
  useEffect(() => {
    if (selectionIds.length === 0) {
      setSelectAllState('unchecked');
    } else if (selectionIds.length === items.length) {
      setSelectAllState('checked');
    } else {
      setSelectAllState('indeterminate');
    }
  }, [selectionIds, items]);

  const handleHeaderFilterChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilterText(e.target.value);
  };

  const handleItemSelectToggle = (item: T, checked: boolean) => {
    const itemKey = item[itemComparisonKey];
    const currentIndex = selectionIds.indexOf(itemKey);
    const isSelected = currentIndex >= 0;

    if (isSelected && !checked) {
      removeSelectionAt(currentIndex);
    } else if (!isSelected && checked) {
      addSelection(itemKey);
    }
  };

  const handleHeaderCheckboxChange: ChangeEventHandler<HTMLInputElement> = () => {
    if (selectAllState === 'checked' || selectAllState === 'indeterminate') {
      setSelectAllState('unchecked');
      clearSelections();
    } else if (selectAllState === 'unchecked') {
      setSelectAllState('checked');
      setSelections(items.map((i) => i[itemComparisonKey]));
    }
  };

  const handleItemExpandToggle = (item: T, expanded: boolean) => {
    const itemKey = item[itemComparisonKey];
    const currentlyExpanded = isExpandedId(itemKey);

    if (currentlyExpanded && !expanded) {
      removeExpanded(itemKey);
    } else if (!currentlyExpanded && expanded) {
      addExpanded(itemKey);
    }
  };

  const handleHeaderSortDirectionChange: MouseEventHandler<HTMLButtonElement> = () => {
    setSortDirection(sortDirection === 'ascending' ? 'descending' : 'ascending');
  };

  const handleHeaderSortValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSortValue(e.target.value);
  };

  return (
    <Components.Wrapper>
      <Components.Header>
        {selectable && (
          <Components.HeaderCheckbox
            checkboxState={selectAllState}
            onChange={handleHeaderCheckboxChange}
          />
        )}
        {filterable && (
          <Components.HeaderFilter
            placeholder="Search for an item"
            onChange={handleHeaderFilterChange}
            value={filterText}
          />
        )}
        {sortable && (
          <Components.HeaderSort
            direction={sortDirection}
            onDirectionClick={handleHeaderSortDirectionChange}
            onValueChange={handleHeaderSortValueChange}
            options={sortOptions}
            value={sortValue}
          />
        )}
      </Components.Header>
      <Components.ListItems maxHeight={maxItemsHeight}>
        {visibleItems.map((item) => {
          const itemKey = item[itemComparisonKey];
          const expanded = isExpandedId(itemKey);
          return (
            <Components.ListItemWrapper key={itemKey}>
              <Components.ListItem
                key={itemKey}
                selectable={selectable}
                expandable={expandable}
                expanded={expanded}
                selected={selectionIds.includes(itemKey)}
                onSelectToggle={(e) => handleItemSelectToggle(item, e.target.checked)}
                onExpandToggle={(isExpanded) => handleItemExpandToggle(item, isExpanded)}
              >
                <Components.ItemBody item={item} />
              </Components.ListItem>
              <Components.ListItemExpanded isOpen={expanded}>
                <Components.ExpandedItemBody item={item} />
              </Components.ListItemExpanded>
            </Components.ListItemWrapper>
          );
        })}
      </Components.ListItems>
    </Components.Wrapper>
  );
}

export default List;
