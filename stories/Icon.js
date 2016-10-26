import React from 'react';
import { storiesOf } from '@kadira/storybook';

import { Icon } from '../src';

storiesOf('Icon', module)
  .addWithInfo('with props', () => (
    <div className="bg-color-muted">
      <Icon name="angellist" size="4x" /> Default <br />
      <Icon name="angellist" size="4x" fixedWidth /> fixedWidth<br />
      <Icon name="angellist" size="4x" border /> border<br />
      <Icon name="angellist" size="4x" flip="horizontal" /> flip="horizontal"<br />
      <Icon name="angellist" size="4x" flip="vertical" /> flip="vertical"<br />
      <Icon name="angellist" size="4x" inverse /> inverse<br />
    </div>
  ))
  .addWithInfo('with size', () => (
    <div>
      <Icon name="calendar" size="lg" /> lg<br />
      <Icon name="calendar" size="2x" /> 2x<br />
      <Icon name="calendar" size="3x" /> 3x<br />
      <Icon name="calendar" size="4x" /> 4x<br />
      <Icon name="calendar" size="5x" /> 5x<br />
    </div>
  ))
  .addWithInfo('with animation', () => (
    <div>
      <Icon name="spinner" spin size="3x" />
      <Icon name="circle-o-notch" spin size="3x" />
      <Icon name="refresh" spin size="3x" />
      <Icon name="cog" spin size="3x" />
      <Icon name="spinner" pulse size="3x" />
    </div>
  ))
  .addWithInfo('with rotate', () => (
    <div>
      <Icon name="female" rotate={90} /> 90<br />
      <Icon name="female" rotate={180} /> 180<br />
      <Icon name="female" rotate={270} /> 270<br />
    </div>));

//  className: React.PropTypes.string,
//  cssModule: React.PropTypes.object,
//  stack: React.PropTypes.oneOf(['1x', '2x'])`}
