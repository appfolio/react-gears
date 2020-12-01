import React from 'react';
import { Badge } from '../src';
import { colors } from './colors';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = () => (
  <div>
    {colors.map(color => (
      <div>
        <Badge color={color}>{color}</Badge>
      </div>
    ))}
  </div>
);

export const Pills = () => (
  <div>
    {colors.map(color => (
      <div>
        <Badge pill color={color}>{color}</Badge>
      </div>
    ))}
  </div>
);

