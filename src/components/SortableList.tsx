import React, { useState, useEffect } from 'react';
import orderBy from 'lodash.orderby';
import uniqueId from 'lodash.uniqueid';
import Button from './Button';
import Col from './Col';
import CustomInput from './CustomInput';
import Icon from './Icon';
import Label from './Label';
import Row from './Row';
import List from './List';
import FilterHeader from './List/FilterHeader';

type Sort = {
  property: string,
  ascending: boolean
}

interface SortableListProps<T> extends List<T> {
  filterBy?: string;
  header: React.ReactNode;
  filterPlaceholder?: string;
  items: T[];
  onFilter: (filter: string, item: T) => void;
  sort?: Sort;
  sortByLabel?: string;
  sortOptions?: Sort[]
}

const SortableList = ({
  filterBy,
  filterPlaceholder,
  header,
  items,
  onFilter,
  select,
  sort,
  sortByLabel,
  sortOptions,
  ...props
}: SortableListProps) => {
  const [filter, setFilter] = useState(filterBy);
  const [sortProperty, setSortProperty] = useState(sort.property);
  const [ascending, setAscending] = useState(
    sort.ascending === undefined ? true : sort.ascending
  );
  const [sorted, setSorted] = useState(items);
  const [sortId] = useState(() => uniqueId('sort-'));

  const showSelectAll = select === 'checkbox' || select === 'switch';
  const showHeader = header || showSelectAll || onFilter || sortOptions;

  useEffect(() => {
    setSorted(
      orderBy(
        filter ? items.filter(item => onFilter(filter, item)) : items,
        [sortProperty],
        [ascending ? 'asc' : 'desc']
      )
    );
  }, [ascending, filter, items, onFilter, sortProperty]);

  return (
    <List
      header={
        showHeader ? (
          <Row className="no-gutters">
            <Col xs="12" sm="6" md="4">
              {header}
              {!header && onFilter && (
                <FilterHeader
                  placeholder={filterPlaceholder}
                  onChange={value => setFilter(value)}
                  value={filter}
                />
              )}
            </Col>
            {sortOptions && (
              <Col
                xs="12"
                sm="auto"
                className="ml-sm-auto pt-2 pt-sm-0 d-flex align-items-center"
              >
                <Label className="m-0 pr-2 text-nowrap" for={sortId}>
                  {sortByLabel}
                </Label>
                <CustomInput
                  id={sortId}
                  type="select"
                  onChange={e => setSortProperty(e.target.value)}
                  value={sortProperty}
                >
                  {sort.property === undefined && <option value="">--</option>}
                  {sortOptions.map(({ label, value }) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </CustomInput>
                {sortProperty && (
                  <Button
                    className="ml-1 pl-2 pr-0"
                    color="link"
                    disabled={!sortProperty}
                    id="sort-button"
                    onClick={() => setAscending(!ascending)}
                  >
                    <Icon
                      name={ascending ? 'arrow-down' : 'arrow-up'}
                      size="lg"
                    />
                    <span className="sr-only">Change Sort Direction</span>
                  </Button>
                )}
              </Col>
            )}
          </Row>
        ) : null
      }
      items={sorted}
      flush
      select={select}
      {...props}
    />
  );
};

SortableList.defaultProps = {
  ...List.defaultProps,
  filterPlaceholder: 'Search',
  items: [],
  sort: {},
  sortByLabel: 'Sort by'
};

export default SortableList;
