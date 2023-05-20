import { boolean, select } from '@storybook/addon-knobs';
import fecha from 'fecha';
import React from 'react';
import Table from './Table';

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

export default {
  title: 'Table',
  component: Table,
  parameters: { sourceLink: 'Table/Table.tsx' },
};

export const Defalut = () => (
  <Table
    bordered={boolean('bordered', false)}
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
      {DATA.map((row) => (
        <tr key={row.name}>
          <td>{row.first}</td>
          <td>{row.last}</td>
          <td>{fecha.format(row.dob, 'MM/DD/YYYY')}</td>
          <td>
            <a href={`mailto:${row.email}`}>{row.email}</a>
          </td>
        </tr>
      ))}
    </tbody>
  </Table>
);
