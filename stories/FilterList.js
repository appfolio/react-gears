import React from 'react';
import { FilterList } from '../src';
import { storiesOf } from '@kadira/storybook';
import { number } from '@kadira/storybook-addon-knobs';

storiesOf('FilterList', module)
  .addWithInfo('Live example', () => {
    const filters = [
      {
        label: 'User',
        value: 'Hello World',
        removable: false
      },
      {
        label: 'Property',
        value: '1234 State Street'
      },
      {
        label: 'People',
        value: 'Lalalala'
      }
    ];
    return (
      <div>
        <FilterList
          filters={filters}
          maxWidth={number('maxWidth', 14)}
          onRemove={filter => alert(`Remove clicked for: ${JSON.stringify(filter)}`)}
        />
      </div>
    );
  });

