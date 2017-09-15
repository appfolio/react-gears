import React from 'react';
import { Button, Spinner } from '../src';
import { storiesOf } from '@storybook/react';
import { number, select } from '@storybook/addon-knobs';

storiesOf('Spinner', module)
  .addWithInfo('Default', () => {
    const color = select('color', ['text-primary', 'text-muted', 'text-info', 'text-success', 'text-warning', 'text-danger'], 'text-primary');
    return (
      <div>
        <p style={{ fontSize: `${number('fontSize', 1, { range: true, min: 1, max: 5, step: 0.25 })}rem` }}>
          The <Spinner /> will scale with the font size of its container,
        </p>

        <hr />
        <p>
          <h3>...and inherit color from it's container:</h3>
          <Button color="secondary" size="lg" className="mr-3">
            <Spinner /> Loading
          </Button>
          <Button color="primary" outline size="lg">
            <Spinner /> Loading
          </Button>
        </p>
        <h1 className={color}>
          {color}: <Spinner className={color} />
        </h1>
      </div>
    );
  }
);
