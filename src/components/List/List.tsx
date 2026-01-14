import React, { useEffect, useRef, useState } from 'react';
import { ListGroupProps } from 'reactstrap';
import useDeepCompareEffect from 'use-deep-compare-effect';
import useMap from '../../hooks/useMap';
import { useUniqueId } from '../../util/uniqueId';
import Input from '../Input/Input';
import Col from '../Layout/Col';
import Row from '../Layout/Row';
import ScrollContainer from '../ScrollContainer/ScrollContainer';
import FilterHeader, { FilterHeaderProps } from './components/FilterHeader';
import SortHeader, { SortHeaderProps } from './components/SortHeader';
import ListGroup from './ListGroup';
import ListGroupItem from './ListGroupItem';
import ListItem, { ListItemProps } from './ListItem';

interface Sort {
  property?: string | string[];
  ascending?: boolean;
}

interface Item {
  expanded?: boolean;
  key?: string;
  [key: string]: any;
}

export interface ListProps<T> extends Omit<ListGroupProps, 'onSelect'> {
  children?: ListItemProps<T>['children'];
  filter?: string;
  filterPlaceholder?: string;
  header?: React.ReactNode;
  height?: string | number;
  scrollPositionKey?: string;
  onExpand?: ListItemProps<T>['onExpand'];
  onFilter?: FilterHeaderProps['onChange'];
  itemClassName?: string;
  items?: T[];
  select?: 'checkbox' | 'switch' | 'radio' | '';
  selected?: T[];
  onSelect?: (items: T[]) => void;
  onSort?: ({ property, ascending }: Sort) => void;
  selectedKeyMapper?: (item: T) => any;
  sort?: Sort;
  sortByLabel?: SortHeaderProps['sortByLabel'];
  sortOptions?: SortHeaderProps['sortOptions'];
  selectable?: (item: T) => boolean;
}

const defaultProps = {
  children: () => null,
  filterPlaceholder: 'Search',
  items: [],
  onSelect: () => {},
  select: '' as ListProps<any>['select'],
  selected: [],
  selectedKeyMapper: (x: any) => x,
  sort: {},
  sortByLabel: 'Sort by',
  selectable: () => true,
};

function List<T extends Item>({
  children: render = defaultProps.children,
  filter,
  filterPlaceholder = defaultProps.filterPlaceholder,
  flush,
  header,
  height,
  scrollPositionKey,
  itemClassName,
  items = defaultProps.items,
  onExpand,
  onFilter,
  onSelect = defaultProps.onSelect,
  onSort,
  select = defaultProps.select,
  selected = defaultProps.selected,
  selectedKeyMapper = defaultProps.selectedKeyMapper,
  sort = defaultProps.sort,
  sortByLabel = defaultProps.sortByLabel,
  sortOptions,
  selectable = defaultProps.selectable,
  ...props
}: ListProps<T>) {
  const {
    map: selection,
    has: hasItem,
    add: addItem,
    remove: removeItem,
    clear: clearSelection,
    replace: replaceSelection,
  } = useMap(selected, selectedKeyMapper);
  const selectAllId = useUniqueId('selectall-', 1);
  const selectAllRef = useRef<HTMLInputElement>(null);

  useDeepCompareEffect(() => replaceSelection(selected), [selected, replaceSelection]);

  useDeepCompareEffect(() => {
    const includes = (xs: T[], x: T) => xs.map(selectedKeyMapper).includes(selectedKeyMapper(x));
    let hasRemovedItems = false;
    selection.forEach((item) => {
      if (!includes(items, item)) {
        removeItem(item);
        hasRemovedItems = true;
      }
    });

    if (hasRemovedItems) {
      onSelect(Array.from(selection.values()));
    }
  }, [items, Array.from(selection.values()), selectedKeyMapper, onSelect]);

  useDeepCompareEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate =
        items.length > 0 && selection.size > 0 && selection.size !== items.length;
    }
  }, [items, Array.from(selection.values())]);

  const handleSelection = (item: T, checked?: boolean) => {
    let newSelection = selection;

    if (select === 'checkbox' || select === 'switch') {
      if (hasItem(item) && !checked) {
        newSelection = removeItem(item);
      } else if (checked) {
        newSelection = addItem(item);
      }
    } else if (!hasItem(item)) {
      clearSelection();
      newSelection = addItem(item);
    }
    onSelect(Array.from(newSelection.values()));
  };

  const handleSelectAll = () => {
    const selectableItems = items.filter((item) => selectable(item));
    const unselectableItems = items.filter((item) => !selectable(item));
    const unselectableSelectedItems = unselectableItems.filter((item) => selected.includes(item));
    const allSelectableSelected = selectableItems.every((item) => hasItem(item));
    let newSelection;

    if (allSelectableSelected) {
      // deselecting all items except those are selected and unselectable
      newSelection = unselectableSelectedItems;
    } else {
      // selecting all selectable items
      newSelection = unselectableSelectedItems.concat(selectableItems);
    }
    replaceSelection(newSelection);
    onSelect(Array.from(newSelection));
  };

  const [sortProperty, setSortProperty] = useState(sort.property);
  const ascendingInitial = sort.ascending === undefined ? true : sort.ascending;
  const [ascending, setAscending] = useState(ascendingInitial);

  useEffect(() => {
    if (!onSort) {
      return;
    }

    if (ascending !== ascendingInitial || sortProperty !== sort.property) {
      onSort({ property: sortProperty, ascending });
    }
  }, [ascending, ascendingInitial, onSort, sort.property, sortProperty]);

  const showHeader = header || select === 'checkbox' || select === 'switch' || onFilter || onSort;

  return (
    <ListGroup flush={flush} tag="div" {...props}>
      {showHeader && (
        <ListGroupItem tag="header" className="d-flex align-items-center js-header">
          {select && select !== 'radio' && (
            <div className="h-100 d-flex align-items-center me-3">
              <Input
                id={selectAllId}
                type={select}
                checked={items.length > 0 && selection.size === items.length}
                disabled={items.length === 0}
                label={<span className="visually-hidden">Select all</span>}
                onChange={() => handleSelectAll()}
                innerRef={selectAllRef}
                data-testid="select-all"
              />
            </div>
          )}
          <div className="w-100">
            {!sortOptions && !onFilter ? (
              header
            ) : (
              <Row className="gx-0">
                <Col xs="12" sm="6" md="4">
                  {header}
                  {!header && onFilter && (
                    <FilterHeader
                      placeholder={filterPlaceholder}
                      onChange={onFilter}
                      value={filter}
                    />
                  )}
                </Col>
                {sortOptions && (
                  <SortHeader
                    ascending={ascending}
                    sortByLabel={sortByLabel}
                    sortOptions={sortOptions}
                    sortProperty={sortProperty}
                    onChangeAscending={setAscending}
                    onChangeProperty={setSortProperty}
                  />
                )}
              </Row>
            )}
          </div>
        </ListGroupItem>
      )}
      <ScrollContainer height={height} scrollPositionKey={scrollPositionKey}>
        <ListGroup flush={flush}>
          {items.map((item, i) => (
            <ListItem
              id={item.key}
              className={itemClassName}
              expanded={item.expanded || false}
              expandedColor={item.expandedColor}
              item={item}
              key={item.key || i}
              select={select}
              selected={hasItem(item)}
              onSelect={handleSelection}
              onExpand={onExpand}
              selectable={selectable}
            >
              {render}
            </ListItem>
          ))}
        </ListGroup>
      </ScrollContainer>
    </ListGroup>
  );
}

List.defaultProps = defaultProps;

export default List;
