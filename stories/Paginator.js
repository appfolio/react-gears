import React from 'react';
import { action, storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';

import { Paginator } from '../src';

storiesOf('Paginator', module)
  .addWithInfo('Live example', () => (
    <Paginator
      currentPage={number('currentPage', 1, { min: 1, max: 19 })}
      onClick={action('onClick')}
      perPage={select('perPage', [5, 10, 20, 25], 20)}
      totalItems={100}
    />
  ));
