import { action } from '@storybook/addon-actions';
import fecha from 'fecha';
import React from 'react';
import SortableTable from './SortableTable';

export default {
  title: 'SortableTable',
  component: SortableTable,
  parameters: {
    sourceLink: 'Table/SortableTable.js',
  },
};

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

export const SortableTableExample = ({ column, ascending, ...args }) => (
  <div>
    <p className="text-warning">
      <b>Note:</b> This is an uncontrolled example, will not sort on click. See UncontrolledTable
      story.
    </p>
    <SortableTable
      columns={[
        {
          active: column === 'first',
          ascending,
          header: 'First',
          key: 'first',
          cell: (row) => row.first,
          onSort: action('onSort-First'),
          sortable: true,
          width: '20%',
        },
        {
          active: column === 'last',
          ascending,
          header: 'Last',
          key: 'last',
          cell: (row) => row.last,
          onSort: action('onSort-Last'),
          sortable: true,
          width: '30%',
        },
        {
          active: column === 'dob',
          ascending,
          header: 'DOB',
          key: 'dob',
          cell: (row) => fecha.format(row.dob, 'MM/DD/YYYY'),
          onSort: action('onSort-DOB'),
          sortable: true,
          width: '15%',
        },
        {
          active: column === 'email',
          ascending,
          header: 'Email',
          key: 'email',
          cell: EmailCell,
          onSort: action('onSort-Email'),
          sortable: true,
          width: '35%',
        },
      ]}
      rows={DATA}
      rowSelected={(row) => row.key === '777'}
      {...args}
    />
  </div>
);
SortableTableExample.args = {
  column: 'last',
  ascending: true,
  bordered: false,
  hover: true,
  responsive: true,
  size: 'sm',
  striped: true,
  truncate: false,
  onExpand: action('onExpand'),
  onSelect: action('onSelect'),
  onSelectAll: action('onSelectAll'),
};
SortableTableExample.argTypes = {
  column: {
    control: { type: 'select' },
    options: ['first', 'last', 'dob', 'email'],
  },
  size: {
    options: ['', 'lg', 'sm'],
    control: { type: 'select' },
  },
};

export const AlignColumn = (args) => (
  <div>
    <p className="text-warning">
      <b>Note:</b> This is an uncontrolled example, will not sort on click. See UncontrolledTable
      story.
    </p>
    <SortableTable
      columns={[
        {
          header: 'Default Align',
          key: 'name',
          cell: (row) => row.first,
        },
        {
          align: 'start',
          header: 'Left Align',
          key: 'last',
          cell: (row) => row.last,
        },
        {
          align: 'center',
          header: 'Center Align',
          key: 'dob',
          cell: (row) => fecha.format(row.dob, 'MM/DD/YYYY'),
        },
        {
          align: 'end',
          header: 'Right Align',
          key: 'email',
          cell: EmailCell,
        },
      ]}
      rows={DATA}
      {...args}
    />
  </div>
);
