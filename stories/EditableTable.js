import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import fecha from 'fecha';
import { orderBy } from 'lodash';
import { Button, Card, EditableTable, DateInput, Input, Icon } from '../src';

const DATA = [
  { key: '111', expanded: false, first: 'Nicole', last: 'Grant', email: 'nicole.grant@example.com', dob: new Date(1968, 6, 15) },
  { key: '222', expanded: false, first: 'Alberto', last: 'Kennedy', email: 'alberto.kennedy@example.com', dob: new Date(1972, 7, 17) },
  { key: '333', expanded: false, first: 'Arron', last: 'Douglas', email: 'arron.douglas@example.com', dob: new Date(1982, 4, 1) },
  { key: '444', expanded: false, first: 'Reginald', last: 'Rhodes', email: 'reginald.rhodes@example.com', dob: new Date(1968, 8, 14) },
  { key: '555', expanded: false, first: 'Jimmy', last: 'Mendoza', email: 'jimmy.mendoza@example.com', dob: new Date(1964, 1, 1) },
  { key: '666', expanded: false, first: 'Georgia', last: 'Montgomery', email: 'georgia.montgomery@example.com', dob: new Date(1960, 6, 4) },
  { key: '777', expanded: true, first: 'Serenity', last: 'Thomas', email: 'serenity.thomas@example.com', dob: new Date(1973, 0, 11) },
  { key: '888', expanded: false, first: 'Tonya', last: 'Elliott', email: 'tonya.elliott@example.com', dob: new Date(1954, 7, 17) },
  { key: '999', expanded: false, first: 'Maxine', last: 'Turner', email: 'maxine.turner@example.com', dob: new Date(1961, 8, 19) },
  { key: '000', expanded: false, first: 'Reginald', last: 'Rice', email: 'reginald.rice@example.com', dob: new Date(1984, 4, 15) }
];

class StatefulExample extends React.Component {
  static displayName = 'EditableTable';
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
    const { bordered, hover, size, striped, editable } = this.props;

    return (
      <EditableTable
        bordered={bordered}
        hover={hover}
        size={size}
        striped={striped}

        editable={editable}
        columns={[
          {
            active: column === 'first',
            ascending,
            header: 'First',
            key: 'first',
            cell: row => row.first,
            // edit: row => <Input value={row.first} />,
            onSort: asc => this.sortBy('first', asc),
            width: '20%'
          },
          {
            active: column === 'last',
            ascending,
            header: 'Last',
            key: 'last',
            cell: row => row.last,
            // edit: row => <Input value={row.last} />,
            onSort: asc => this.sortBy('last', asc),
            width: '30%'
          },
          {
            active: column === 'dob',
            ascending,
            header: 'DOB',
            key: 'dob',
            cell: row => fecha.format(row.dob, 'MM/DD/YYYY'),
            // edit: row => <DateInput value={row.dob} />,
            onSort: asc => this.sortBy('dob', asc),
            width: '10%'
          },
          {
            active: column === 'email',
            ascending,
            header: <span>Email</span>,
            key: 'email',
            cell: row => <a href={`mailto:${row.email}`}>{row.email}</a>,
            // edit: row => <Input value={row.email} />,
            onSort: asc => this.sortBy('email', asc),
            width: '35%'
          },
          {
            key: 'edit',
            cell: row => (editable && <Button className="p-0" color="link"><Icon name="pencil" /></Button>),
            // edit: row => (editable && <Button className="p-0" color="link"><Icon name="check" /></Button>),
            width: '5%'
          }
        ]}
        rows={this.sortedData(column, ascending)}
        rowExpanded={(row, activeRow) => activeRow && <div className="py-1"><Button color="danger" size="sm">Delete</Button></div>}
      />
    );
  }
}

storiesOf('EditableTable', module)
  .add('Stateful example', () => (
    <div>
      <StatefulExample
        bordered={boolean('bordered', false)}
        hover={boolean('hover', true)}
        size={select('size', ['', 'sm', 'lg'], 'sm')}
        striped={boolean('striped', true)}
        editable={boolean('editable', false)}
      />
      <Card color="secondary" className="rounded-0 p-3">
        <h2>Story Source</h2>
      </Card>
    </div>
  ));
