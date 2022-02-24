import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import type { Key, MouseEvent, PropsWithChildren, ReactNode } from 'react';
import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Label from '../Label';
import type { HeaderProps } from './Header';
import Header from './Header';
import type { TableProps } from '../Table';
import Table from '../Table';

type HorizontalAlignment = 'left' | 'center' | 'right';

export interface SortableColumn<T>
  extends Omit<HeaderProps, 'children' | 'onSort'> {
  align?: HorizontalAlignment;
  cell?: (row: T, expanded?: boolean) => ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  hidden?: boolean;
  key?: string;
  onSort?: (ascending: boolean) => void;
  sortable?: boolean;
  width?: string;
}

export type SortableTableRow<T> = T & { key: Key | undefined };
type RowClassNameFunction<T> = (row: T) => string | undefined;
type RowExpandedFunction<T> = (row: T) => ReactNode;
type RowOnClickFunction<T> = (row: T, evt: MouseEvent) => void;
type RowSelectedFunction<T> = (row: T) => boolean;

export interface SortableTableProps<T> extends Omit<TableProps, 'children'> {
  allSelected?: boolean;
  columns: SortableColumn<T>[];
  expandableColumn?: Partial<SortableColumn<T>>;
  footer?: ReactNode;
  key?: string;
  onExpand?: (row: T) => void;
  onSelect?: (row: T, selected?: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  /* eslint-disable-next-line no-use-before-define */
  renderRow?: typeof defaultRenderRow;
  rowClassName?: RowClassNameFunction<T>;
  rowExpanded?: RowExpandedFunction<T>;
  rowOnClick?: RowOnClickFunction<T>;
  rows?: SortableTableRow<T>[];
  rowSelected?: RowSelectedFunction<T>;
  truncate?: boolean;
}

function generateColumnClassName<T>(
  column: SortableColumn<T>,
  truncate = false
) {
  return classnames(
    truncate && 'text-truncate',
    column.align && `text-${column.align}`,
    column.className
  );
}

function defaultRenderRow<T>(
  row: SortableTableRow<T>,
  columns: SortableColumn<T>[],
  rowClassName: RowClassNameFunction<T> = () => '',
  rowExpanded: RowExpandedFunction<T> = () => false,
  rowOnClick?: RowOnClickFunction<T>,
  truncate?: boolean,
  rowSelected?: RowSelectedFunction<T>
): ReactNode {
  const expanded = rowExpanded(row);
  return [
    <tr
      key={row.key}
      className={classnames(
        { 'table-primary': rowSelected && rowSelected(row) },
        rowClassName(row)
      )}
      onClick={(e) => rowOnClick && rowOnClick(row, e)}
      role={rowOnClick ? 'button' : undefined}
    >
      {columns.map((column) => (
        <td
          key={column.key}
          className={generateColumnClassName(column, truncate)}
        >
          {column.cell && column.cell(row, expanded !== false)}
        </td>
      ))}
    </tr>,
    expanded && <tr key={row.key ? `${row.key}-hidden` : undefined} hidden />,
    expanded && (
      <tr
        key={row.key ? `${row.key}-expanded` : undefined}
        className={classnames(
          { 'table-primary': rowSelected && rowSelected(row) },
          'tr-expanded'
        )}
      >
        <td className="border-top-0" colSpan={columns.length}>
          {expanded}
        </td>
      </tr>
    ),
  ];
}

const defaultProps = {
  renderRow: defaultRenderRow,
  rowClassName: () => undefined,
  rowExpanded: () => false,
  rows: [],
  truncate: false,
};

function SortableTable<T>({
  allSelected,
  columns,
  expandableColumn = {},
  header,
  footer,
  onExpand,
  onSelect,
  onSelectAll,
  renderRow = defaultProps.renderRow,
  rowClassName = defaultProps.rowClassName,
  rowExpanded = defaultProps.rowExpanded,
  rowOnClick,
  rows = defaultProps.rows,
  rowSelected,
  truncate = defaultProps.truncate,
  style,
  ...remainingProps
}: PropsWithChildren<SortableTableProps<T>>) {
  const showColgroup =
    rowSelected || onExpand || columns.some((column) => column.width);

  const showFooter = columns.some((column) => column.footer);

  const tableStyle = {
    tableLayout: truncate ? 'fixed' : 'auto',
    ...style,
  };

  const cols = [...columns];

  if (rowSelected) {
    const selectAllId = uniqueId('select-all-');
    cols.unshift({
      align: 'center',
      key: 'select',
      header: (
        <>
          <Label for={selectAllId} hidden>
            Select all rows
          </Label>
          <input
            type="checkbox"
            className="mx-1"
            id={selectAllId}
            checked={allSelected}
            onClick={(e) => e.stopPropagation()}
            onChange={(e) => onSelectAll && onSelectAll(e.target.checked)}
          />
        </>
      ),
      cell: (row) => {
        const selectRowId = uniqueId('select-row-');
        return (
          <>
            <Label for={selectRowId} hidden>
              Select row
            </Label>
            <input
              id={selectRowId}
              type="checkbox"
              className="mx-1"
              checked={rowSelected(row)}
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => onSelect && onSelect(row, e.target.checked)}
            />
          </>
        );
      },
      width: '2rem',
    });
  }

  if (onExpand) {
    cols.push({
      align: 'center',
      key: 'expand',
      cell: (row, expanded) => (
        <Button
          className="px-2 py-0"
          color="link"
          onClick={() => onExpand(row)}
          aria-label="Expand row"
        >
          <Icon name={expanded ? 'angle-up' : 'angle-down'} />
        </Button>
      ),
      width: '2rem',
      ...expandableColumn,
    });
  }
  return (
    <Table style={tableStyle} {...remainingProps}>
      {showColgroup && (
        <colgroup>
          {cols.map((column) => (
            <col key={column.key} style={{ width: column.width }} />
          ))}
        </colgroup>
      )}
      <thead>
        {header}
        <tr>
          {cols.map((column) => {
            const headerProps: HeaderProps = {
              active: column.active,
              ascending: column.ascending,
              className: generateColumnClassName(column, truncate),
            };
            if (column.onSort) {
              headerProps.onSort = () =>
                column.onSort && column.onSort(!column.ascending);
            }
            return (
              <Header key={column.key} {...headerProps}>
                {column.header}
              </Header>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) =>
          renderRow(
            row,
            cols,
            rowClassName,
            rowExpanded,
            rowOnClick,
            truncate,
            rowSelected
          )
        )}
      </tbody>
      {(showFooter || footer) && (
        <tfoot>
          {showFooter && (
            <tr>
              {cols.map((column) => (
                <td
                  key={column.key}
                  className={generateColumnClassName(column, truncate)}
                >
                  {column.footer}
                </td>
              ))}
            </tr>
          )}
          {footer}
        </tfoot>
      )}
    </Table>
  );
}

export default SortableTable;
