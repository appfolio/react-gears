import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import { Paginator, SortableTable, UncontrolledTable } from '../../src';

describe('<UncontrolledTable />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<UncontrolledTable columns={[]} />);
    assert(wrapper);
  });

  it('should accept all normal Table props', () => {
    const wrapper = mount(<UncontrolledTable size="lg" bordered striped dark hover responsive columns={[]} />);
    const table = wrapper.find('table');

    assert(wrapper.find('.table-responsive').exists(), 'responsive missing');
    assert(table.hasClass('table-bordered'), 'bordered missing');
    assert(table.hasClass('table-striped'), 'striped missing');
    assert(table.hasClass('table-dark'), 'dark missing');
    assert(table.hasClass('table-hover'), 'hover missing');
  });

  it('should render all columns', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta' }
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} />);
    const headers = wrapper.find('th');
    assert.equal(headers.length, columns.length);
    headers.forEach((th, i) => assert(th.text().indexOf(columns[i].header) > -1));
  });

  it('should render all rows', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} />);
    const cells = wrapper.find('td');
    assert.equal(cells.length, rows.length);
    cells.forEach((td, i) => assert.equal(td.text(), rows[i]));
  });

  it('should render header components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map((name) => {
      return {
        header: <span className={name}>{name}</span>
      };
    });
    const wrapper = mount(<UncontrolledTable columns={columns} />);
    const headers = wrapper.find('span');
    headers.forEach((th, i) => assert(th.hasClass(classNames[i])));
  });

  it('should render cell components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map((name) => {
      return {
        header: name,
        cell: row => <span className={name}>{row}</span>
      };
    });
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} />);
    const trs = wrapper.find('tr');
    assert.equal(trs.length, rows.length + 1); // +1 includes thead

    classNames.forEach((name) => {
      const cells = wrapper.find(`.${name}`);
      assert.equal(cells.length, rows.length, 'Column cell not rendered for each row');
    });
  });

  it('should not render tfoot if no footers specified', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map((name) => {
      return {
        header: name
      };
    });
    const wrapper = mount(<UncontrolledTable columns={columns} />);

    const footer = wrapper.find('tfoot');
    assert.equal(footer.exists(), false);
  });

  it('should render footer components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map((name) => {
      return {
        header: name,
        footer: <span className={name}>{name}</span>
      };
    });
    const wrapper = mount(<UncontrolledTable columns={columns} />);

    const footer = wrapper.find('tfoot');
    assert(footer.exists());

    const footers = wrapper.find('span');
    assert.equal(footers.length, classNames.length);
    footers.forEach((th, i) => assert(th.hasClass(classNames[i])));
  });

  it('should render sorting controls when sortable present', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta', sortable: false },
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} />);
    const sortIcons = wrapper.find('Icon');
    assert.equal(sortIcons.length, 3);
  });

  it('should render correct sort icons when specified', () => {
    const columns = [
      { key: 'alpha', header: 'Alpha' },
      { key: 'bravo', header: 'Bravo' },
      { key: 'charlie', header: 'Charlie' },
      { key: 'delta', header: 'Delta', sortable: false }
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} sort={{ column: 'alpha', ascending: true }} />);

    const activeColumnIcon = wrapper.find('Icon[name="caret-up"]');
    assert.equal(activeColumnIcon.length, 1);

    const activeDescColumnIcon = wrapper.find('Icon[name="caret-down"]');
    assert.equal(activeDescColumnIcon.length, 0);

    const inactiveColumnIcons = wrapper.find('Icon[name="sort"]');
    assert.equal(inactiveColumnIcons.length, 2);
  });

  it('should not render colgroup if no widths specified', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta' }
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} />);

    const colgroup = wrapper.find('colgroup');
    assert.equal(colgroup.exists(), false);
  });

  it('should render column widths if specified', () => {
    const columns = [
      { header: 'Alpha', width: '20%' },
      { header: 'Bravo', width: '30%' },
      { header: 'Charlie', width: '15%' },
      { header: 'Delta', width: '35%' }
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} />);

    const colgroup = wrapper.find('colgroup');
    assert(colgroup.exists());

    const col = wrapper.find('col');
    columns.forEach((column, i) => assert.equal(col.get(i).props.style.width, column.width));
  });

  it('should render row className when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        rowClassName={row => row}
      />
    );
    const trs = wrapper.find('tbody tr');
    assert.equal(trs.length, rows.length);
    trs.forEach((tr, i) => {
      assert(tr.hasClass(rows[i]));
    });
  });

  it('should render expandable column when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        rowExpanded={() => <span className="expando">Hey</span>}
      />
    );

    const ths = wrapper.find('th');
    assert.equal(ths.length, columns.length + 1); // For expanded column
  });

  it('should merge expandableColumn with the expand column definition so you can alter it', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        rowExpanded={() => <span className="expando">Hey</span>}
        expandableColumn={{ header: 'whatever you want, homie' }}
      />
    );

    const ths = wrapper.find('th');
    assert(ths.last().text().indexOf('whatever you want, homie') > -1);
  });

  it('should update expanded rows when new expanded prop provided', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [
      { name: 'Mantleray', key: '1' },
      { name: 'Other', key: '2' },
    ];
    const rowExpanded = () => <span className="expando">Hey</span>;
    const expanded = [];
    const props = { columns, rows, expandable: true, expanded, rowExpanded };
    const wrapper = mount(<UncontrolledTable {...props} />);

    assert.equal(wrapper.find('.expando').length, 0);

    wrapper.setProps({ expanded: rows[1] });
    assert.equal(wrapper.find('.expando').length, 1);
  });

  it('should call onExpand when row is expanded', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [{ name: 'Mantleray', key: '1' }];
    const rowExpanded = () => <span className="expando">Hey</span>;
    const onExpand = sinon.stub();
    const props = { columns, rows, expandable: true, rowExpanded, onExpand };
    const wrapper = mount(<UncontrolledTable {...props} />);

    const expandButton = wrapper.find('tbody tr button');
    assert.equal(expandButton.length, 1);
    expandButton.simulate('click');
    sinon.assert.calledOnce(onExpand);
  });

  it('should clear the expanded state when the expandable prop changes', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: '1' },
      { name: 'Bravo', key: '2' },
    ];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        expanded={rows}
        rowExpanded={() => <span className="expanded-row">EXPANDED</span>}
      />
    );

    let expandedSpans = wrapper.find('tbody span.expanded-row');
    assert.strictEqual(expandedSpans.length, 2);

    wrapper.setProps({ expandable: false });

    expandedSpans = wrapper.find('tbody span.expanded-row');
    assert.strictEqual(expandedSpans.length, 0);

    wrapper.setProps({ expandable: true });

    expandedSpans = wrapper.find('tbody span.expanded-row');
    assert.strictEqual(expandedSpans.length, 0);
  });

  it('should supply onClick row handler when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const onClick = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} rowOnClick={onClick} />
    );
    wrapper.find('tbody tr').first().simulate('click');
    sinon.assert.calledWith(onClick, 'Alpha');
  });

  it('should render correct align when present', () => {
    const columns = [
      { header: 'Default', cell: () => '-', footer: '-' },
      { header: 'Left', cell: () => '-', footer: '-', align: 'left' },
      { header: 'Center', cell: () => '-', footer: '-', align: 'center' },
      { header: 'Right', cell: () => '-', footer: '-', align: 'right' },
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={[1, 2, 3]} />);

    assert.equal(wrapper.find('thead th.text-start').length, 1, 'thead th.text-start incorrect');
    assert.equal(wrapper.find('thead th.text-center').length, 1, 'thead th.text-center incorrect');
    assert.equal(wrapper.find('thead th.text-end').length, 1, 'thead th.text-end incorrect');

    assert.equal(wrapper.find('tbody td.text-start').length, 3, 'tbody td.text-start incorrect');
    assert.equal(wrapper.find('tbody td.text-center').length, 3, 'tbody td.text-center incorrect');
    assert.equal(wrapper.find('tbody td.text-end').length, 3, 'tbody td.text-end incorrect');

    assert.equal(wrapper.find('tfoot td.text-start').length, 1, 'tfoot td.text-start incorrect');
    assert.equal(wrapper.find('tfoot td.text-center').length, 1, 'tfoot td.text-center incorrect');
    assert.equal(wrapper.find('tfoot td.text-end').length, 1, 'tfoot td.text-end incorrect');
  });

  it('should render correct column classnames when present', () => {
    const columns = [
      { header: 'Default', cell: () => '-', footer: '-' },
      { header: 'Left', cell: () => '-', footer: '-', className: 'whatever' }
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={[1, 2, 3]} />);

    assert.equal(wrapper.find('thead th.whatever').length, 1, 'thead th.whatever incorrect');

    assert.equal(wrapper.find('tbody td.whatever').length, 3, 'tbody td.whatever incorrect');

    assert.equal(wrapper.find('tfoot td.whatever').length, 1, 'tfoot td.whatever incorrect');
  });

  it('should render select column when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
      />
    );

    const ths = wrapper.find('th');
    assert.equal(ths.length, columns.length + 1); // For selectable column
  });

  it('should call onSelect when selectable row picked', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: '1' },
      { name: 'Bravo', key: '2' },
      { name: 'Charlie', key: '3' },
    ];
    const onSelect = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        onSelect={onSelect}
      />
    );
    wrapper
      .find('tbody input')
      .at(0)
      .simulate('change', { target: { checked: true } });
    sinon.assert.calledWith(onSelect, rows[0]);

    wrapper
      .find('tbody input')
      .at(1)
      .simulate('change', { target: { checked: true } });
    sinon.assert.calledWith(onSelect, rows[1]);

    wrapper
      .find('tbody input')
      .at(0)
      .simulate('change', { target: { checked: false } });
    sinon.assert.calledWith(onSelect, rows[0]);
  });

  it('should call onSelectAll when the select all checkbox is clicked', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: '1' },
      { name: 'Bravo', key: '2' },
      { name: 'Charlie', key: '3' },
    ];
    const onSelectAll = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        onSelectAll={onSelectAll}
      />
    );

    const selectAllCheckbox = wrapper.find('thead input');
    selectAllCheckbox.simulate('change', { target: { checked: true } });
    sinon.assert.calledWith(onSelectAll, true);

    selectAllCheckbox.simulate('change', { target: { checked: false } });
    sinon.assert.calledWith(onSelectAll, false);
  });

  it('should not call onSelectAll when no rows are defined', () => {
    const onSelectAll = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable
        columns={[]}
        selectable
        paginated
        onSelectAll={onSelectAll}
      />
    );

    wrapper
      .find('thead input')
      .simulate('change', { target: { checked: true } });
    sinon.assert.notCalled(onSelectAll);
  });

  it('should clear all selections when selectable prop changes', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: '1' },
      { name: 'Bravo', key: '2' },
    ];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        selected={rows}
      />
    );

    let checkboxes = wrapper.find('tbody input');
    assert.strictEqual(checkboxes.length, 2);
    assert.strictEqual(checkboxes.at(0).prop('checked'), true);
    assert.strictEqual(checkboxes.at(1).prop('checked'), true);

    wrapper.setProps({ selectable: false });

    checkboxes = wrapper.find('tbody input');
    assert.strictEqual(checkboxes.length, 0);

    wrapper.setProps({ selectable: true });

    checkboxes = wrapper.find('tbody input');
    assert.strictEqual(checkboxes.length, 2);
    assert.strictEqual(checkboxes.at(0).prop('checked'), false);
    assert.strictEqual(checkboxes.at(1).prop('checked'), false);
  });

  it('should call onPageChange on page change', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const onPageChange = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        paginated
        pageSize={4}
        onPageChange={onPageChange}
      />
    );

    wrapper.find('.page-link').last().simulate('click');
    sinon.assert.calledWith(onPageChange, 1);
  });

  it('should show correct rows when paginated specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        paginated
        pageSize={4}
      />
    );
    const trs = wrapper.find('tbody tr');
    // TODO assert rows
    assert.equal(trs.length, 4);
  });

  it('should show correct rows on page change', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = shallow(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        paginated
        pageSize={4}
      />
    );
    let table = wrapper.find(SortableTable);
    let paginator = wrapper.find(Paginator);

    assert.deepStrictEqual(table.prop('rows'), ['Alpha', 'Bravo', 'Charlie', 'Delta']);
    assert.strictEqual(paginator.prop('currentPage'), 1);

    paginator.simulate('click', 2);
    table = wrapper.find(SortableTable);
    paginator = wrapper.find(Paginator);

    assert.deepStrictEqual(table.prop('rows'), ['Echo', 'Foxtrot', 'Golf', 'Hotel']);
    assert.strictEqual(paginator.prop('currentPage'), 2);
  });

  it('should revert to page 0 when rows change', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = [
      'Alpha',
      'Bravo',
      'Charlie',
      'Delta',
      'Echo',
      'Foxtrot',
      'Golf',
      'Hotel',
    ];
    const wrapper = shallow(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        page={1}
        paginated
        pageSize={4}
      />
    );

    let paginator = wrapper.find(Paginator);
    assert.strictEqual(paginator.prop('currentPage'), 2);

    wrapper.setProps({ rows: ['Foo', 'Bar', 'Baz'] });

    paginator = wrapper.find(Paginator);
    assert.strictEqual(paginator.prop('currentPage'), 1);
  });

  it('should show correct rows on sort change', () => {
    const columns = [{ header: 'Name', key: 'name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: 1 },
      { name: 'Bravo', key: 2 },
      { name: 'Charlie', key: 3 },
    ];
    const wrapper = shallow(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        sort={{ column: 'name', ascending: false }}
        paginated
        pageSize={4}
      />
    );

    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [
      { name: 'Charlie', key: 3 },
      { name: 'Bravo', key: 2 },
      { name: 'Alpha', key: 1 },
    ]);

    wrapper.find(SortableTable).prop('columns')[0].onSort(true); // Simulate sort by ascending order
    wrapper.update();
    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [
      { name: 'Alpha', key: 1 },
      { name: 'Bravo', key: 2 },
      { name: 'Charlie', key: 3 },
    ]);

    wrapper.find(SortableTable).prop('columns')[0].onSort(false); // Simulate sort by descending order
    wrapper.update();
    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [
      { name: 'Charlie', key: 3 },
      { name: 'Bravo', key: 2 },
      { name: 'Alpha', key: 1 },
    ]);
  });

  it('should show correct rows on sort change', () => {
    const columns = [{ header: 'Name', key: 'name', cell: row => row }, { header: 'Age', key: 'age', cell: row => row }];
    const rows = [{ name: 'Alpha', age: 1 }, { name: 'Bravo', age: 5 }, { name: 'Charlie', age: 3 }];
    const onSort = sinon.stub();

    const wrapper = shallow(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        sort={{ column: 'name', ascending: false }}
        onSort={onSort}
      />
    );

    wrapper.find(SortableTable).prop('columns')[0].onSort(true); // Simulate sort by ascending order
    sinon.assert.calledWith(onSort, { column: 'name', ascending: true });
    wrapper.update();

    wrapper.find(SortableTable).prop('columns')[0].onSort(false); // Simulate sort by descending order
    sinon.assert.calledWith(onSort, { column: 'name', ascending: false });
    wrapper.update();

    wrapper.find(SortableTable).prop('columns')[1].onSort(false);
    sinon.assert.calledWith(onSort, { column: 'age', ascending: true });
    wrapper.update();
  });

  it('should hide columns when hidden', () => {
    const columns = [
      { header: 'Name', cell: row => row },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
      />
    );
    assert.equal(wrapper.find('th').length, 1);
    assert.equal(wrapper.find('td').length, rows.length);
  });

  it('should update selected when new selected props are provided', () => {
    const columns = [
      { header: 'Name', cell: (row) => row.name },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        selected={[rows[0]]}
      />
    );

    assert.deepEqual(wrapper.props().selected, [{ name: 'Alpha' }]);
    assert.strictEqual(wrapper.find('tbody input').at(0).props().checked, true);

    wrapper.setProps({ selected: [rows[1]] });
    assert.deepEqual(wrapper.props().selected, [{ name: 'Bravo' }]);
    assert.strictEqual(wrapper.find('tbody input').at(1).props().checked, true);
  });

  it('should select the selected prop rows, if provided', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [
      { name: 'Alpha' },
      { name: 'Bravo' },
    ];
    const selected = [{ name: 'Alpha' }];

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        selected={selected}
      />
    );

    const inputs = wrapper.find('tbody input');
    assert.strictEqual(inputs.at(0).props().checked, true);
    assert.strictEqual(inputs.at(1).props().checked, false);
  });

  it('should expand the rows specified in the expanded prop, when that prop is provided', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const expanded = [{ name: 'Alpha' }];

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        expanded={expanded}
        rowExpanded={(row) => row.name}
      />
    );
    const expandedRows = wrapper.find('tr.tr-expanded');

    assert.strictEqual(expandedRows.length, 1);
    assert.strictEqual(expandedRows.at(0).text(), 'Alpha');
  });

  it('should correctly expand a row', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: '1' },
      { name: 'Bravo', key: '2' },
    ];
    const expanded = [{ name: 'Alpha', key: '1' }];
    const onExpandSpy = sinon.spy();

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        expanded={expanded}
        rowExpanded={(row) => row.name}
        onExpand={onExpandSpy}
      />
    );

    assert.strictEqual(wrapper.find('tr.tr-expanded').length, 1);

    wrapper.find('td button').at(1).simulate('click');

    sinon.assert.calledOnceWithExactly(onExpandSpy, {
      name: 'Bravo',
      key: '2',
    });

    assert.strictEqual(wrapper.find('tr.tr-expanded').length, 2);
  });

  it('should correctly collapse a row', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [
      { name: 'Alpha', key: '1' },
      { name: 'Bravo', key: '2' },
    ];
    const expanded = [{ name: 'Alpha', key: '1' }];
    const onExpandSpy = sinon.spy();

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        expanded={expanded}
        rowExpanded={(row) => row.name}
        onExpand={onExpandSpy}
      />
    );

    assert.strictEqual(wrapper.find('tr.tr-expanded').length, 1);

    wrapper.find('td button').at(0).simulate('click');

    sinon.assert.calledOnceWithExactly(onExpandSpy, {
      name: 'Alpha',
      key: '1',
    });

    assert.strictEqual(wrapper.find('tr.tr-expanded').length, 0);
  });

  describe('onVisibleRowsChange', () => {
    const rows = [
      { name: 'Alpha', key: 'a' },
      { name: 'Bravo', key: 'b' },
      { name: 'Charlie', key: 'c' },
      { name: 'Delta', key: 'd' },
      { name: 'Echo', key: 'e' },
      { name: 'Foxtrot', key: 'f' },
      { name: 'Golf', key: 'g' },
      { name: 'Hotel', key: 'h' },
    ];
    it('calls onVisibleRowsChange when the page changes', () => {
      const columns = [{ header: 'Name', cell: (row) => row.name }];
      const onVisibleRowsChange = sinon.stub();
      const wrapper = mount(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          paginated
          pageSize={4}
          onVisibleRowsChange={onVisibleRowsChange}
        />
      );

      wrapper.find('.page-link').last().simulate('click');

      sinon.assert.calledWith(onVisibleRowsChange, [
        { name: 'Echo', key: 'e' },
        { name: 'Foxtrot', key: 'f' },
        { name: 'Golf', key: 'g' },
        { name: 'Hotel', key: 'h' },
      ]);
    });

    it('calls onVisibleRowsChange when pagination is enabled', () => {
      const columns = [{ header: 'Name', cell: (row) => row.name }];
      const onVisibleRowsChange = sinon.stub();
      const wrapper = mount(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          pageSize={4}
          onVisibleRowsChange={onVisibleRowsChange}
        />
      );

      sinon.assert.calledOnce(onVisibleRowsChange);

      wrapper.setProps({ paginated: true });
      sinon.assert.calledWith(onVisibleRowsChange, [
        { name: 'Alpha', key: 'a' },
        { name: 'Bravo', key: 'b' },
        { name: 'Charlie', key: 'c' },
        { name: 'Delta', key: 'd' },
      ]);
    });

    it('does not call onVisibleRowsChange when a row is expanded', () => {
      const columns = [{ header: 'Name', cell: (row) => row.name }];
      const onVisibleRowsChange = sinon.stub();

      const wrapper = mount(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          expandable
          onVisibleRowsChange={onVisibleRowsChange}
        />
      );
      const expandButtons = wrapper.find('td button');
      expandButtons.at(1).simulate('click');
      sinon.assert.calledOnce(onVisibleRowsChange);
    });
  });
});
