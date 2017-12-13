import React from 'react';
import PropTypes from 'prop-types';
import Header from './SortableTable/Header.js';
import Table from './Table.js';

class SortableTable extends React.Component {
  static propTypes = {
    ...Table.propTypes,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
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
    rows: PropTypes.object,
    rowClassName: PropTypes.func,
    rowExpanded: PropTypes.func,
    // TODO? support sort type icons (FontAwesome has numeric, A->Z, Z->A)
  };

  static defaultProps = {
    ...Table.defaultProps,
    rows: [],
    rowClassName: () => undefined,
    rowExpanded: () => false
  };

  renderRow(row, columns, rowClassName, rowExpanded) {
    const expanded = rowExpanded(row);
    return [
      <tr key={row.key} className={rowClassName(row)}>
        {columns.map(column => <td key={column.key}>{column.cell(row)}</td>)}
      </tr>,
      expanded && <tr hidden />,
      expanded && (
        <tr>
          <td colSpan={columns.length}>
            {expanded}
          </td>
        </tr>
      ),
    ];
  }

  render() {
    const { columns, rowClassName, rowExpanded, rows, ...props } = this.props;
    const showColgroup = columns.some(column => column.width);
    const showFooter = columns.some(column => column.footer);

    return (
      <Table {...props}>
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
                key={index}
                onSort={column.onSort ? () => column.onSort(!column.ascending) : null}
              >
                {column.header}
              </Header>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => this.renderRow(row, columns, rowClassName, rowExpanded))}
        </tbody>
        {showFooter &&
          <tfoot>
            <tr>
              {columns.map(column => (
                <th key={column.key}>
                  {column.footer}
                </th>
              ))}
            </tr>
          </tfoot>
        }
      </Table>
    );
  }
}
export default SortableTable;
