import { action } from '@storybook/addon-actions';
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
    estimatedAge: '25-37',
  },
  {
    key: '222',
    expanded: false,
    first: 'Albert Andreas Armadillo',
    last: 'Thomas',
    email: 'albert.andreas.armadillo@example.com',
    dob: new Date(1972, 7, 17),
    estimatedAge: '29-80',
  },
  {
    key: '333',
    expanded: false,
    first: 'Arron',
    last: 'Douglas',
    email: 'arron.douglas@example.com',
    dob: new Date(1982, 4, 1),
    estimatedAge: '31-85',
  },
  {
    key: '444',
    expanded: false,
    first: 'Reginald',
    last: 'Rhodes',
    email: 'reginald.rhodes@example.com',
    dob: new Date(1968, 8, 14),
    estimatedAge: '40-69',
  },
  {
    key: '555',
    expanded: false,
    first: 'Jimmy',
    last: 'Mendoza',
    email: 'jimmy.mendoza@example.com',
    dob: new Date(1964, 1, 1),
    estimatedAge: '45-91',
  },
  {
    key: '666',
    expanded: false,
    first: 'Georgia',
    last: 'Montgomery',
    email: 'georgia.montgomery@example.com',
    dob: new Date(1960, 6, 4),
    estimatedAge: '50-99',
  },
  {
    key: '777',
    expanded: true,
    first: 'Serenity',
    last: 'Thomas',
    email: 'serenity.thomas@example.com',
    dob: new Date(1973, 0, 11),
    estimatedAge: '1-47',
  },
  {
    key: '888',
    expanded: false,
    first: 'Tonya',
    last: 'Elliott',
    email: 'tonya.elliott@example.com',
    dob: new Date(1954, 7, 17),
    estimatedAge: '2-16',
  },
  {
    key: '999',
    expanded: false,
    first: 'Maxine',
    last: 'Turner',
    email: 'maxine.turner@example.com',
    dob: new Date(1961, 8, 19),
    disabled: true,
    estimatedAge: '4-88',
  },
  {
    key: '000',
    expanded: false,
    first: 'Max',
    last: 'Headroom',
    email: 'max.headroom@example.com',
    dob: new Date(1984, 6, 1),
    disabled: true,
    estimatedAge: '70-72',
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
  title: 'UncontrolledTable',
  component: UncontrolledTable,
  parameters: {
    sourceLink: 'Table/UncontrolledTable.js',
  },
};

export const UncontrolledTableExample = (args) => (
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
      {...args}
    />
  </div>
);
UncontrolledTableExample.args = {
  expandable: false,
  responsive: true,
  selectable: false,
  truncate: false,
  paginated: false,
  pageSize: 10,
  onSelect: action('onSelect'),
  onSort: action('onSort'),
  onPageChange: action('onPageChange'),
  onVisibleRowsChange: action('onVisibleRowsChange'),
};

export const CustomHeader = (args) => (
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
    {...args}
  />
);

export const CustomFooter = (args) => (
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
          align: 'end',
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
      {...args}
    />
  </div>
);

export const CustomExpandColumn = (args) => (
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
        align: 'end',
        header: 'Actions',
        cell: EditButton,
      }}
      {...args}
    />
  </div>
);

export const UnsortableColumn = (args) => (
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
          header: 'Estimated Age',
          key: 'estimatedAge',
          cell: (row) => row.estimatedAge,
          width: '15%',
          sortable: false,
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
      {...args}
    />
  </div>
);
