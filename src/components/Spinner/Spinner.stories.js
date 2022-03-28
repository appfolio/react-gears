import { number, select } from '@storybook/addon-knobs';
import React from 'react';
import { textColors } from '../../tooling/colors';
import Button from '../Button/Button';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
};

export const Default = () => {
  const color = select('color', textColors, 'primary');
  const type = select('type', ['spin', 'border', 'grow'], Spinner.default);

  return (
    <div>
      <p
        style={{
          fontSize: `${number('fontSize', 1, { range: true, min: 1, max: 5, step: 0.25 })}rem`,
        }}
      >
        The <Spinner type={type} /> will scale with the font size of its container,
      </p>

      <hr />
      <h3>...and inherit color from it&apos;s container:</h3>
      <p>
        <Button color="secondary" size="lg" className="me-3">
          <Spinner type={type} /> Loading
        </Button>
        <Button color="primary" outline size="lg">
          <Spinner type={type} /> Loading
        </Button>
      </p>
      <h1 className={`text-${color}`}>
        text-{color}: <Spinner type={type} className={`text-${color}`} />
      </h1>
    </div>
  );
};
