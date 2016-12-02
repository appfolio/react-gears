import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Table } from '../src';

const DATA = [
  {
    name: 'Compson, Ms. Quentin',
    company: 'Jefferson County',
    phone: '(662) 555-1212',
    email: 'qcbaby@faulkner.com'
  }, {
    name: 'Trump, Paul',
    company: 'Appfolio Inc.',
    phone: '(805) 555-1213',
    email: 'paul.trump@bogus.com'
  }, {
    name: 'Walker, Jon',
    company: 'CTO Appfolio Inc.',
    phone: '(805) 555-1212',
    email: 'jon@walker.com'
  }
];
storiesOf('Table', module)
  .addWithInfo('Examples', () => (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Phone</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {DATA.map(row => (
          <tr>
            <td>{row.name}</td>
            <td>{row.company}</td>
            <td>{row.phone}</td>
            <td><a href={`mailto:${row.email}`}>{row.email}</a></td>
          </tr>
         ))}
      </tbody>
    </Table>
  )
);
