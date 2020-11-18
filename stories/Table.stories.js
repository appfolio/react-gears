import React from 'react';
import fecha from 'fecha';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean, number, select } from '@storybook/addon-knobs';
import { Button, Table, SortableTable, UncontrolledTable } from '../src';

const DATA = [
  { key: '111', expanded: false, first: 'Rufus Xavier Sarsparilla', last: 'Jones', email: 'rufus.xavier.sarsparilla@example.com', dob: new Date(1968, 6, 15) },
  { key: '222', expanded: false, first: 'Albert Andreas Armadillo', last: 'Thomas', email: 'albert.andreas.armadillo@example.com', dob: new Date(1972, 7, 17) },
  { key: '333', expanded: false, first: 'Arron', last: 'Douglas', email: 'arron.douglas@example.com', dob: new Date(1982, 4, 1) },
  { key: '444', expanded: false, first: 'Reginald', last: 'Rhodes', email: 'reginald.rhodes@example.com', dob: new Date(1968, 8, 14) },
  { key: '555', expanded: false, first: 'Jimmy', last: 'Mendoza', email: 'jimmy.mendoza@example.com', dob: new Date(1964, 1, 1) },
  { key: '666', expanded: false, first: 'Georgia', last: 'Montgomery', email: 'georgia.montgomery@example.com', dob: new Date(1960, 6, 4) },
  { key: '777', expanded: true, first: 'Serenity', last: 'Thomas', email: 'serenity.thomas@example.com', dob: new Date(1973, 0, 11) },
  { key: '888', expanded: false, first: 'Tonya', last: 'Elliott', email: 'tonya.elliott@example.com', dob: new Date(1954, 7, 17) },
  { key: '999', expanded: false, first: 'Maxine', last: 'Turner', email: 'maxine.turner@example.com', dob: new Date(1961, 8, 19) },
  { key: '000', expanded: false, first: 'Max', last: 'Headroom', email: 'max.headroom@example.com', dob: new Date(1984, 6, 1) }
];

