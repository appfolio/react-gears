import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import PropTypes from 'prop-types';
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Label from '../Label/Label';
import Header from './components/Header';
import Table from './Table';

function getAlignment(align) {
  /* eslint-disable no-console */
  switch (align) {
    case 'left':
      console.warn('SortableTable: align="left" is deprecated. Please use align="start" instead.');
      return 'start';
    case 'right':
      console.warn('SortableTable: align="right" is deprecated. Please use align="end" instead.');
      return 'end';
    default:
      return align;
  }
  /* eslint-enable no-console */
}

function generateColumnClassName(column, truncate = false) {
  return classnames(
    truncate && 'text-truncate',
    column.align && `text-${getAlignment(column.align)}`,
    column.className
  );
}

function defaultRenderRow(
  row,
  columns,
  rowClassName,
  rowExpanded,
  rowOnClick,
  truncate,
  rowSelected,
  isLastRow
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
        <td key={column.key} className={generateColumnClassName(column, truncate)}>
          {column.cell(row, expanded, isLastRow)}
        </td>
      ))}
    </tr>,
    expanded && <tr key={row.key ? `${row.key}-hidden` : null} hidden />,
    expanded && (
      <tr
        key={row.key ? `${row.key}-expanded` : null}
        className={classnames({ 'table-primary': rowSelected && rowSelected(row) }, 'tr-expanded')}
      >
        <td className="border-top-0" colSpan={columns.length}>
          {expanded}
        </td>
      </tr>
    ),
  ];
}

function getSelectableCell(row, rowSelected, onSelect) {
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
        disabled={!!row.disabled}
      />
    </>
  );
}

function getExpandableCell(row, expanded, onExpand) {
  return (
    <Button
      className="px-2 py-0"
      color="link"
      onClick={() => onExpand(row)}
      aria-label="Expand row"
    >
      <Icon name={expanded ? 'angle-up' : 'angle-down'} />
    </Button>
  );
}

class SortableTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftGradient: false,
      rightGradient: false,
    };
    this.scrollContainerRef = React.createRef();
  }

  checkScroll = () => {
    const el = this.scrollContainerRef.current;
    if (!el) {
      return;
    }

    const left = el.scrollLeft > 0;
    const right = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;

    this.setState({ leftGradient: left, rightGradient: right });
  };

  componentDidMount() {
    if (this.props.showScrollShadows) {
      this.checkScroll();
      const el = this.scrollContainerRef.current;
      if (el) {
        el.addEventListener('scroll', this.checkScroll);
        window.addEventListener('resize', this.checkScroll);
      }
    }
  }

  componentWillUnmount() {
    const el = this.scrollContainerRef.current;
    if (el) {
      el.removeEventListener('scroll', this.checkScroll);
      window.removeEventListener('resize', this.checkScroll);
    }
  }

  static propTypes = {
    ...Table.propTypes,
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        align: PropTypes.oneOf(['start', 'center', 'end']),
        active: PropTypes.bool,
        ascending: PropTypes.bool,
        cell: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
        footer: PropTypes.node,
        header: PropTypes.node,
        key: PropTypes.string,
        onSort: PropTypes.func,
        sortable: PropTypes.bool,
        width: PropTypes.string,
      })
    ).isRequired,
    rows: PropTypes.oneOfType([
      PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // ensure each row has a unique key
        })
      ),
      PropTypes.object,
    ]),
    expandableColumn: PropTypes.object,
    header: PropTypes.node,
    footer: PropTypes.node,
    rowClassName: PropTypes.func,
    onExpand: PropTypes.func,
    onSelect: PropTypes.func,
    onSelectAll: PropTypes.func,
    rowExpanded: PropTypes.func,
    rowSelected: PropTypes.func,
    rowOnClick: PropTypes.func,
    allSelected: PropTypes.bool,
    truncate: PropTypes.bool,
    renderRow: PropTypes.func,
    showScrollShadows: PropTypes.bool,
    // TODO? support sort type icons (FontAwesome has numeric, A->Z, Z->A)
  };

  static defaultProps = {
    ...Table.defaultProps,
    expandableColumn: {},
    rows: [],
    rowClassName: () => undefined,
    rowExpanded: () => false,
    truncate: false,
    renderRow: defaultRenderRow,
    showScrollShadows: false,
  };

  render() {
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
      showScrollShadows,
      ...props
    } = this.props;
    const selectable = rowSelected;
    const expandable = onExpand;
    const showColgroup = selectable || expandable || columns.some((column) => column.width);
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
              onChange={(e) => onSelectAll(e.target.checked)}
            />
          </>
        ),
        cell: (row) => getSelectableCell(row, rowSelected, onSelect),
        width: '2rem',
      });
    }

    if (expandable) {
      cols.push({
        align: 'center',
        key: 'expand',
        cell: (row, expanded) => getExpandableCell(row, expanded, onExpand),
        width: '2rem',
        ...expandableColumn,
      });
    }

    const tableContent = (
      <Table style={tableStyle} {...props}>
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
            {cols.map((column) => (
              <Header
                active={column.active}
                ascending={column.ascending}
                className={generateColumnClassName(column, truncate)}
                key={column.key}
                onSort={column.onSort ? () => column.onSort(!column.ascending) : null}
              >
                {column.header}
              </Header>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => {
            const isLastRow = index === rows.length - 1;
            return renderRow(
              row,
              cols,
              rowClassName,
              rowExpanded,
              rowOnClick,
              truncate,
              rowSelected,
              isLastRow
            );
          })}
        </tbody>
        {(showFooter || footer) && (
          <tfoot>
            {showFooter && (
              <tr>
                {cols.map((column) => (
                  <td key={column.key} className={generateColumnClassName(column, truncate)}>
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

    if (!showScrollShadows) {
      return tableContent;
    }

    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          ref={this.scrollContainerRef}
          style={{
            overflowX: 'auto',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {tableContent}
        </div>

        {/* Left gradient */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '15px',
            height: '100%',
            background: 'linear-gradient(to right, #a0a0a0, transparent)',
            opacity: this.state.leftGradient ? 1 : 0,
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'opacity 0.3s',
          }}
        />

        {/* Right gradient */}
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '15px',
            height: '100%',
            background: 'linear-gradient(to left, #a0a0a0, transparent)',
            opacity: this.state.rightGradient ? 1 : 0,
            pointerEvents: 'none',
            zIndex: 1,
            transition: 'opacity 0.3s',
          }}
        />
      </div>
    );
  }
}
export default SortableTable;
