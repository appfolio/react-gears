import React, { useCallback, useEffect, useState } from 'react';
import type { Key } from 'react';
import orderBy from 'lodash.orderby';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';
import Paginator from './Paginator';
import SortableTable from './SortableTable/SortableTable';
import type {
  SortableColumn,
  SortableTableProps,
  SortableTableRow,
} from './SortableTable/SortableTable';

interface SortProps {
  column?: Key;
  ascending: boolean;
}

export interface UncontrolledTableProps<T> extends SortableTableProps<T> {
  expandable: boolean;
  expanded: T | T[];
  page: number;
  selectable: boolean;
  selected: T | T[];
  sort: SortProps;
  paginated: boolean;
  onPageChange: (page: number) => void;
  onSort: (sort?: SortProps) => void;
  onVisibleRowsChange: (rows: SortableTableRow<T>[]) => void;
  pageSize: number;
}

function isEqualUsingKeys(
  newArray: { key?: Key }[],
  oldArray: { key?: Key }[]
) {
  const hasKey = (element: { key?: Key }) => element.key !== undefined;
  if (!(newArray.every(hasKey) && oldArray.every(hasKey))) {
    return newArray === oldArray;
  }

  const keys = oldArray.map((el) => el.key).sort();
  const newKeys = newArray.map((el) => el.key).sort();
  return isEqual(keys, newKeys);
}

function forceArray<T>(potentialArray: T | T[]): T[] {
  return Array.isArray(potentialArray) ? potentialArray : [potentialArray];
}

export default function UncontrolledTable<T>({
  allSelected = false,
  columns,
  expandable = false,
  expanded = [],
  onExpand = () => {},
  onPageChange = () => {},
  onSelect,
  onSelectAll = () => {},
  onSort = () => {},
  onVisibleRowsChange = () => {},
  page: pageProp = 0,
  pageSize = 10,
  paginated = false,
  rowExpanded,
  rows = [],
  selectable = false,
  selected = [],
  sort: sortProp = { ascending: true },
  ...remainingProps
}: UncontrolledTableProps<T>) {
  console.log(columns, rows, expandable, rowExpanded, expanded);
  const [sort, setSort] = useState(sortProp);

  const [expandedInternal, setExpandedInternal] = useState(
    forceArray(expanded)
  );

  // Just in case the `expanded` prop changes, make sure the component state stays in sync
  useEffect(() => {
    setExpandedInternal(forceArray(expanded));
  }, [expanded]);

  const [selectedInternal, setSelectedInternal] = useState(
    forceArray(selected)
  );
  useEffect(() => {
    setSelectedInternal(forceArray(selected));
  }, [selected]);

  const [page, setPage] = useState(pageProp);
  const [allSelectedInternal, setAllSelectedInternal] = useState(allSelected);

  const sortBy = ({ column, ascending }: SortProps) => {
    let newSort;
    if (sort.column === column) {
      newSort = { column, ascending };
    } else {
      newSort = { column, ascending: true };
    }
    setSort(newSort);
    onSort(newSort);
  };

  const getSortableColumns = (): SortableColumn<T>[] =>
    columns
      .filter((col) => !col.hidden)
      .map((col) => {
        if (col.sortable !== false) {
          return {
            active: sort.column === col.key,
            ascending: sort.ascending,
            onSort: (ascending: boolean) =>
              sortBy({ column: col.key, ascending }),
            sortable: true,
            ...col,
          };
        }
        return col;
      });

  const getVisibleRows = (): SortableTableRow<T>[] => {
    const { ascending, column } = sort;
    const sortedRows = orderBy(
      rows,
      [column],
      [ascending ? 'asc' : 'desc']
    ) as SortableTableRow<T>[];
    if (paginated) {
      const start = page * pageSize;
      const end = start + pageSize;
      return sortedRows.slice(start, end);
    }
    return sortedRows;
  };

  const handlePageChange = useCallback(
    (current) => {
      const newPage = current - 1;
      setPage(newPage);
      onPageChange(newPage);
    },
    [onPageChange]
  );

  /* const handleRowExpanded = useCallback((row: T) => {
    console.log(
      'handleRowEzpanded',
      some(expandedInternal, row),
      expandedInternal
    );
    console.log(rowExpanded && rowExpanded(row));
    if (rowExpanded && some(expandedInternal, row)) {
      return rowExpanded(row);
    }
    return false;
  }); */
  const handleRowExpanded = (row: T) => {
    if (rowExpanded && some(expandedInternal, row)) {
      return rowExpanded(row);
    }
    return false;
  };

  const handleRowOnExpand = useCallback(
    (row: T) => {
      const newExpanded = some(expandedInternal, row)
        ? expandedInternal.filter((expandedRow) => !isEqual(expandedRow, row))
        : [...expandedInternal, row];
      setExpandedInternal(newExpanded);
      onExpand(row);
    },
    [expandedInternal, onExpand]
  );

  const handleRowSelected = useCallback(
    (row: T) => some(selectedInternal, row),
    [selectedInternal]
  );

  const handleRowOnSelect = useCallback(
    (row: T) => {
      const newSelections = some(selectedInternal, row)
        ? selectedInternal.filter((selectedRow) => !isEqual(selectedRow, row))
        : [...selectedInternal, row];

      setSelectedInternal(newSelections);
      onSelect && onSelect(row);
    },
    [selectedInternal, onSelect]
  );

  const handleRowOnSelectAll = useCallback((selected: boolean) => {
    const newSelection = selected ? rows : [];

    setSelectedInternal(newSelection);
    setAllSelectedInternal(selected);
    onSelectAll(selected);
  }, []);

  /* useEffect(() => {
    setSelected([]);
  }, [selectable]); */

  /* useEffect(() => {
    setExpanded([]);
  }, [expandable]); */

  /* useEffect(() => {
    setPage(0);
  }, [rows]); */

  /* useEffect(() => {
    onVisibleRowsChange(getVisibleRows());
  }, [page, sort, paginated, pageSize, rows]); */

  /* useEffect(() => {
    if (!isEqualUsingKeys(expanded, forceArray(expandedProp))) {
      setExpanded(forceArray(expandedProp));
    }
  }, [expandedProp]); */
  /* if (!isEqualUsingKeys(expanded, forceArray(expandedProp))) {
    //console.log('settingexpanded', expandedProp);
    console.log('unequal', expandedProp);
    setExpanded(forceArray(expandedProp));
  } */

  /* useEffect(() => {
    console.log('prop', selectedProp);
    if (!isEqualUsingKeys(selected, forceArray(selectedProp))) {
      console.log('setting', selectedProp);
      setSelected(forceArray(selectedProp));
    }
  }, [selectedProp]); */
  /* if (!isEqualUsingKeys(selected, forceArray(selectedProp))) {
    //console.log('settingselected', selectedProp);
    setSelected(forceArray(selectedProp));
  } */

  return (
    <div>
      <SortableTable
        {...remainingProps}
        allSelected={allSelectedInternal}
        columns={getSortableColumns()}
        onExpand={expandable ? handleRowOnExpand : undefined}
        onSelect={selectable ? handleRowOnSelect : undefined}
        onSelectAll={selectable ? handleRowOnSelectAll : undefined}
        rowExpanded={expandable ? handleRowExpanded : undefined}
        rows={getVisibleRows()}
        rowSelected={selectable ? handleRowSelected : undefined}
      />
      {paginated && [
        <hr key="separator" />,
        <Paginator
          key="paginator"
          currentPage={page + 1}
          onClick={handlePageChange}
          perPage={pageSize}
          totalItems={rows.length}
        />,
      ]}
    </div>
  );
}