storiesOf('Table', module)
  .add('Live example', () => (
    <Table
      bordered={boolean('bordered', true)}
      responsive={boolean('responsive', true)}
      striped={boolean('striped', true)}
      hover={boolean('hover', true)}
      size={select('size', ['', 'sm', 'lg'], 'sm')}
    >
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>DOB</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {DATA.map(row => (
          <tr key={row.name}>
            <td>{row.first}</td>
            <td>{row.last}</td>
            <td>{fecha.format(row.dob, 'MM/DD/YYYY')}</td>
            <td><a href={`mailto:${row.email}`}>{row.email}</a></td>
          </tr>
         ))}
      </tbody>
    </Table>
  ))
  .add('SortableTable', () => {
    const column = select('active', ['first', 'last', 'dob', 'email'], 'last');
    const ascending = boolean('ascending', true);
    return (
      <div>
        <p className="text-warning">
          <b>Note:</b> This is an uncontrolled example, will not sort on click.  See 'UncontrolledTable' story.
        </p>
        <SortableTable
          bordered={boolean('bordered', false)}
          hover={boolean('hover', true)}
          responsive={boolean('responsive', true)}
          size={select('size', ['', 'sm', 'lg'], 'sm')}
          striped={boolean('striped', true)}
          truncate={boolean('truncate', false)}
          columns={[
            {
              active: column === 'first',
              ascending,
              header: 'First',
              key: 'first',
              cell: row => row.first,
              onSort: action('onSort', 'First'),
              width: '20%'
            },
            {
              active: column === 'last',
              ascending,
              header: 'Last',
              key: 'last',
              cell: row => row.last,
              onSort: action('onSort', 'Last'),
              width: '30%'
            },
            {
              active: column === 'dob',
              ascending,
              header: 'DOB',
              key: 'dob',
              cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
              onSort: action('onSort', 'DOB'),
              width: '15%'
            },
            {
              active: column === 'email',
              ascending,
              header: <span>Email</span>,
              key: 'email',
              cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
              onSort: action('onSort', 'Email'),
              width: '35%'
            }
          ]}
          rows={DATA}
          rowSelected={row => row.key === '777'}
          onExpand={action('onExpand')}
          onSelect={action('onSelect')}
          onSelectAll={action('onSelectAll')}
        />
      </div>
    );
  })
  .add('UncontrolledTable', () => (
    <div>
      <UncontrolledTable
        columns={[
          {
            header: 'First',
            key: 'first',
            cell: row => row.first,
            width: '20%'
          },
          {
            header: 'Last',
            key: 'last',
            cell: row => row.last,
            width: '30%'
          },
          {
            header: 'DOB',
            key: 'dob',
            cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
            width: '15%'
          },
          {
            header: 'Email',
            key: 'email',
            cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
            width: '35%'
          }
        ]}
        rows={DATA}
        rowExpanded={row => <div>{row.first} {row.last}</div>}
        sort={{ column: 'last', ascending: true }}
        expandable={boolean('expandable', false)}
        responsive={boolean('responsive', true)}
        selectable={boolean('selectable', false)}
        truncate={boolean('truncate', false)}
        paginated={boolean('paginated', false)}
        pageSize={number('pageSize', 10)}
        onSelect={action('onSelect')}
        onSort={action('onSort')}
        onPageChange={action('onPageChange')}
      />
    </div>
  ))
  .add('custom footer', () => (
    <div>
      <UncontrolledTable
        columns={[
          {
            header: 'Date',
            key: 'date',
            cell: row => fecha.format(row.date, 'MM/DD/YYYY'),
            width: '25%'
          },
          {
            header: 'Description',
            key: 'name',
            cell: row => row.name,
            width: '50%'
          },
          {
            header: 'Cost',
            key: 'cost',
            cell: row => row.cost,
            width: '25%',
            align: 'right'
          }
        ]}
        rows={[
          { key: '111', expanded: false, date: new Date(2016, 6, 15), name: 'Utility bill', cost: '$123.45' },
          { key: '222', expanded: false, date: new Date(2016, 7, 17), name: 'Roof repair', cost: '$4000.00' },
          { key: '333', expanded: false, date: new Date(2017, 4, 1), name: 'Plumbing', cost: '$350' },
          { key: '444', expanded: false, date: new Date(2018, 8, 14), name: 'Painting', cost: '$1500' },
          ]}
        footer={[
          <tr>
            <td colSpan={2} className="text-right">Total Costs</td>
            <td className="text-right">$5973.45</td>
          </tr>,
          <tr>
            <td colSpan={2} className="text-right">Total Income</td>
            <td className="text-right">$26,200.00</td>
          </tr>,
          <tr>
            <td colSpan={2} className="text-right">Total Gain</td>
            <td className="text-right">$20,226.55</td>
          </tr>
        ]}
      />
    </div>
  ))
  .add('custom expand column', () => (
    <div>
      <UncontrolledTable
        columns={[
          {
            header: 'First',
            key: 'first',
            cell: row => row.first,
            width: '20%'
          },
          {
            header: 'Last',
            key: 'last',
            cell: row => row.last,
            width: '30%'
          },
          {
            header: 'DOB',
            key: 'dob',
            cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
            width: '15%'
          },
          {
            header: 'Email',
            key: 'email',
            cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
            width: '35%'
          }
        ]}
        rows={DATA}
        rowExpanded={row => <div>{row.first} {row.last}</div>}
        sort={{ column: 'last', ascending: true }}
        expandable
        expandableColumn={{
          align: 'right',
          header: 'Actions',
          cell: () => <Button size="sm">Edit</Button>,
        }}
      />
    </div>
  ))
  .add('Align column', () => (
    <div>
      <p className="text-warning">
        <b>Note:</b> This is an uncontrolled example, will not sort on click.  See 'UncontrolledTable' story.
      </p>
      <SortableTable
        columns={[
          {
            header: 'Default Align',
            key: 'name',
            cell: row => row.first,
          },
          {
            align: 'left',
            header: 'Left Align',
            key: 'last',
            cell: row => row.last,
          },
          {
            align: 'center',
            header: 'Center Align',
            key: 'dob',
            cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
          },
          {
            align: 'right',
            header: 'Right Align',
            key: 'email',
            cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
          }
        ]}
        rows={DATA}
      />
    </div>
  ));

