import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { SortableTable } from '../../src';

describe('<SortableTable />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<SortableTable columns={[]} />);
    assert(wrapper);
  });

  it('should accept all normal Table props', () => {
    const wrapper = mount(<SortableTable size="lg" bordered striped inverse hover responsive columns={[]} />);
    const table = wrapper.find('table');

    assert(wrapper.hasClass('table-responsive'), 'responsive missing');
    assert(table.hasClass('table-bordered'), 'bordered missing');
    assert(table.hasClass('table-striped'), 'striped missing');
    assert(table.hasClass('table-inverse'), 'inverse missing');
    assert(table.hasClass('table-hover'), 'hover missing');
  });

  it('should render all columns', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta' }
    ];
    const wrapper = mount(<SortableTable columns={columns} />);
    const headers = wrapper.find('th');
    assert.equal(headers.length, columns.length);
    headers.forEach((th, i) => assert.equal(th.text(), columns[i].header));
  });

  it('should render all rows', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(<SortableTable columns={columns} rows={rows} />);
    const cells = wrapper.find('td');
    assert.equal(cells.length, rows.length);
    cells.forEach((td, i) => assert.equal(td.text(), rows[i]));
  });

  it('should render header components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map(name => ({
      header: <span className={name}>{name}</span>
    }));
    const wrapper = mount(<SortableTable columns={columns} />);
    const headers = wrapper.find('span');
    headers.forEach((th, i) => assert(th.hasClass(classNames[i])));
  });

  it('should render cell components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map(name => ({
      header: name,
      cell: row => <span className={name}>{row}</span>
    }));
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(<SortableTable columns={columns} rows={rows} />);
    const trs = wrapper.find('tr');
    assert.equal(trs.length, rows.length + 1); // +1 includes thead

    classNames.forEach(name => {
      const cells = wrapper.find(`.${name}`);
      assert.equal(cells.length, rows.length, 'Column cell not rendered for each row');
    });
  });

  it('should not render tfoot if no footers specified', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map(name => ({
      header: name
    }));
    const wrapper = mount(<SortableTable columns={columns} />);

    const footer = wrapper.find('tfoot');
    assert.equal(footer.exists(), false);
  });

  it('should render footer components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map(name => ({
      header: name,
      footer: <span className={name}>{name}</span>
    }));
    const wrapper = mount(<SortableTable columns={columns} />);

    const footer = wrapper.find('tfoot');
    assert(footer.exists());

    const footers = wrapper.find('span');
    assert.equal(footers.length, classNames.length);
    footers.forEach((th, i) => assert(th.hasClass(classNames[i])));
  });

  it('should render sorting controls when onSort present', () => {
    const columns = [
      { header: 'Alpha', onSort: () => {} },
      { header: 'Bravo', onSort: () => {} },
      { header: 'Charlie', onSort: () => {} },
      { header: 'Delta' }
    ];
    const wrapper = mount(<SortableTable columns={columns} />);
    const sortIcons = wrapper.find('Icon');
    assert.equal(sortIcons.length, 3);
  });

  it('should render correct sort icons when specified', () => {
    const columns = [
      { header: 'Alpha', onSort: () => {}, active: true, ascending: true },
      { header: 'Bravo', onSort: () => {}, active: false, ascending: true },
      { header: 'Charlie', onSort: () => {}, active: false, ascending: false },
      { header: 'Delta' }
    ];
    const wrapper = mount(<SortableTable columns={columns} />);

    const activeColumnIcon = wrapper.find('.fa-caret-up');
    assert.equal(activeColumnIcon.length, 1);

    const activeDescColumnIcon = wrapper.find('.fa-caret-down');
    assert.equal(activeDescColumnIcon.length, 0);

    const inactiveColumnIcons = wrapper.find('.fa-sort');
    assert.equal(inactiveColumnIcons.length, 2);
  });

  it('should render multiple sorting controls when multiple active', () => {
    const columns = [
      { header: 'Alpha', onSort: () => {}, active: true, ascending: true },
      { header: 'Bravo', onSort: () => {}, active: false, ascending: true },
      { header: 'Charlie', onSort: () => {}, active: true, ascending: false },
      { header: 'Delta' }
    ];
    const wrapper = mount(<SortableTable columns={columns} />);

    const activeColumnIcon = wrapper.find('.fa-caret-up');
    assert.equal(activeColumnIcon.length, 1);

    const activeDescColumnIcon = wrapper.find('.fa-caret-down');
    assert.equal(activeDescColumnIcon.length, 1);

    const inactiveColumnIcons = wrapper.find('.fa-sort');
    assert.equal(inactiveColumnIcons.length, 1);
  });

  it('should not render colgroup if no widths specified', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta' }
    ];
    const wrapper = mount(<SortableTable columns={columns} />);

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
    const wrapper = mount(<SortableTable columns={columns} />);

    const colgroup = wrapper.find('colgroup');
    assert(colgroup.exists());

    const col = wrapper.find('col');
    columns.forEach((column, i) => assert.equal(col.get(i).style.width, column.width));
  });

  it('should render row className when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <SortableTable
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

  it('should render expandable row when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <SortableTable
        columns={columns}
        rows={rows}
        rowExpanded={row => row === 'Charlie' && <span className="expando">Hey</span>}
      />
    );
    const trs = wrapper.find('tbody tr');
    assert.equal(trs.length, rows.length + 2); // For expanded and hidden for stripeing

    const td = wrapper.find(`td[colSpan=${columns.length}]`);
    assert.equal(td.length, 1);

    const span = wrapper.find('span.expando');
    assert(span.exists());
  });

  it('should supply onClick row handler when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const onClick = sinon.stub();
    const wrapper = mount(
      <SortableTable
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
    const wrapper = mount(<SortableTable columns={columns} rows={[1, 2, 3]} />);

    assert.equal(wrapper.find('thead th.text-left').length, 1, 'thead th.text-left incorrect');
    assert.equal(wrapper.find('thead th.text-center').length, 1, 'thead th.text-center incorrect');
    assert.equal(wrapper.find('thead th.text-right').length, 1, 'thead th.text-right incorrect');

    assert.equal(wrapper.find('td.text-left').length, 3, 'td.text-left incorrect');
    assert.equal(wrapper.find('td.text-center').length, 3, 'td.text-center incorrect');
    assert.equal(wrapper.find('td.text-right').length, 3, 'td.text-right incorrect');

    assert.equal(wrapper.find('tfoot th.text-left').length, 1, 'tfoot th.text-left incorrect');
    assert.equal(wrapper.find('tfoot th.text-center').length, 1, 'tfoot th.text-center incorrect');
    assert.equal(wrapper.find('tfoot th.text-right').length, 1, 'tfoot th.text-right incorrect');
  });
});
