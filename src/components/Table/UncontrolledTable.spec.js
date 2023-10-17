import assert from 'assert';
import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Paginator from '../Pagination/Paginator';
import SortableTable from './SortableTable';
import UncontrolledTable from './UncontrolledTable';

describe('<UncontrolledTable />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<UncontrolledTable columns={[]} />);
    assert(wrapper);
  });

  it('should accept all normal Table props', () => {
    const wrapper = mount(
      <UncontrolledTable size="lg" bordered striped dark hover responsive columns={[]} />
    );
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
      { header: 'Delta' },
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} />);
    const headers = wrapper.find('th');
    assert.equal(headers.length, columns.length);
    headers.forEach((th, i) => assert(th.text().indexOf(columns[i].header) > -1));
  });

  it('should render all rows', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
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
        header: <span className={name}>{name}</span>,
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
        cell: (row) => <span className={name}>{row}</span>,
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
        header: name,
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
        footer: <span className={name}>{name}</span>,
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
      { key: 'delta', header: 'Delta', sortable: false },
    ];
    const wrapper = mount(
      <UncontrolledTable columns={columns} sort={{ column: 'alpha', ascending: true }} />
    );

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
      { header: 'Delta' },
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
      { header: 'Delta', width: '35%' },
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} />);

    const colgroup = wrapper.find('colgroup');
    assert(colgroup.exists());

    const col = wrapper.find('col');
    columns.forEach((column, i) => assert.equal(col.get(i).props.style.width, column.width));
  });

  it('should render row className when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} rowClassName={(row) => row} />
    );
    const trs = wrapper.find('tbody tr');
    assert.equal(trs.length, rows.length);
    trs.forEach((tr, i) => {
      assert(tr.hasClass(rows[i]));
    });
  });

  it('should render expandable column when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
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
    const columns = [{ header: 'Name', cell: (row) => row }];
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
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [{ name: 'Mantleray', key: '1' }];
    const rowExpanded = () => <span className="expando">Hey</span>;
    const expanded = [];
    const props = { columns, rows, expandable: true, expanded, rowExpanded };
    const wrapper = mount(<UncontrolledTable {...props} />);

    let expandedRow = wrapper.find('.expando');
    assert.equal(expandedRow.length, 0);

    const newProps = { expanded: [rows[0]] };
    wrapper.setProps(newProps);
    expandedRow = wrapper.find('.expando');
    assert.equal(expandedRow.length, 1);
  });

  it('should call onExpand when row is expanded', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
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

  it('should supply onClick row handler when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const onClick = sinon.stub();
    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} rowOnClick={onClick} />);
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
      { header: 'Left', cell: () => '-', footer: '-', className: 'whatever' },
    ];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={[1, 2, 3]} />);

    assert.equal(wrapper.find('thead th.whatever').length, 1, 'thead th.whatever incorrect');

    assert.equal(wrapper.find('tbody td.whatever').length, 3, 'tbody td.whatever incorrect');

    assert.equal(wrapper.find('tfoot td.whatever').length, 1, 'tfoot td.whatever incorrect');
  });

  it('should render select column when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} selectable />);

    const ths = wrapper.find('th');
    assert.equal(ths.length, columns.length + 1); // For selectable column
  });

  it('should call onSelect when selectable row picked', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const onSelect = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} selectable onSelect={onSelect} />
    );
    wrapper
      .find({ type: 'checkbox' })
      .first()
      .simulate('change', { target: { checked: true } });
    sinon.assert.calledWith(onSelect, rows);
  });

  it('should call onPageChange on page change', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
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
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} paginated pageSize={4} />
    );
    const trs = wrapper.find('tbody tr');
    // TODO assert rows
    assert.equal(trs.length, 4);
  });

  it('should show correct rows on page change', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = shallow(
      <UncontrolledTable columns={columns} rows={rows} paginated pageSize={4} />
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

  it('should show correct rows on sort change', () => {
    const columns = [{ header: 'Name', key: 'name', cell: (row) => row }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }, { name: 'Charlie' }];
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
      { name: 'Charlie' },
      { name: 'Bravo' },
      { name: 'Alpha' },
    ]);

    wrapper.find(SortableTable).prop('columns')[0].onSort(true); // Simulate sort by ascending order
    wrapper.update();
    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [
      { name: 'Alpha' },
      { name: 'Bravo' },
      { name: 'Charlie' },
    ]);

    wrapper.find(SortableTable).prop('columns')[0].onSort(false); // Simulate sort by descending order
    wrapper.update();
    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [
      { name: 'Charlie' },
      { name: 'Bravo' },
      { name: 'Alpha' },
    ]);
  });

  it('should show correct rows on sort change', () => {
    const columns = [
      { header: 'Name', key: 'name', cell: (row) => row },
      { header: 'Age', key: 'age', cell: (row) => row },
    ];
    const rows = [
      { name: 'Alpha', age: 1 },
      { name: 'Bravo', age: 5 },
      { name: 'Charlie', age: 3 },
    ];
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
      { header: 'Name', cell: (row) => row },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} />);
    assert.equal(wrapper.find('th').length, 1);
    assert.equal(wrapper.find('td').length, rows.length);
  });

  it('should update selected when new selected props are provided', () => {
    const columns = [
      { header: 'Name', cell: (row) => row },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];

    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} selected={['Alpha']} />);

    assert.deepEqual(wrapper.props().selected, ['Alpha']);
    assert.deepEqual(wrapper.state().selected, ['Alpha']);

    wrapper.setProps({ selected: ['Bravo'] });

    assert.deepEqual(wrapper.props().selected, ['Bravo']);
    assert.deepEqual(wrapper.state().selected, ['Bravo']);
  });

  it('should select the selected prop rows, if provided', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const selected = [{ name: 'Alpha' }];

    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} selected={selected} />);
    const instance = wrapper.instance();

    assert(instance.selected({ name: 'Alpha' }) === true);
    assert(instance.selected({ name: 'Bravo' }) === false);
    assert(instance.selected({ name: 'Alpha', age: 16 }) === false);
  });

  it('should toggle selection correctly', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const selected = [{ name: 'Alpha' }];

    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} selected={selected} />);
    const instance = wrapper.instance();

    assert(wrapper.state().selected.length === 1);
    instance.toggleSelection({ name: 'Alpha' });
    assert(wrapper.state().selected.length === 0);

    instance.toggleSelection({ name: 'Alpha' });
    assert(wrapper.state().selected.length === 1);
  });

  it('should expand the rows specified in the expanded prop, when that prop is provided', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const expanded = [{ name: 'Alpha' }];

    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} expanded={expanded} />);
    const instance = wrapper.instance();

    assert(instance.expanded({ name: 'Alpha' }) === true);
    assert(instance.expanded({ name: 'Bravo' }) === false);
    assert(instance.expanded({ name: 'Alpha', age: 16 }) === false);
  });

  it('should toggle expanded correctly', () => {
    const columns = [{ header: 'Name', cell: (row) => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const expanded = [{ name: 'Alpha' }];

    const wrapper = mount(<UncontrolledTable columns={columns} rows={rows} expanded={expanded} />);
    const instance = wrapper.instance();
    assert(instance.expanded({ name: 'Alpha' }) === true);
    instance.toggleExpanded({ name: 'Alpha' });
    assert(wrapper.state().expanded.length === 0);

    instance.toggleExpanded({ name: 'Alpha' });
    assert(instance.expanded({ name: 'Alpha' }) === true);
  });

  describe('onVisibleRowsChange', () => {
    it('calls onVisibleRowsChange when the page changes', () => {
      const columns = [{ header: 'Name', cell: (row) => row }];
      const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
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
      sinon.assert.calledWith(onVisibleRowsChange, ['Echo', 'Foxtrot', 'Golf', 'Hotel']);
    });

    it('calls onVisibleRowsChange when pagination is enabled', () => {
      const columns = [{ header: 'Name', cell: (row) => row }];
      const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
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
      sinon.assert.calledWith(onVisibleRowsChange, ['Alpha', 'Bravo', 'Charlie', 'Delta']);
    });

    it('does not call onVisibleRowsChange when a row is expanded', () => {
      const columns = [{ header: 'Name', cell: (row) => row.name }];
      const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
      const onVisibleRowsChange = sinon.stub();

      const wrapper = mount(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          onVisibleRowsChange={onVisibleRowsChange}
        />
      );
      const instance = wrapper.instance();
      instance.toggleExpanded({ name: 'Alpha' });
      assert(instance.expanded({ name: 'Alpha' }) === true);

      sinon.assert.calledOnce(onVisibleRowsChange);
    });
  });

  describe('isEqualUsingKeys()', () => {
    let wrapper;

    beforeEach(() => {
      wrapper = mount(<UncontrolledTable columns={[]} rows={[]} expanded={[]} page={0} />);
    });

    it('should use object comparison if no keys present in arrays', () => {
      let oldArray = [1, 2, 3];
      const newArray = [3, 4, 5];

      assert.strictEqual(wrapper.instance().isEqualUsingKeys(oldArray, newArray), false);
      oldArray = newArray;
      assert.strictEqual(wrapper.instance().isEqualUsingKeys(oldArray, newArray), true);
    });

    it('should use object comparison if keys arent present in every object in the arrays, order agnostic', () => {
      let oldArray = [{ key: 1 }, { key: 2 }, { name: 'Bob Barker' }];
      const newArray = [{ key: 2 }, { key: 1 }, { name: 'Bob Barker' }];

      assert.strictEqual(wrapper.instance().isEqualUsingKeys(oldArray, newArray), false);

      oldArray = newArray;
      assert.strictEqual(wrapper.instance().isEqualUsingKeys(oldArray, newArray), true);
    });

    it('should use key comparison if keys present in every object in the arrays, order agnostic', () => {
      let oldArray = [{ key: 1 }, { key: 2 }];
      const newArray = [{ key: 2 }, { key: 1 }];

      assert.strictEqual(wrapper.instance().isEqualUsingKeys(oldArray, newArray), true);

      oldArray = [{ key: 1 }, { key: 3 }];
      assert.strictEqual(wrapper.instance().isEqualUsingKeys(oldArray, newArray), false);
    });
  });

  describe('UNSAFE_componentWillReceiveProps()', () => {
    let wrapper;
    let columns;
    let rows;
    let expanded;
    let selected;

    beforeEach(() => {
      columns = [{ header: 'Name', cell: (row) => row.name }];
      rows = [
        { name: 'Alpha', key: '1' },
        { name: 'Bravo', key: '2' },
      ];
      expanded = [{ name: 'Alpha', key: '1' }];
      selected = [{ name: 'Bravo', key: '2' }];

      wrapper = mount(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          expanded={expanded}
          page={1}
          selected={selected}
        />
      );
    });

    it('should not reset state for expanded, page, and selected if a rows key attributes have not changed', () => {
      assert(wrapper.props().expanded.length > 0, 'the expanded props should be non empty');
      assert(wrapper.props().selected.length > 0, 'the selected props should be non empty');
      assert.strictEqual(wrapper.props().page, 1, 'the page prop should be 1');

      const expectedStateExpanded = wrapper.state().expanded;
      const expectedStateSelected = wrapper.state().selected;
      const expectedStatePage = wrapper.state().page;

      const newProps = JSON.parse(JSON.stringify(wrapper.props()));
      newProps.rows[0].name = 'Charlie';
      wrapper.instance().UNSAFE_componentWillReceiveProps(newProps);

      assert.deepEqual(
        wrapper.state().expanded.map((r) => r.key),
        expectedStateExpanded.map((r) => r.key),
        'the expanded state should not have changed'
      );
      assert.deepEqual(
        wrapper.state().selected.map((r) => r.key),
        expectedStateSelected.map((r) => r.key),
        'the selected state should not have changed'
      );
      assert.strictEqual(
        wrapper.state().page,
        expectedStatePage,
        'the page state should not have been changed'
      );
    });

    it('should reset state for expanded, and page if a rows key attributes have changed', () => {
      assert(wrapper.props().expanded.length > 0, 'the expanded props should be non empty');
      assert(wrapper.props().selected.length > 0, 'the selected props should be non empty');
      assert.strictEqual(wrapper.props().page, 1, 'the page prop should be 1');

      const prevSelectedLength = wrapper.props().selected.length;
      const newProps = JSON.parse(JSON.stringify(wrapper.props()));
      newProps.rows[0].key = '3';
      wrapper.instance().UNSAFE_componentWillReceiveProps(newProps);

      assert.strictEqual(
        wrapper.state().expanded.length,
        0,
        'the expanded state should be reset to empty'
      );
      assert.strictEqual(
        wrapper.state().selected.length,
        prevSelectedLength,
        'the selected state should not change'
      );
      assert.strictEqual(wrapper.state().page, 0, 'the page state should have been set to 0');
    });

    it('should reset state for expanded, but not page if a rows key attributes have changed and resetPageOnRowChange is false', () => {
      wrapper = mount(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          expanded={expanded}
          page={1}
          selected={selected}
          resetPageOnRowChange={false}
        />
      );
      assert(wrapper.props().expanded.length > 0, 'the expanded props should be non empty');
      assert(wrapper.props().selected.length > 0, 'the selected props should be non empty');
      assert.strictEqual(wrapper.props().page, 1, 'the page prop should be 1');

      const prevSelectedLength = wrapper.props().selected.length;
      const newProps = JSON.parse(JSON.stringify(wrapper.props()));
      newProps.rows[0].key = '3';
      wrapper.instance().UNSAFE_componentWillReceiveProps(newProps);

      assert.strictEqual(
        wrapper.state().expanded.length,
        0,
        'the expanded state should be reset to empty'
      );
      assert.strictEqual(
        wrapper.state().selected.length,
        prevSelectedLength,
        'the selected state should not change'
      );
      assert.strictEqual(wrapper.state().page, 1, 'the page state should still be 1');
    });

    it('should reset state for selected if a change is detected in the selected key attributes have changed', () => {
      assert(wrapper.props().selected.length > 0, 'the selected props should be non empty');

      const newProps = JSON.parse(JSON.stringify(wrapper.props()));
      newProps.selected[0].key = '3';
      wrapper.instance().UNSAFE_componentWillReceiveProps(newProps);

      assert.strictEqual(
        wrapper.state().selected.length,
        1,
        'the selected state should have one entry'
      );
      assert.strictEqual(
        wrapper.state().selected[0].key,
        '3',
        'the selected state should be set to the new array'
      );
    });

    it('should reset state for expanded if a change is detected in the expanded key attributes have changed', () => {
      assert(wrapper.props().expanded.length > 0, 'the expanded props should be non empty');

      const newProps = JSON.parse(JSON.stringify(wrapper.props()));
      newProps.expanded[0].key = '3';
      wrapper.instance().UNSAFE_componentWillReceiveProps(newProps);

      assert.strictEqual(
        wrapper.state().expanded.length,
        1,
        'the expanded state should have one entry'
      );
      assert.strictEqual(
        wrapper.state().expanded[0].key,
        '3',
        'the expanded state should be set to the new array'
      );
    });
  });
});
