import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Header from './SortableTable/Header.js';
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
    rowClassName: PropTypes.func,
    rowExpanded: PropTypes.func,
    rowOnClick: PropTypes.func,
    truncate: PropTypes.bool
    // TODO? support sort type icons (FontAwesome has numeric, A->Z, Z->A)
  };

  static defaultProps = {
    ...Table.defaultProps,
    rows: [],
    rowClassName: () => undefined,
    rowExpanded: () => false,
    truncate: false
  };

  renderRow(row, columns, rowClassName, rowExpanded, rowOnClick, truncate) {
    const expanded = rowExpanded(row);
    return [
      <tr
        key={row.key}
        className={rowClassName(row)}
        onClick={() => rowOnClick && rowOnClick(row)}
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
    const { columns, rowClassName, rowExpanded, rowOnClick, rows, style, truncate, ...props } = this.props;
    const showColgroup = columns.some(column => column.width);
    const showFooter = columns.some(column => column.footer);
    const tableStyle = {
      tableLayout: truncate ? 'fixed' : 'auto',
      ...style
    };

    return (
      <Table
        style={tableStyle}
        {...props}
      >
        {showColgroup &&
          <colgroup>
            {columns.map(column => (
              <col key={column.key} style={{ width: column.width }} />
            ))}
          </colgroup>
        }
        <thead>
          <tr>
            {columns.map((column, index) => (
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
          {rows.map(row => this.renderRow(row, columns, rowClassName, rowExpanded, rowOnClick, truncate))}
        </tbody>
        {showFooter &&
          <tfoot>
            <tr>
              {columns.map(column => (
                <td
                  key={column.key}
                  className={generateColumnClassName(column, truncate)}
                >
                  {column.footer}
                </td>
              ))}
            </tr>
          </tfoot>
        }
      </Table>
    );
  }
}
export default SortableTable;
