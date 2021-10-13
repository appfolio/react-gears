import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import orderBy from 'lodash.orderby';
import List from './List';

const SortableList = ({ filterBy, onFilter, items, scrollPositionKey, sort, sortOptions, ...props }) => {
  const [filter, setFilter] = useState(filterBy);
  const [sortProperty, setSortProperty] = useState(sort.property);
  const [ascending, setAscending] = useState(sort.ascending === undefined ? true : sort.ascending);
  const [sorted, setSorted] = useState(items);

  useEffect(() => {
    const properties = typeof sortProperty === 'string' ? [sortProperty] : sortProperty;
    const direction = properties?.map(() => ascending ? 'asc' : 'desc');

    setSorted(
      orderBy(
        filter ? items.filter(item => onFilter(filter, item)) : items,
        properties,
        direction
      )
    );
  }, [ascending, filter, items, onFilter, sortProperty]);

  const handleSort = (sortBy) => {
    setSortProperty(sortBy.property);
    setAscending(sortBy.ascending);
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
};

SortableList.propTypes = {
  ...List.propTypes,
  filterBy: PropTypes.any,
  items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

SortableList.defaultProps = {
  ...List.defaultProps,
  items: [],
};

export default SortableList;
