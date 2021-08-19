import React, { useState } from 'react';
import { render, fireEvent, createEvent, act } from '@testing-library/react';
import { UncontrolledTable, Button } from '../../src';

describe('<UncontrolledTable />', () => {
  it('should render correctly', () => {
    const wrapper = render(<UncontrolledTable columns={[]} />);
    expect(wrapper).toBeTruthy();
  });

  it('should accept all normal Table props', () => {
    const { container } = render(<UncontrolledTable size="lg" bordered striped dark hover responsive columns={[]} />);
    const table = container.querySelector('table');

    expect(container.querySelector('.table-responsive')).toBeTruthy();
    expect(table).toHaveClass('table-bordered', 'table-striped', 'table-dark', 'table-hover');
  });

  it('should render all columns', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta' }
    ];
    const wrapper = render(<UncontrolledTable columns={columns} />);

    columns.forEach(c => wrapper.getByText(c.header, { selector: 'th' }));
  });

  it('should render all rows', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = render(<UncontrolledTable columns={columns} rows={rows} />);

    rows.forEach(r => wrapper.getByText(r, { selector: 'td' }));
  });

  it('should render header components', () => {
    const headers = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = headers.map((name) => {
      return {
        header: <span className={name}>{name}</span>
      };
    });
    const wrapper = render(<UncontrolledTable columns={columns} />);

    headers.forEach(header => wrapper.getByText(header, { selector: `span.${header}` }));
  });

  it('should render cell components', () => {
    const headers = ['h1', 'h2', 'h3', 'h4'];
    const columns = headers.map((header) => {
      return {
        header,
        cell: row => <span className={header}>{row}</span>
      };
    });
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const { container } = render(<UncontrolledTable columns={columns} rows={rows} />);

    headers.forEach((name) => {
      const cells = container.querySelectorAll(`.${name}`);
      expect(cells.length).toEqual(rows.length);
    });
  });

  it('should not render tfoot if no footers specified', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map((name) => {
      return {
        header: name
      };
    });
    const { container } = render(<UncontrolledTable columns={columns} />);

    const footer = container.querySelector('tfoot');
    expect(footer).toBeFalsy();
  });

  it('should render footer components', () => {
    const classNames = ['alpha', 'bravo', 'charlie', 'delta'];
    const columns = classNames.map((name) => {
      return {
        header: name,
        footer: <span className={`footer-${name}`}>{name}</span>
      };
    });
    const wrapper = render(<UncontrolledTable columns={columns} />);

    const footer = wrapper.container.querySelector('tfoot');
    expect(footer).toBeTruthy();

    classNames.forEach(name => wrapper.getByText(name, { selector: `.footer-${name}` }));
  });

  it('should render sorting controls when sortable present', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta', sortable: false }
    ];
    const wrapper = render(<UncontrolledTable columns={columns} />);
    const sortIcons = wrapper.getAllByTestId('sort-icon');
    expect(sortIcons.length).toEqual(3);
  });

  it('should render correct sort icons when specified', () => {
    const columns = [
      { key: 'alpha', header: 'Alpha' },
      { key: 'bravo', header: 'Bravo' },
      { key: 'charlie', header: 'Charlie' },
      { key: 'delta', header: 'Delta', sortable: false }
    ];
    const wrapper = render(<UncontrolledTable columns={columns} sort={{ column: 'alpha', ascending: true }} />);

    const activeAscColumnIcons = wrapper.queryAllByLabelText('sort-ascending');
    expect(activeAscColumnIcons.length).toEqual(1);

    const activeDescColumnIcons = wrapper.queryAllByLabelText('sort-descending');
    expect(activeDescColumnIcons.length).toEqual(0);

    const inactiveColumnIcons = wrapper.queryAllByLabelText('sort');
    expect(inactiveColumnIcons.length).toEqual(2);
  });

  it('should not render colgroup if no widths specified', () => {
    const columns = [
      { header: 'Alpha' },
      { header: 'Bravo' },
      { header: 'Charlie' },
      { header: 'Delta' }
    ];
    const { container } = render(<UncontrolledTable columns={columns} />);

    const colgroup = container.querySelector('colgroup');
    expect(colgroup).toBeNull();
  });

  it('should render column widths if specified', () => {
    const columns = [
      { header: 'Alpha', width: '20%' },
      { header: 'Bravo', width: '30%' },
      { header: 'Charlie', width: '15%' },
      { header: 'Delta', width: '35%' }
    ];
    const wrapper = render(<UncontrolledTable columns={columns} />);

    const colgroup = wrapper.container.querySelector('colgroup');
    expect(colgroup).toBeTruthy();

    const cols = wrapper.container.querySelectorAll('col');

    cols.forEach((col, i) => {
      expect(col.style.width).toEqual(columns[i].width);
    });
  });

  it('should render row className when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        rowClassName={row => row}
      />
    );

    rows.forEach((r) => {
      const row = wrapper.container.querySelector(`tr.${r}`);
      expect(row).toBeTruthy();
    });
  });

  it('should render expandable column when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        rowExpanded={() => <span className="expando">Hey</span>}
      />
    );

    const ths = wrapper.container.querySelectorAll('th');
    expect(ths.length).toEqual(columns.length + 1);
    wrapper.getByText('', { selector: 'th' });
  });

  it('should merge expandableColumn with the expand column definition so you can alter it', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        expandable
        rowExpanded={() => <span className="expando">Hey</span>}
        expandableColumn={{ header: 'whatever you want, homie' }}
      />
    );

    wrapper.getByText('whatever you want, homie', { selector: 'th' });
  });

  it('should update expanded rows when new expanded prop provided', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [{ name: 'Mantleray', key: '1' }];
    const rowExpanded = () => <span className="expando">Hey</span>;
    const expanded = [];
    const props = { columns, rows, expandable: true, expanded, rowExpanded };
    const wrapper = render(<UncontrolledTable {...props} />);

    let expandedRow = wrapper.container.querySelectorAll('.expando');
    expect(expandedRow.length).toEqual(0);

    props.expanded = [rows[0]];

    wrapper.rerender(<UncontrolledTable {...props} />);

    expandedRow = wrapper.container.querySelectorAll('.expando');
    expect(expandedRow.length).toEqual(1);
  });

  it('should call onExpand when row is expanded', () => {
    const columns = [{ header: 'Name', cell: row => row.name }];
    const rows = [{ name: 'Mantleray', key: '1' }];
    const rowExpanded = () => <span className="expando">Hey</span>;
    const onExpand = jest.fn();
    const props = { columns, rows, expandable: true, rowExpanded, onExpand };
    const wrapper = render(<UncontrolledTable {...props} />);

    const expandButton = wrapper.getByLabelText('Expand row');

    fireEvent.click(expandButton);

    expect(onExpand).toHaveBeenCalled();
  });

  it('should supply onClick row handler when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const onClick = jest.fn();
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        rowOnClick={onClick}
      />
    );

    const target = wrapper.getByText('Alpha');

    const event = createEvent.click(target);
    fireEvent.click(target, event);

    expect(onClick).toHaveBeenCalledWith('Alpha', expect.anything());
  });

  it('should render correct align when present', () => {
    const columns = [
      { header: 'Default', cell: () => '-', footer: '-' },
      { header: 'Left', cell: () => '-', footer: '-', align: 'left' },
      { header: 'Center', cell: () => '-', footer: '-', align: 'center' },
      { header: 'Right', cell: () => '-', footer: '-', align: 'right' },
    ];
    const { container } = render(<UncontrolledTable columns={columns} rows={[1, 2, 3]} />);

    expect(container.querySelectorAll('thead th.text-left').length).toEqual(1);
    expect(container.querySelectorAll('thead th.text-center').length).toEqual(1);
    expect(container.querySelectorAll('thead th.text-right').length).toEqual(1);

    expect(container.querySelectorAll('tbody td.text-left').length).toEqual(3);
    expect(container.querySelectorAll('tbody td.text-center').length).toEqual(3);
    expect(container.querySelectorAll('tbody td.text-right').length).toEqual(3);

    expect(container.querySelectorAll('tfoot td.text-left').length).toEqual(1);
    expect(container.querySelectorAll('tfoot td.text-center').length).toEqual(1);
    expect(container.querySelectorAll('tfoot td.text-right').length).toEqual(1);
  });

  it('should render correct column classnames when present', () => {
    const columns = [
      { header: 'Default', cell: () => '-', footer: '-' },
      { header: 'Left', cell: () => '-', footer: '-', className: 'whatever' }
    ];
    const { container } = render(<UncontrolledTable columns={columns} rows={[1, 2, 3]} />);

    expect(container.querySelectorAll('thead th.whatever').length).toEqual(1);
    expect(container.querySelectorAll('tbody td.whatever').length).toEqual(3);
    expect(container.querySelectorAll('tfoot td.whatever').length).toEqual(1);
  });

  it('should render select column when specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta'];
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
      />
    );

    const ths = wrapper.container.querySelectorAll('th');
    expect(ths.length).toEqual(columns.length + 1);
    wrapper.getByLabelText('Select all rows');
  });

  it('should call onSelect when selectable row picked', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const onSelect = jest.fn();
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        onSelect={onSelect}
      />
    );

    const selectAll = wrapper.getByLabelText('Select all rows');
    fireEvent.click(selectAll);

    expect(onSelect).toHaveBeenLastCalledWith(rows);
  });

  it('should call onPageChange on page change', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const onPageChange = jest.fn();
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        paginated
        pageSize={4}
        onPageChange={onPageChange}
      />
    );

    const page1 = wrapper.getByText('2', { selector: '.page-link' });
    fireEvent.click(page1);

    expect(onPageChange).toHaveBeenCalledWith(1);
  });

  it('should show correct rows when paginated specified', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const { container } = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        paginated
        pageSize={4}
      />
    );

    expect(container.querySelectorAll('tbody tr').length).toEqual(4);
  });

  it('should show correct rows on page change', () => {
    const columns = [{ header: 'Name', cell: row => row }];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        paginated
        pageSize={4}
      />
    );

    wrapper.getByText('Alpha');
    wrapper.getByText('Bravo');
    wrapper.getByText('Charlie');
    wrapper.getByText('Delta');

    expect(wrapper.queryByText('Echo')).toBeFalsy();
    expect(wrapper.queryByText('Foxtrot')).toBeFalsy();
    expect(wrapper.queryByText('Golf')).toBeFalsy();
    expect(wrapper.queryByText('Hotel')).toBeFalsy();

    const page2 = wrapper.getByText('2', { selector: '.page-link' });
    fireEvent.click(page2);

    wrapper.getByText('Echo');
    wrapper.getByText('Foxtrot');
    wrapper.getByText('Golf');
    wrapper.getByText('Hotel');

    expect(wrapper.queryByText('Alpha')).toBeFalsy();
    expect(wrapper.queryByText('Bravo')).toBeFalsy();
    expect(wrapper.queryByText('Charlie')).toBeFalsy();
    expect(wrapper.queryByText('Delta')).toBeFalsy();
  });

  it('should show correct rows on sort change', () => {
    const columns = [{ header: 'Name', key: 'name', cell: row => row.name }];
    const rows = [{ name: 'Alpha' }, { name: 'Bravo' }, { name: 'Charlie' }];
    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        sort={{ column: 'name', ascending: false }}
        paginated
        pageSize={4}
      />
    );

    let nameHeader = wrapper.getByText('Name', { selector: 'th' });

    let names = wrapper.container.querySelectorAll('td');
    let namesArr = Array.from(names).map(el => el.innerHTML);

    expect(namesArr).toMatchObject(['Charlie', 'Bravo', 'Alpha']);

    fireEvent.click(nameHeader);

    names = wrapper.container.querySelectorAll('td');
    namesArr = Array.from(names).map(el => el.textContent);

    expect(namesArr).toMatchObject(['Alpha', 'Bravo', 'Charlie']);

    nameHeader = wrapper.getByText('Name', { selector: 'th' });
    fireEvent.click(nameHeader);

    names = wrapper.container.querySelectorAll('td');
    namesArr = Array.from(names).map(el => el.textContent);

    expect(namesArr).toMatchObject(['Charlie', 'Bravo', 'Alpha']);
  });

  it('should hide columns when hidden', () => {
    const columns = [
      { header: 'Name', cell: row => row },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel'];
    const { container } = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
      />
    );

    expect(container.querySelectorAll('th').length).toEqual(1);
    expect(container.querySelectorAll('td').length).toEqual(rows.length);
  });

  it('should update selected when new selected props are provided', () => {
    const columns = [
      { header: 'Name', cell: row => row.key },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = [{ key: 'Alpha' }, { key: 'Bravo' }, { key: 'Charlie' }];

    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        selected={[{ key: 'Alpha' }]}
      />
    );

    const alphaRow = wrapper.getByText('Alpha').parentElement;

    expect(alphaRow).toHaveClass('table-primary');
    const alphaCheckbox = alphaRow.querySelector('input[type=checkbox]');

    expect(alphaCheckbox.checked).toBeTruthy();

    fireEvent.click(alphaCheckbox);

    expect(alphaCheckbox.checked).toBeFalsy();

    wrapper.rerender(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
        selected={[{ key: 'Bravo' }]}
      />
    );

    const bravoRow = wrapper.getByText('Bravo').parentElement;

    expect(bravoRow).toHaveClass('table-primary');
    const bravoCheckbox = bravoRow.querySelector('input[type=checkbox]');

    expect(bravoCheckbox.checked).toBeTruthy();
  });

  it('should toggle selection correctly', () => {
    const columns = [
      { header: 'Name', cell: row => row.key },
      { header: 'Nope', cell: () => 'Nope', hidden: true },
    ];
    const rows = [{ key: 'Alpha' }, { key: 'Bravo' }, { key: 'Charlie' }];

    const wrapper = render(
      <UncontrolledTable
        columns={columns}
        rows={rows}
        selectable
      />
    );

    const alphaRow = wrapper.getByText('Alpha').parentElement;
    const alphaCheckbox = alphaRow.querySelector('input[type=checkbox]');

    expect(alphaCheckbox.checked).toBeFalsy();

    fireEvent.click(alphaCheckbox);

    expect(alphaCheckbox.checked).toBeTruthy();
  });

  it('should expand the rows specified in the expanded prop, when that prop is provided', () => {
    const columns = [{ header: 'Name', cell: row => row.key }];
    const rows = [{ key: 'Alpha' }, { key: 'Bravo' }];
    const expanded = [{ key: 'Alpha' }];

    const wrapper = render(
      <UncontrolledTable columns={columns} rows={rows} expandable expanded={expanded} rowExpanded={row => <span>Expanded {row.key}</span>} />
    );

    wrapper.findByText('Expanded Alpha');
    expect(wrapper.queryByText('Expanded Bravo')).toBeFalsy();
  });

  it('should toggle expanded', () => {
    const columns = [{ header: 'Name', cell: row => row.key }];
    const rows = [{ key: 'Alpha' }, { key: 'Bravo' }];

    const wrapper = render(
      <UncontrolledTable columns={columns} rows={rows} expandable rowExpanded={row => <span>Expanded {row.key}</span>} />
    );

    expect(wrapper.queryByText('Expanded Alpha')).toBeFalsy();
    expect(wrapper.queryByText('Expanded Bravo')).toBeFalsy();

    const expandButtons = wrapper.getAllByLabelText('Expand row');
    expandButtons.forEach(button => button.click());

    wrapper.getByText('Expanded Alpha');
    wrapper.getByText('Expanded Bravo');
  });

  describe('state resets', () => {
    // eslint-disable-next-line react/prop-types
    const UpdatingTable = ({ rows: rowsProp, ...props }) => {
      const [rows, setRows] = useState(rowsProp);

      return (
        <>
          {JSON.stringify(rows, null, 2)}
          <Button onClick={() => setRows(rows.map((row) => { return { ...row, key: `${row.key}+` }; }))}>Update rows</Button>
          <UncontrolledTable {...props} rows={rows} />
        </>
      );
    };

    it('should reset page if row keys change', async () => {
      const columns = [{ header: 'Name', cell: row => row.key }];
      const rows = [{ key: 'Alpha' }, { key: 'Bravo' }];

      const wrapper = render(
        <UpdatingTable columns={columns} rows={rows} paginated pageSize={1} page={1} />
      );

      let activePage = wrapper.container.querySelector('.page-item.active');
      expect(activePage.querySelector('.page-link').innerHTML).toEqual('2');

      await act(async () => {
        wrapper.getByText('Update rows').click();
      });

      await wrapper.findByText('Alpha+');

      activePage = wrapper.container.querySelector('.page-item.active');
      expect(activePage.querySelector('.page-link').innerHTML).toEqual('1');
    });

    it('should reset selected if row keys change', async () => {
      const columns = [{ header: 'Name', cell: row => row.key }];
      const rows = [{ key: 'Alpha' }, { key: 'Bravo' }];

      const wrapper = render(
        <UpdatingTable columns={columns} rows={rows} selectable selected={[{ key: 'Alpha', name: 'Alpha' }]} />
      );

      let alphaRow = wrapper.getByText('Alpha').parentElement;
      let alphaCheckbox = alphaRow.querySelector('input[type=checkbox]');

      expect(alphaCheckbox.checked).toBeTruthy();

      await act(async () => {
        wrapper.getByText('Update rows').click();
      });

      await wrapper.findByText('Alpha+');

      alphaRow = wrapper.getByText('Alpha+').parentElement;
      alphaCheckbox = alphaRow.querySelector('input[type=checkbox]');

      expect(alphaCheckbox.checked).toBeFalsy();
    });

    it('should reset selected if selectable changes to false', () => {
      const columns = [{ header: 'Name', cell: row => row.name }];
      const rows = [{ key: 'Alpha', name: 'Alpha' }, { key: 'Bravo', name: 'Bravo' }];

      const wrapper = render(
        <UncontrolledTable columns={columns} rows={rows} selectable selected={[{ key: 'Alpha', name: 'Alpha' }]} />
      );

      let alphaRow = wrapper.getByText('Alpha').parentElement;
      let alphaCheckbox = alphaRow.querySelector('input[type=checkbox]');

      expect(alphaCheckbox.checked).toBeTruthy();

      wrapper.rerender(
        <UncontrolledTable columns={columns} rows={rows} selected={[{ key: 'Alpha', name: 'Alpha' }]} />
      );

      alphaRow = wrapper.getByText('Alpha').parentElement;
      alphaCheckbox = alphaRow.querySelector('input[type=checkbox]');

      expect(alphaCheckbox).toBeFalsy();
    });

    it('should reset expanded if row keys change', async () => {
      const columns = [{ header: 'Name', cell: row => row.key }];
      const rows = [{ key: 'Alpha' }, { key: 'Bravo' }];

      const wrapper = render(
        <UpdatingTable
          columns={columns}
          rows={rows}
          expandable
          expanded={[{ key: 'Alpha' }]}
          rowExpanded={row => `Expanded ${row.key}`}
        />
      );

      wrapper.getByText('Expanded Alpha');

      await act(async () => {
        wrapper.getByText('Update rows').click();
      });

      await wrapper.findByText('Alpha+');

      const alphaRow = wrapper.queryByText('Expanded Alpha+');
      expect(alphaRow).toBeFalsy();
    });

    it('should reset expanded if expandable changes to false', () => {
      const columns = [{ header: 'Name', cell: row => row.name }];
      const rows = [{ key: 'Alpha', name: 'Alpha' }, { key: 'Bravo', name: 'Bravo' }];

      const wrapper = render(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          expandable
          expanded={[{ key: 'Alpha', name: 'Alpha' }]}
          rowExpanded={row => `Expanded ${row.name}`}
        />
      );

      wrapper.getByText('Expanded Alpha');

      wrapper.rerender(
        <UncontrolledTable
          columns={columns}
          rows={rows}
          expanded={[{ key: 'Alpha', name: 'Alpha' }]}
          rowExpanded={row => `Expanded ${row.name}`}
        />
      );

      const alphaRow = wrapper.queryByText('Expanded Alpha');
      expect(alphaRow).toBeFalsy();
    });
  });
});
