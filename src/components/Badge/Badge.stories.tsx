import React from 'react';
import { colors } from '../../tooling/colors';
import Badge from './Badge';

export default {
  title: 'Badge',
  component: Badge,
  parameters: {
    sourceLink: 'Badge/Badge.tsx',
  },
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
  <div className="d-flex gap-3">
    {colors.map((color) => (
      <Badge pill color={color}>
        {color}
      </Badge>
    ))}
  </div>
);
