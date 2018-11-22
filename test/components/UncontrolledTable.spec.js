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
    headers.forEach((th, i) => assert.equal(th.text(), columns[i].header));
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
      { header: 'Delta', sortable: false }
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

  it('should update expanded rows when new expanded prop provided', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
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

  it('should supply onClick row handler when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const onClick = sinon.stub();
    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        rowOnClick={onClick}
      />
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

    assert.equal(wrapper.find('thead th.text-left').length, 1, 'thead th.text-left incorrect');
    assert.equal(wrapper.find('thead th.text-center').length, 1, 'thead th.text-center incorrect');
    assert.equal(wrapper.find('thead th.text-right').length, 1, 'thead th.text-right incorrect');

    assert.equal(wrapper.find('tbody td.text-left').length, 3, 'tbody td.text-left incorrect');
    assert.equal(wrapper.find('tbody td.text-center').length, 3, 'tbody td.text-center incorrect');
    assert.equal(wrapper.find('tbody td.text-right').length, 3, 'tbody td.text-right incorrect');

    assert.equal(wrapper.find('tfoot td.text-left').length, 1, 'tfoot td.text-left incorrect');
    assert.equal(wrapper.find('tfoot td.text-center').length, 1, 'tfoot td.text-center incorrect');
    assert.equal(wrapper.find('tfoot td.text-right').length, 1, 'tfoot td.text-right incorrect');
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
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
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
      .find({ type: 'checkbox' })
      .first()
      .simulate('change', { target: { checked: true } });
    sinon.assert.calledWith(onSelect, rows);
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
    assert.equal(trs.length, 4);
    // TODO assert rows
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

  it('should show correct rows on sort change', () => {
    const columns = [{ header: 'Name', key: 'name', cell: row => row }];
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

    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [{ name: 'Charlie' }, { name: 'Bravo' }, { name: 'Alpha' }]);

    wrapper.find(SortableTable).prop('columns')[0].onSort(true); // Simulate sort by ascending order
    wrapper.update();
    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [{ name: 'Alpha' }, { name: 'Bravo' }, { name: 'Charlie' }]);

    wrapper.find(SortableTable).prop('columns')[0].onSort(false); // Simulate sort by descending order
    wrapper.update();
    assert.deepStrictEqual(wrapper.find(SortableTable).prop('rows'), [{ name: 'Charlie' }, { name: 'Bravo' }, { name: 'Alpha' }]);
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
      { header: 'Name', cell: row => row },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selected={['Alpha']}
      />
    );

    assert.deepEqual(wrapper.props().selected, ['Alpha']);
    assert.deepEqual(wrapper.state().selected, ['Alpha']);

    wrapper.setProps({ selected: ['Bravo'] });

    assert.deepEqual(wrapper.props().selected, ['Bravo']);
    assert.deepEqual(wrapper.state().selected, ['Bravo']);
  });

  it('should select the selected prop rows, if provided', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [
      { name: 'Alpha' },
      { name: 'Bravo' },
    ];
    const selected = [{ name: 'Alpha' }];

    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} selected={selected} />
    );
    const instance = wrapper.instance();

    assert(instance.selected({ name: 'Alpha' }) === true);
    assert(instance.selected({ name: 'Bravo' }) === false);
    assert(instance.selected({ name: 'Alpha', age: 16 }) === false);
  });

  it('should toggle selection correctly', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const selected = [{ name: 'Alpha' }];

    const wrapper = mount(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selected={selected}
      />
    );
    const instance = wrapper.instance();

    assert(wrapper.state().selected.length === 1);
    instance.toggleSelection({ name: 'Alpha' });
    assert(wrapper.state().selected.length === 0);

    instance.toggleSelection({ name: 'Alpha' });
    assert(wrapper.state().selected.length === 1);
  });

  it('should expand the rows specified in the expanded prop, when that prop is provided', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const expanded = [{ name: 'Alpha' }];

    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} expanded={expanded} />
    );
    const instance = wrapper.instance();

    assert(instance.expanded({ name: 'Alpha' }) === true);
    assert(instance.expanded({ name: 'Bravo' }) === false);
    assert(instance.expanded({ name: 'Alpha', age: 16 }) === false);
  });

  it('should toggle expanded correctly', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }];
    const expanded = [{ name: 'Alpha' }];

    const wrapper = mount(
      <UncontrolledTable columns={columns} rows={rows} expanded={expanded} />
    );
    const instance = wrapper.instance();
    assert(instance.expanded({ name: 'Alpha' }) === true);
    instance.toggleExpanded({ name: 'Alpha' });
    assert(wrapper.state().expanded.length === 0);

    instance.toggleExpanded({ name: 'Alpha' });
    assert(instance.expanded({ name: 'Alpha' }) === true);
  });
});
