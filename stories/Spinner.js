import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';
import { Button, Spinner } from '../src';

storiesOf('Spinner', module)
  .add('Default', () => {
    const color = select('color', ['text-primary', 'text-muted', 'text-info', 'text-success', 'text-warning', 'text-danger'], 'text-primary');
    const type = select('type', ['spin', 'border', 'grow'], Spinner.default);

    return (
      <div>
        <p style={{ fontSize: `${number('fontSize', 1, { range: true, min: 1, max: 5, step: 0.25 })}rem` }}>
          The <Spinner type={type} /> will scale with the font size of its container,
        </p>

        <hr />
        <h3>...and inherit color from it's container:</h3>
        <p>
          <Button color="secondary" size="lg" className="mr-3">
            <Spinner type={type} /> Loading
          </Button>
          <Button color="primary" outline size="lg">
            <Spinner type={type} /> Loading
          </Button>
        </p>
        <h1 className={color}>
          {color}: <Spinner type={type} className={color} />
        </h1>
      </div>
    );
  });
