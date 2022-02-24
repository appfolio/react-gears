import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import React from 'react';
import type { ReactNode, MouseEvent } from 'react';
import Button from './Button';
import Icon from './Icon';
import Label from './Label';
import type { HeaderProps } from './SortableTable/Header';
import Header from './SortableTable/Header';
import type { TableProps } from './Table';
import Table from './Table';

function generateColumnClassName(column, truncate = false) {
  return classnames(
    truncate && 'text-truncate',
    column.align && `text-${column.align}`,
    column.className
  );
}

/* function defaultRenderRow(
  row,
  columns,
  rowClassName,
  rowExpanded,
  rowOnClick,
  truncate,
  rowSelected
) {
  const expanded = rowExpanded(row);
  return [
    <tr
      key={row.key}
      className={classnames(
        { 'table-primary': rowSelected && rowSelected(row) },
        rowClassName(row)
      )}
      onClick={(e) => rowOnClick && rowOnClick(row, e)}
      role={rowOnClick ? 'button' : null}
    >
      {columns.map((column) => (
        <td
          key={column.key}
          className={generateColumnClassName(column, truncate)}
        >
          {column.cell(row, expanded)}
        </td>
      ))}
    </tr>,
    expanded && <tr key={row.key ? `${row.key}-hidden` : null} hidden />,
    expanded && (
      <tr
        key={row.key ? `${row.key}-expanded` : null}
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
*/

type HorizontalAlignment = 'left' | 'center' | 'right';

export interface SortableColumn<T>
  extends Omit<HeaderProps, 'children' | 'onSort'> {
  align?: HorizontalAlignment;
  cell: (row: T, expanded?: boolean) => ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  key: string;
  onSort?: (ascending: boolean) => void;
  width?: string;
}

interface SortableTableProps<T> extends Omit<TableProps, 'children'> {
  className?: string;
  allSelected?: boolean;
  columns: SortableColumn<T>[];
  expandableColumn?: Partial<SortableColumn<T>>;
  footer?: React.ReactNode;
  onExpand?: (row: T) => void;
  onSelect: (row: T, selected: boolean) => void;
  onSelectAll?: (selected: boolean) => void;
  rowSelected?: (row: T) => boolean;
  rows: T[];
  rowClassName?: (row: T) => ReactNode | undefined;
  rowExpanded?: (row: T) => ReactNode | boolean;
  rowOnClick?: (row: T, evt: MouseEvent) => void;
  truncate?: boolean;
}

const defaultProps = {};

function SortableTable<T>(props: SortableTableProps<T>) {
  const {
    columns,
    header,
    footer,
    rowClassName,
    rowOnClick,
    rows,
    style,
    truncate,
    allSelected,
    onSelect,
    onSelectAll,
    rowSelected,
    expandableColumn,
    onExpand,
    rowExpanded,
    renderRow,
    ...remainingProps
  } = props;
  const selectable = rowSelected;
  const expandable = onExpand;
  const showColgroup =
    selectable || expandable || columns.some((column) => column.width);
  const showFooter = columns.some((column) => column.footer);
  const tableStyle = {
    tableLayout: truncate ? 'fixed' : 'auto',
    ...style,
  };

  const cols = [...columns];

  if (selectable) {
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
              onChange={(e) => onSelect(row, e.target.checked)}
            />
          </>
        );
      },
      width: '2rem',
    });
  }

  if (expandable) {
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
          {cols.map((column, index) => (
            <Header
              active={column.active}
              ascending={column.ascending}
              className={generateColumnClassName(column, truncate)}
              key={index}
              onSort={() =>
                column.onSort ? column.onSort(!column.ascending) : null
              }
            >
              {column.header}
            </Header>
          ))}
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
