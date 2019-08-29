import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from './SortableTable/Header.js';
import Button from './Button';
import Icon from './Icon';
import Table from './Table.js';

function generateColumnClassName(column, truncate = false) {
  return classnames(
    truncate && 'text-truncate',
    column.align && `text-${column.align}`,
    column.className
  );
}

class SortableTable extends React.Component {
  static propTypes = {
    ...Table.propTypes,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        align: PropTypes.oneOf(['left', 'center', 'right']),
        active: PropTypes.bool,
        ascending: PropTypes.bool,
        cell: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
        footer: PropTypes.node,
        header: PropTypes.node,
        key: PropTypes.string,
        onSort: PropTypes.func,
        width: PropTypes.string
      })
    ).isRequired,
    rows: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    expandableColumn: PropTypes.object,
    footer: PropTypes.node,
    rowClassName: PropTypes.func,
    onExpand: PropTypes.func,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    rowExpanded: PropTypes.func,
    rowSelected: PropTypes.func,
    rowOnClick: PropTypes.func,
    allSelected: PropTypes.bool,
    truncate: PropTypes.bool
    // TODO? support sort type icons (FontAwesome has numeric, A->Z, Z->A)
  };

  static defaultProps = {
    ...Table.defaultProps,
    expandableColumn: {},
    rows: [],
    rowClassName: () => undefined,
    rowExpanded: () => false,
    truncate: false
  };

  renderRow(row, columns, rowClassName, rowExpanded, rowOnClick, truncate, rowSelected) {
    const expanded = rowExpanded(row);
    return [
      <tr
        key={row.key}
        className={classnames({ 'table-info': rowSelected && rowSelected(row) }, rowClassName(row))}
        onClick={e => rowOnClick && rowOnClick(row, e)}
        role={rowOnClick ? 'button' : null}
      >
        {columns.map(column => (
          <td key={column.key} className={generateColumnClassName(column, truncate)}>
            {column.cell(row)}
          </td>
        ))}
      </tr>,
      expanded && <tr key={row.key ? `${row.key}-hidden` : null} hidden />,
      expanded && (
        <tr key={row.key ? `${row.key}-expanded` : null} className="tr-expanded">
          <td className="border-top-0" colSpan={columns.length}>
            {expanded}
          </td>
        </tr>
      ),
    ];
  }

  render() {
    const {
      columns, footer, rowClassName, rowOnClick, rows, style, truncate,
      allSelected, onSelect, onSelectAll, rowSelected,
      expandableColumn, onExpand, rowExpanded,
      ...props
    } = this.props;
    const selectable = rowSelected;
    const expandable = onExpand;
    const showColgroup = selectable || expandable || columns.some(column => column.width);
    const showFooter = columns.some(column => column.footer);
    const tableStyle = {
      tableLayout: truncate ? 'fixed' : 'auto',
      ...style
    };

    const cols = [...columns];

    if (selectable) {
      cols.unshift({
        align: 'center',
        key: 'select',
        header: (
          <input
            type="checkbox"
            className="mx-1"
            checked={allSelected}
            onChange={e => onSelectAll(e.target.checked)}
          />
        ),
        cell: row => (
          <input
            type="checkbox"
            className="mx-1"
            checked={rowSelected(row)}
            onChange={e => onSelect(row, e.target.checked)}
          />
        ),
        width: '2rem'
      });
    }

    if (expandable) {
      cols.push({
        align: 'center',
        key: 'expand',
        cell: row => (
          <Button
            className="px-2 py-0"
            color="link"
            onClick={() => onExpand(row)}
          >
            <Icon name="ellipsis-v" size="lg" />
          </Button>
        ),
        width: '2rem',
        ...expandableColumn
      });
    }

    return (
      <Table
        style={tableStyle}
        {...props}
      >
        {showColgroup &&
          <colgroup>
            {cols.map(column => (
              <col key={column.key} style={{ width: column.width }} />
            ))}
          </colgroup>
        }
        <thead>
          <tr>
            {cols.map((column, index) => (
              <Header
                active={column.active}
                ascending={column.ascending}
                className={generateColumnClassName(column, truncate)}
                key={index}
                onSort={column.onSort ? () => column.onSort(!column.ascending) : null}
              >
                {column.header}
              </Header>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => this.renderRow(row, cols, rowClassName, rowExpanded, rowOnClick, truncate, rowSelected))}
        </tbody>
        {(showFooter || footer) && (
          <tfoot>
            {showFooter && (
              <tr>
                {cols.map(column => (
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
}
export default SortableTable;
