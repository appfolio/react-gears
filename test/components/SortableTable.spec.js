import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';

import { SortableTable } from '../../src';

describe('<SortableTable />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<SortableTable columns={[]} />);
    assert(wrapper);
  });

  it('should accept all normal Table props', () => {
    const wrapper = mount(
      <SortableTable size="lg" bordered striped dark hover responsive columns={[]} />
    );
    const table = wrapper.find('table');

    assert(wrapper.render().hasClass('table-responsive'), 'responsive missing');
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
    const wrapper = mount(<SortableTable columns={columns} />);
    const headers = wrapper.find('th');
    assert.equal(headers.length, columns.length);
    headers.forEach((th, i) => assert(th.text().indexOf(columns[i].header) > -1));
  });

  it('should support custom rendered rows', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];

    const renderRow = (rowData) => (
      <tr id={`row-${rowData}`}>
        <td>{`Custom ${rowData}`}</td>
      </tr>
    );
    const wrapper = mount(<SortableTable columns={columns} rows={rows} renderRow={renderRow} />);
    assert(wrapper.find('#row-Bravo').text().includes('Custom Bravo'));
  });

  it('should render all rows', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(<SortableTable columns={columns} rows={rows} />);
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
    const wrapper = mount(<SortableTable columns={columns} />);
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
    const wrapper = mount(<SortableTable columns={columns} rows={rows} />);
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
    const wrapper = mount(<SortableTable columns={columns} />);

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
    const wrapper = mount(<SortableTable columns={columns} />);

    const footer = wrapper.find('tfoot');
    assert(footer.exists());

    const footers = wrapper.find('span');
    assert.equal(footers.length, classNames.length);
    footers.forEach((th, i) => assert(th.hasClass(classNames[i])));
  });

  it('should render custom footer', () => {
    const columns = [{ header: 'Name' }];
    const wrapper = mount(
      <SortableTable
        columns={columns}
        footer={[
          <tr>
            <td className="total">Costs</td>
          </tr>,
          <tr>
            <td className="total">Total Costs</td>
          </tr>,
        ]}
      />
    );

    const footer = wrapper.find('tfoot');
    assert(footer.exists());

    const footers = wrapper.find('tfoot td');
    assert.equal(footers.length, 2);
    footers.forEach((td) => assert(td.hasClass('total')));
  });

  it('should render custom header', () => {
    const columns = [{ header: 'Name' }];
    const wrapper = mount(
      <SortableTable
        columns={columns}
        header={[
          <tr>
            <th className="custom-header">Custom Header</th>,
            <th className="custom-header">Custom Header 2</th>
          </tr>,
        ]}
      />
    );

    const header = wrapper.find('thead');
    assert(header.exists());

    const headers = wrapper.find('thead th.custom-header');
    assert.strictEqual(headers.length, 2);
  });

  it('should render sorting controls when onSort present', () => {
    const columns = [
      { header: 'Alpha', onSort: () => {} },
      { header: 'Bravo', onSort: () => {} },
      { header: 'Charlie', onSort: () => {} },
      { header: 'Delta' },
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
      { header: 'Delta' },
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
      { header: 'Delta' },
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
      { header: 'Delta' },
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
      { header: 'Delta', width: '35%' },
    ];
    const wrapper = mount(<SortableTable columns={columns} />);

    const colgroup = wrapper.find('colgroup');
    assert(colgroup.exists());

    const col = wrapper.find('col');
    columns.forEach((column, i) => assert.equal(col.get(i).props.style.width, column.width));
  });

  it('should render row className when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = mount(
      <SortableTable columns={columns} rows={rows} rowClassName={(row) => row} />
    );
    const trs = wrapper.find('tbody tr');
    assert.equal(trs.length, rows.length);
    trs.forEach((tr, i) => {
      assert(tr.hasClass(rows[i]));
    });
  });

  it('should render expandable row when specified', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = shallow(
      <SortableTable
        columns={columns}
        rows={rows}
        rowExpanded={(row) => row === 'Charlie' && <span className="expando">Hey</span>}
      />
    );
    const trs = wrapper.find('tbody tr');
    assert.equal(trs.length, rows.length + 2); // For expanded and hidden for stripeing

    const td = wrapper.find(`td[colSpan=${columns.length}]`);
    assert.equal(td.length, 1);

    const span = wrapper.find('span.expando');
    assert(span.exists());
  });

  it('should call rowOnClick with row and event when row clicked', () => {
    const columns = [{ header: 'Name', cell: (row) => row }];
    const row1 = 'Alpha';
    const rows = [row1];
    const onClick = sinon.stub();

    const wrapper = mount(<SortableTable columns={columns} rows={rows} rowOnClick={onClick} />);

    const clickEvent = { eventData: '123' };
    wrapper.find('tbody tr').first().simulate('click', clickEvent);
    const firstArg = onClick.getCall(0).args[0];
    const secondArg = onClick.getCall(0).args[1];
    assert.equal(firstArg, row1);
    assert.equal(secondArg.eventData, clickEvent.eventData);
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
      { header: 'Left', cell: () => '-', footer: '-', className: 'whatever' },
    ];
    const wrapper = mount(<SortableTable columns={columns} rows={[1, 2, 3]} />);

    assert.equal(wrapper.find('thead th.whatever').length, 1, 'thead th.whatever incorrect');

    assert.equal(wrapper.find('tbody td.whatever').length, 3, 'tbody td.whatever incorrect');

    assert.equal(wrapper.find('tfoot td.whatever').length, 1, 'tfoot td.whatever incorrect');
  });

  describe('Expandable column', () => {
    const columns = [
      { header: 'Default', cell: () => '-', footer: '-' },
      { header: 'Left', cell: () => '-', footer: '-', className: 'whatever' },
    ];

    it('should not render expandable column helper when onExpand not present', () => {
      const wrapper = mount(<SortableTable columns={columns} rows={[1, 2, 3]} />);
      assert.equal(wrapper.find('td Button').length, 0, 'expand buttons present');
    });

    it('should render expandable column helper when onExpand present', () => {
      const wrapper = mount(
        <SortableTable columns={columns} rows={[1, 2, 3]} onExpand={() => {}} />
      );
      assert.equal(wrapper.find('td Button').length, 3, 'expand buttons missing');
    });

    it('should call onExpand when clicked', () => {
      const onExpand = sinon.stub();
      const wrapper = mount(
        <SortableTable columns={columns} rows={[1, 2, 3]} onExpand={onExpand} />
      );
      wrapper.find('td Button').first().simulate('click');
      assert(onExpand.calledWith(1));
      wrapper.find('td Button').last().simulate('click');
      assert(onExpand.calledWith(3));
    });
  });

  describe('Selectable column', () => {
    const columns = [
      { header: 'Default', cell: () => '-', footer: '-' },
      { header: 'Left', cell: () => '-', footer: '-', className: 'whatever' },
    ];

    it('should not render selectable column helper when rowSelected not present', () => {
      const wrapper = mount(<SortableTable columns={columns} rows={[1, 2, 3]} />);
      assert.equal(wrapper.find('input').length, 0, 'select checkbox present');
    });

    it('should render selectable column helper when rowSelected present', () => {
      const wrapper = mount(
        <SortableTable columns={columns} rows={[1, 2, 3]} rowSelected={() => false} />
      );
      assert.equal(wrapper.find('input').length, 4, 'select checkbox missing');
    });

    it('should call onSelect when clicked', () => {
      const onSelect = sinon.stub();
      const wrapper = mount(
        <SortableTable
          columns={columns}
          rows={[1, 2, 3]}
          onSelect={onSelect}
          rowSelected={() => false}
        />
      );
      wrapper
        .find('td input')
        .first()
        .simulate('change', { target: { checked: true } });
      assert(onSelect.calledWith(1, true));
      wrapper
        .find('td input')
        .last()
        .simulate('change', { target: { checked: false } });
      assert(onSelect.calledWith(3, false));
    });

    it('should check the selectAll checkbox when allSelected present', () => {
      const wrapper = mount(
        <SortableTable
          columns={columns}
          rows={[1, 2, 3]}
          onSelect={() => {}}
          rowSelected={() => false}
          allSelected
        />
      );
      assert.equal(wrapper.find('th input').prop('checked'), true);
    });

    it('should not check the selectAll checkbox when allSelected not present', () => {
      const wrapper = mount(
        <SortableTable
          columns={columns}
          rows={[1, 2, 3]}
          onSelect={() => {}}
          rowSelected={() => false}
          allSelected={false}
        />
      );
      assert.equal(wrapper.find('th input').prop('checked'), false);
    });

    it('should call onSelectAll when clicked', () => {
      const onSelectAll = sinon.stub();
      const wrapper = mount(
        <SortableTable
          columns={columns}
          rows={[1, 2, 3]}
          onSelectAll={onSelectAll}
          rowSelected={() => false}
        />
      );
      wrapper
        .find('th input')
        .first()
        .simulate('change', { target: { checked: true } });
      assert(onSelectAll.calledWith(true));
      wrapper
        .find('th input')
        .first()
        .simulate('change', { target: { checked: false } });
      assert(onSelectAll.calledWith(false));
    });

    it('should not call rowOnClick when row checkbox is clicked', () => {
      const targetRow = 'cool row';
      const rows = [targetRow];
      const onClick = sinon.spy();
      const onSelect = sinon.spy();

      const wrapper = mount(
        <SortableTable
          columns={columns}
          rows={rows}
          rowOnClick={onClick}
          onSelect={onSelect}
          onSelectAll={sinon.stub()}
          rowExpanded={sinon.stub()}
          rowSelected={sinon.stub()}
        />
      );

      const clickEvent = { target: { checked: true } };
      const changeEvent = { target: { checked: true } };
      const checkbox = wrapper.find('tbody tr input').first();
      checkbox.simulate('click', clickEvent);
      checkbox.simulate('change', changeEvent);

      assert(onSelect.calledWith(targetRow, clickEvent.target.checked));
      assert(onClick.notCalled);
    });
  });
});
