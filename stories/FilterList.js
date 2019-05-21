import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number } from '@storybook/addon-knobs';
import { FilterList } from '../src';

storiesOf('FilterList', module)
  .add('Live example', () => {
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
          onRemove={filter => action('onRemove', filter)}
        />
      </div>
    );
  });

