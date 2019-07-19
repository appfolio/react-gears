import React from 'react';
import { storiesOf } from '@storybook/react';
import { Badge } from '../src';
import { colors } from './colors';

storiesOf('Badge', module)
  .add('Default', () => (
    <div>
      {colors.map(color => (
        <div>
          <Badge color={color}>{color}</Badge>
        </div>
      ))}
    </div>
  ))
  .add('Pills', () => (
    <div>
      {colors.map(color => (
        <div>
          <Badge pill color={color}>{color}</Badge>
        </div>
      ))}
    </div>
  ));

