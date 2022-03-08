import React, { useCallback, useEffect, useRef, useState } from 'react';
import orderBy from 'lodash.orderby';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';
import noop from 'lodash.noop';
import Paginator from './Paginator';
import SortableTable from './SortableTable/SortableTable';
import type {
  SortableColumn,
  SortableTableProps,
  SortableTableRow,
} from './SortableTable/SortableTable';

interface SortProps {
  column?: string;
  ascending: boolean;
}
export interface UncontrolledTableProps<T>
  extends Omit<SortableTableProps<T>, 'rowSelected'> {
  expandable?: boolean;
  expanded?: T | T[];
  onPageChange?: (page: number) => void;
  onSort?: (sort?: SortProps) => void;
  onVisibleRowsChange?: (rows: SortableTableRow<T>[]) => void;
  page?: number;
  pageSize?: number;
  paginated?: boolean;
  selectable?: boolean;
  selected?: T | T[];
  sort?: SortProps;
}

function forceArray<T>(potentialArray: T | T[]): T[] {
  return Array.isArray(potentialArray) ? potentialArray : [potentialArray];
}

const defaultProps = {
  expandable: false,
  expanded: [],
  onExpand: noop,
  onPageChange: noop,
  onSelect: noop,
  onSelectAll: noop,
  onSort: noop,
  onVisibleRowsChange: noop,
  page: 0,
  pageSize: 10,
  paginated: false,
  selectable: false,
  selected: [],
  sort: { ascending: true },
};

function UncontrolledTable<T>({
  allSelected,
  columns,
  expandable = defaultProps.expandable,
  expanded = defaultProps.expanded,
  onExpand = defaultProps.onExpand,
  onPageChange = defaultProps.onPageChange,
  onSelect = defaultProps.onSelect,
  onSelectAll = defaultProps.onSelectAll,
  onSort = defaultProps.onSort,
  onVisibleRowsChange = defaultProps.onVisibleRowsChange,
  page = defaultProps.page,
  pageSize = defaultProps.pageSize,
  paginated = defaultProps.paginated,
  rowExpanded,
  rows,
  selectable = defaultProps.selectable,
  selected = defaultProps.selected,
  sort = defaultProps.sort,
  ...remainingProps
}: UncontrolledTableProps<T>) {
  const [sortInternal, setSortInternal] = useState(sort);

  const [expandedInternal, setExpandedInternal] = useState(
    forceArray(expanded)
  );

  // When the `expanded` prop changes, make sure the component state stays in sync
  const prevExpanded = useRef(expanded);
  if (prevExpanded.current !== expanded) {
    setExpandedInternal(forceArray(expanded));
    prevExpanded.current = expanded;
  }

  const [allSelectedInternal, setAllSelectedInternal] = useState(allSelected);
  const [selectedInternal, setSelectedInternal] = useState(
    forceArray(selected)
  );

  // When the `selected` prop changes, make sure the component state stays in sync
  const prevSelected = useRef(selected);
  if (prevSelected.current !== selected) {
    setSelectedInternal(forceArray(selected));
    prevSelected.current = selected;
  }

  const [pageInternal, setPageInternal] = useState(page);

  // If the rows prop changes, we need to revert to page 0.
  const prevRows = useRef(rows);
  if (prevRows.current !== rows) {
    setPageInternal(0);
    prevRows.current = rows;
  }

  // If the selectable prop changes, the selections stored in state need to be cleared
  const prevSelectable = useRef(selectable);
  if (prevSelectable.current !== selectable) {
    setSelectedInternal([]);
    prevSelectable.current = selectable;
  }

  // If the expandable prop changes, the expanded rows stored in state need to be cleared
  const prevExpandable = useRef(expandable);
  if (prevExpandable.current !== expandable) {
    setExpandedInternal([]);
    prevExpandable.current = expandable;
  }

  // Add sortable properties to the columns that are configured as sortable
  const getSortableColumns = (): SortableColumn<T>[] =>
    columns
      .filter((col: SortableColumn<T>) => !col.hidden)
      .map((col: SortableColumn<T>) => {
        if (col.sortable !== false) {
          return {
            active: sortInternal.column === col.key,
            ascending: sortInternal.ascending,
            onSort: (ascending: boolean) => {
              const column = col.key;
              const newSort = {
                column,
                ascending: sortInternal.column === column ? ascending : true,
              };
              setSortInternal(newSort);
              onSort(newSort);
            },
            sortable: true,
            ...col,
          };
        }
        return col;
      });

  // Get the rows that are currently visible based on the combination of pagination and sorting
  const getVisibleRows = useCallback((): SortableTableRow<T>[] => {
    const { ascending, column } = sortInternal;
    const sortedRows = orderBy(
      rows,
      [column],
      [ascending ? 'asc' : 'desc']
    ) as SortableTableRow<T>[];
    if (paginated) {
      const start = pageInternal * pageSize;
      const end = start + pageSize;
      return sortedRows.slice(start, end);
    }
    return sortedRows;
  }, [pageInternal, pageSize, paginated, rows, sortInternal]);

  // Any of the prop changes that affect the rows that are currently visible
  //  will cause the onVisibleRowsChange callback to be called
  useEffect(() => {
    onVisibleRowsChange(getVisibleRows());
  }, [
    pageInternal,
    sort,
    paginated,
    pageSize,
    rows,
    getVisibleRows,
    onVisibleRowsChange,
  ]);

  const handlePageChange = useCallback(
    (current) => {
      const newPage = current - 1;
      setPageInternal(newPage);
      onPageChange(newPage);
    },
    [onPageChange]
  );

  const handleRowExpanded = useCallback(
    (row: T) => {
      if (rowExpanded && some(expandedInternal, row)) {
        return rowExpanded(row);
      }
      return false;
    },
    [rowExpanded, expandedInternal]
  );

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
      onSelect(row);
    },
    [selectedInternal, onSelect]
  );

  const handleRowOnSelectAll = useCallback(
    (allRowsSelected: boolean) => {
      if (!rows) {
        return;
      }
      const newSelection: SortableTableRow<T>[] = allRowsSelected ? rows : [];

      setSelectedInternal(newSelection);
      setAllSelectedInternal(allRowsSelected);
      onSelectAll(allRowsSelected);
    },
    [onSelectAll, rows]
  );

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
      {paginated && (
        <>
          <hr key="separator" />,
          <Paginator
            key="paginator"
            currentPage={pageInternal + 1}
            onClick={handlePageChange}
            perPage={pageSize}
            totalItems={rows ? rows.length : 0}
          />
        </>
      )}
    </div>
  );
}

export default UncontrolledTable;
