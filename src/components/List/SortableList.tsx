import orderBy from 'lodash.orderby';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import List, { ListProps } from './List';

export interface SortableListProps<T> extends Omit<ListProps<T>, 'onFilter'> {
  filterBy: string; // initial filter value
  onFilter?: (filter: string, item: T) => boolean;
}

const defaultProps = {
  ...List.defaultProps,
};

function SortableList<T>({
  filterBy,
  onFilter,
  items = defaultProps.items,
  scrollPositionKey,
  sort = defaultProps.sort,
  sortOptions,
  ...props
}: SortableListProps<T>) {
  const [filter, setFilter] = useState(filterBy);
  const [sortProperty, setSortProperty] = useState(sort.property);
  const [ascending, setAscending] = useState<boolean | undefined>(
    sort.ascending === undefined ? true : sort.ascending
  );
  const [sorted, setSorted] = useState(items);

  useEffect(() => {
    const properties = typeof sortProperty === 'string' ? [sortProperty] : sortProperty;
    const direction = properties?.map(() => (ascending ? 'asc' : 'desc'));

    setSorted(
      orderBy(
        filter && onFilter ? items.filter((item: T) => onFilter(filter, item)) : items,
        properties,
        direction
      )
    );
  }, [ascending, filter, items, onFilter, sortProperty]);

  const handleSort = (sortBy: SortableListProps<T>['sort']) => {
    setSortProperty(sortBy?.property);
    setAscending(sortBy?.ascending);
  };

  return (
    <List
      filter={filter}
      onFilter={onFilter && setFilter}
      onSort={sortOptions && handleSort}
      sort={{ property: sortProperty, ascending }}
      sortOptions={sortOptions}
      items={sorted}
      flush
      scrollPositionKey={scrollPositionKey}
      {...props}
    />
  );
}

SortableList.propTypes = {
  ...List.propTypes,
  filterBy: PropTypes.any,
};

SortableList.defaultProps = defaultProps;

export default SortableList;
