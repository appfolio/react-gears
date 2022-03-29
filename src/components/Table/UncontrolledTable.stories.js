import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import fecha from 'fecha';
import React from 'react';
import Button from '../Button/Button';
import UncontrolledTable from './UncontrolledTable';

const DATA = [
  {
    key: '111',
    expanded: false,
    first: 'Rufus Xavier Sarsparilla',
    last: 'Jones',
    email: 'rufus.xavier.sarsparilla@example.com',
    dob: new Date(1968, 6, 15),
  },
  {
    key: '222',
    expanded: false,
    first: 'Albert Andreas Armadillo',
    last: 'Thomas',
    email: 'albert.andreas.armadillo@example.com',
    dob: new Date(1972, 7, 17),
  },
  {
    key: '333',
    expanded: false,
    first: 'Arron',
    last: 'Douglas',
    email: 'arron.douglas@example.com',
    dob: new Date(1982, 4, 1),
  },
  {
    key: '444',
    expanded: false,
    first: 'Reginald',
    last: 'Rhodes',
    email: 'reginald.rhodes@example.com',
    dob: new Date(1968, 8, 14),
  },
  {
    key: '555',
    expanded: false,
    first: 'Jimmy',
    last: 'Mendoza',
    email: 'jimmy.mendoza@example.com',
    dob: new Date(1964, 1, 1),
  },
  {
    key: '666',
    expanded: false,
    first: 'Georgia',
    last: 'Montgomery',
    email: 'georgia.montgomery@example.com',
    dob: new Date(1960, 6, 4),
  },
  {
    key: '777',
    expanded: true,
    first: 'Serenity',
    last: 'Thomas',
    email: 'serenity.thomas@example.com',
    dob: new Date(1973, 0, 11),
  },
  {
    key: '888',
    expanded: false,
    first: 'Tonya',
    last: 'Elliott',
    email: 'tonya.elliott@example.com',
    dob: new Date(1954, 7, 17),
  },
  {
    key: '999',
    expanded: false,
    first: 'Maxine',
    last: 'Turner',
    email: 'maxine.turner@example.com',
    dob: new Date(1961, 8, 19),
  },
  {
    key: '000',
    expanded: false,
    first: 'Max',
    last: 'Headroom',
    email: 'max.headroom@example.com',
    dob: new Date(1984, 6, 1),
  },
];

const EmailCell = (row) => <a href={`mailto:${row.email}`}>{row.email}</a>;
const FullName = (row) => (
  <div>
    {row.first} {row.last}
  </div>
);
const EditButton = () => <Button size="sm">Edit</Button>;

export default {
  title: 'Table',
  component: UncontrolledTable,
};

export const UncontrolledTableExample = () => (
  <div>
    <UncontrolledTable
      columns={[
        {
          header: 'First',
          key: 'first',
          cell: (row) => row.first,
          width: '20%',
        },
        {
          header: 'Last',
          key: 'last',
          cell: (row) => row.last,
          width: '30%',
        },
        {
          header: 'DOB',
          key: 'dob',
          cell: (row) => fecha.format(row.dob, 'MM/DD/YYYY'),
          width: '15%',
        },
        {
          header: 'Email',
          key: 'email',
          cell: EmailCell,
          width: '35%',
        },
      ]}
      rows={DATA}
      rowExpanded={FullName}
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
      onVisibleRowsChange={action('onVisibleRowsChange')}
    />
  </div>
);

export const CustomHeader = () => (
  <UncontrolledTable
    columns={[
      {
        header: 'First',
        key: 'first',
        cell: (row) => row.first,
        width: '20%',
      },
      {
        header: 'Last',
        key: 'last',
        cell: (row) => row.last,
        width: '30%',
      },
      {
        header: 'DOB',
        key: 'dob',
        cell: (row) => fecha.format(row.dob, 'MM/DD/YYYY'),
        width: '15%',
      },
      {
        header: 'Email',
        key: 'email',
        cell: EmailCell,
        width: '35%',
      },
    ]}
    rows={DATA}
    rowExpanded={FullName}
    sort={{ column: 'last', ascending: true }}
    header={[
      <tr>
        <th colSpan={3}>Basic Info</th> <th colSpan={1}>Contact Info</th>
      </tr>,
    ]}
  />
);

export const CustomFooter = () => (
  <div>
    <UncontrolledTable
      columns={[
        {
          header: 'Date',
          key: 'date',
          cell: (row) => fecha.format(row.date, 'MM/DD/YYYY'),
          width: '25%',
        },
        {
          header: 'Description',
          key: 'name',
          cell: (row) => row.name,
          width: '50%',
        },
        {
          header: 'Cost',
          key: 'cost',
          cell: (row) => row.cost,
          width: '25%',
          align: 'right',
        },
      ]}
      rows={[
        {
          key: '111',
          expanded: false,
          date: new Date(2016, 6, 15),
          name: 'Utility bill',
          cost: '$123.45',
        },
        {
          key: '222',
          expanded: false,
          date: new Date(2016, 7, 17),
          name: 'Roof repair',
          cost: '$4000.00',
        },
        { key: '333', expanded: false, date: new Date(2017, 4, 1), name: 'Plumbing', cost: '$350' },
        {
          key: '444',
          expanded: false,
          date: new Date(2018, 8, 14),
          name: 'Painting',
          cost: '$1500',
        },
      ]}
      footer={[
        <tr>
          <td colSpan={2} className="text-end">
            Total Costs
          </td>
          <td className="text-end">$5973.45</td>
        </tr>,
        <tr>
          <td colSpan={2} className="text-end">
            Total Income
          </td>
          <td className="text-end">$26,200.00</td>
        </tr>,
        <tr>
          <td colSpan={2} className="text-end">
            Total Gain
          </td>
          <td className="text-end">$20,226.55</td>
        </tr>,
      ]}
    />
  </div>
);

export const CustomExpandColumn = () => (
  <div>
    <UncontrolledTable
      columns={[
        {
          header: 'First',
          key: 'first',
          cell: (row) => row.first,
          width: '20%',
        },
        {
          header: 'Last',
          key: 'last',
          cell: (row) => row.last,
          width: '30%',
        },
        {
          header: 'DOB',
          key: 'dob',
          cell: (row) => fecha.format(row.dob, 'MM/DD/YYYY'),
          width: '15%',
        },
        {
          header: 'Email',
          key: 'email',
          cell: EmailCell,
          width: '35%',
        },
      ]}
      rows={DATA}
      rowExpanded={FullName}
      sort={{ column: 'last', ascending: true }}
      expandable
      expandableColumn={{
        align: 'right',
        header: 'Actions',
        cell: EditButton,
      }}
    />
  </div>
);
