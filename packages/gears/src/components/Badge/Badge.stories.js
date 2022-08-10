import React from 'react';
import { colors } from '../../tooling/colors';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
};

export const Default = () => (
  <div>
    {colors.map((color) => (
      <div>
        <Badge color={color}>{color}</Badge>
      </div>
    ))}
  </div>
);

export const Pills = () => (
  <div>
    {colors.map((color) => (
      <div>
        <Badge pill color={color}>
          {color}
        </Badge>
      </div>
    ))}
  </div>
);
