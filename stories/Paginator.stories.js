import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { number, select, text } from '@storybook/addon-knobs';

import { Paginator } from '../src';

storiesOf('Paginator', module)
  .add('Live example', () => (
    <Paginator
      currentPage={number('currentPage', 1, { min: 1, max: 19 })}
      onClick={action('onClick')}
      perPage={select('perPage', [5, 10, 20, 25], 20)}
      size={select('size', ['', 'sm', 'lg'], '')}
      summary={text('summary')}
      totalItems={100}
    />
  ));
