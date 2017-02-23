import React from 'react';
import { FilterList } from '../src';
import { storiesOf } from '@kadira/storybook';

storiesOf('FilterList', module)
  .addWithInfo('Live example', () => {
    const filters = [
      {
        label: 'User',
        value: 'Hello World',
        maxWidth: 5,
      },
      {
        label: 'Property',
        value: '1234 State Street',
        onRemove: () => alert('remove clicked'),
      },
      {
        label: 'People',
        value: 'Lalalala',
        removable: false,
      },
    ];
    return (
      <div>
        <FilterList
          filters={ filters }
        />
      </div>
    )
  });

