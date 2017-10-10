import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card, SortableTable } from '../src';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import fecha from 'fecha';
import { orderBy } from 'lodash';

const DATA = [
  { key: '111', first: 'Nicole', last: 'Grant', email: 'nicole.grant@example.com', dob: new Date(1968, 6, 15) },
  { key: '222', first: 'Alberto', last: 'Kennedy', email: 'alberto.kennedy@example.com', dob: new Date(1972, 7, 17) },
  { key: '333', first: 'Arron', last: 'Douglas', email: 'arron.douglas@example.com', dob: new Date(1982, 4, 1) },
  { key: '444', first: 'Reginald', last: 'Rhodes', email: 'reginald.rhodes@example.com', dob: new Date(1968, 8, 14) },
  { key: '555', first: 'Jimmy', last: 'Mendoza', email: 'jimmy.mendoza@example.com', dob: new Date(1964, 1, 1) },
  { key: '666', first: 'Georgia', last: 'Montgomery', email: 'georgia.montgomery@example.com', dob: new Date(1960, 6, 4) },
  { key: '777', first: 'Serenity', last: 'Thomas', email: 'serenity.thomas@example.com', dob: new Date(1973, 0, 11) },
  { key: '888', first: 'Tonya', last: 'Elliott', email: 'tonya.elliott@example.com', dob: new Date(1954, 7, 17) },
  { key: '999', first: 'Maxine', last: 'Turner', email: 'maxine.turner@example.com', dob: new Date(1961, 8, 19) },
  { key: '000', first: 'Reginald', last: 'Rice', email: 'reginald.rice@example.com', dob: new Date(1984, 4, 15) }
];

class StatefulExample extends React.Component {
  static displayName = 'SortableTable';
  state = {
    column: 'last',
    ascending: true
  }

  sortedData = (column, ascending) => orderBy(
    DATA,
    [column],
    [ascending ? 'asc' : 'desc']
  );

  sortBy = (column, ascending) => {
    if (this.state.column === column) {
      this.setState({
        ascending
      });
    } else {
      this.setState({
        column,
        ascending: true
      });
    }
  };

  render() {
    const { ascending, column } = this.state;
    const { bordered, hover, size, striped } = this.props;

    return (
      <SortableTable
        bordered={bordered}
        hover={hover}
        size={size}
        striped={striped}

        columns={[
          {
            active: column === 'first',
            ascending,
            header: 'First',
            key: 'first',
            cell: row => row.first,
            onSort: asc => this.sortBy('first', asc),
            width: '20%'
          },
          {
            active: column === 'last',
            ascending,
            header: 'Last',
            key: 'last',
            cell: row => row.last,
            onSort: asc => this.sortBy('last', asc),
            width: '30%'
          },
          {
            active: column === 'dob',
            ascending,
            header: 'DOB',
            key: 'dob',
            cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
            onSort: asc => this.sortBy('dob', asc),
            width: '15%'
          },
          {
            active: column === 'email',
            ascending,
            header: <span>Email</span>,
            key: 'email',
            cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
            onSort: asc => this.sortBy('email', asc),
            width: '35%'
          }
        ]}
        rows={this.sortedData(column, ascending)}
      />
    );
  }
}

storiesOf('SortableTable', module)
  .addWithInfo('Live example', () => {
    const column = select('active', ['first', 'last', 'dob', 'email'], 'last');
    const ascending = boolean('ascending', true);
    return (
      <div>
        <p className="text-warning">
          <b>Note:</b> This is an uncontrolled example, will not sort on click.  See 'Stateful Example' story.
        </p>
        <SortableTable
          bordered={boolean('bordered', true)}
          hover={boolean('hover', true)}
          size={select('size', ['', 'sm', 'lg'], 'sm')}
          striped={boolean('striped', true)}
          columns={[
            {
              active: column === 'first',
              ascending,
              header: 'First',
              key: 'first',
              cell: row => row.first,
              onSort: action('onSort', 'First')
            },
            {
              active: column === 'last',
              ascending,
              header: 'Last',
              key: 'last',
              cell: row => row.last,
              onSort: action('onSort', 'Last')
            },
            {
              active: column === 'dob',
              ascending,
              header: 'DOB',
              key: 'dob',
              cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
              onSort: action('onSort', 'DOB')
            },
            {
              active: column === 'email',
              ascending,
              header: <span>Email</span>,
              key: 'email',
              cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
              onSort: action('onSort', 'Email')
            }
          ]}
          rows={DATA}
        />
      </div>
    );
  })
  .add('Stateful example', () => (
    <div>
      <StatefulExample
        bordered={boolean('bordered', true)}
        hover={boolean('hover', true)}
        size={select('size', ['', 'sm', 'lg'], 'sm')}
        striped={boolean('striped', true)}
      />
      <Card color="secondary" className="rounded-0 p-3">
        <h2>Story Source</h2>
        <pre>{`
class StatefulExample extends React.Component {
  static displayName = 'SortableTable';
  state = {
    column: 'last',
    ascending: true
  }

  sortedData = (column, ascending) => orderBy(
    DATA,
    [column],
    [ascending ? 'asc' : 'desc']
  );

  sortBy = (column, ascending) => {
    if (this.state.column === column) {
      this.setState({
        ascending
      });
    } else {
      this.setState({
        column,
        ascending: true
      });
    }
  };

  render() {
    const { ascending, column } = this.state;
    const { bordered, hover, size, striped } = this.props;

    return (
      <SortableTable
        bordered={bordered}
        hover={hover}
        size={size}
        striped={striped}

        columns={[
          {
            active: column === 'first',
            ascending,
            header: 'First',
            key: 'first',
            cell: row => row.first,
            onSort: asc => this.sortBy('first', asc),
            width: '20%'
          },
          {
            active: column === 'last',
            ascending,
            header: 'Last',
            key: 'last',
            cell: row => row.last,
            onSort: asc=> this.sortBy('last', asc),
            width: '30%'
          },
          {
            active: column === 'dob',
            ascending,
            header: 'DOB',
            key: 'dob',
            cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
            onSort: asc => this.sortBy('dob', asc),
            width: '15%'
          },
          {
            active: column === 'email',
            ascending,
            header: <span>Email</span>,
            key: 'email',
            cell: row => <a href={\`mailto:\${row.email}\`}>{row.email}</a>,
            onSort: asc => this.sortBy('email', asc),
            width: '35%'
          }
        ]}
        rows={this.sortedData(column, ascending)}
      />
    );
  }
}  
        `}</pre>
      </Card>
    </div>
  )
);
