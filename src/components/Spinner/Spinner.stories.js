import React from 'react';
import { textColors } from '../../tooling/colors';
import Button from '../Button/Button';
import Spinner from './Spinner';

export default {
  title: 'Spinner',
  component: Spinner,
  parameters: {
    sourceLink: 'Spinner/Spinner.tsx',
  },
};

export const Default = ({ color, type, label, fontSize }) => (
  <div>
    <p
      style={{
        fontSize: `${fontSize}rem`,
      }}
    >
      The <Spinner type={type} /> will scale with the font size of its container,
    </p>

    <hr />
    <h3>...and inherit color from its container:</h3>
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

    <hr />
    <h2>
      ...and accept a label prop for accessibility by screen-readers (default to
      &apos;loading&apos;):{' '}
    </h2>
    <p>
      {' '}
      <Spinner type={type} label={label} />{' '}
    </p>
  </div>
);

Default.args = {
  color: 'primary',
  type: Spinner.default,
  label: 'loading',
  fontSize: 1,
};
Default.argTypes = {
  color: {
    control: {
      type: 'select',
      options: textColors,
    },
  },
  type: {
    control: {
      type: 'select',
      options: ['spin', 'border', 'grow'],
    },
  },
  fontSize: {
    control: {
      type: 'range',
      min: 1,
      max: 5,
      step: 0.25,
    },
  },
};
