import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean, select } from '@storybook/addon-knobs';
import { Button, Icon } from '../src';
import icons from './icons.js';

const colors = [
  'primary', 'info', 'success', 'warning', 'danger', 'muted', 'gray-dark'
];
storiesOf('Icon', module)
  .add('Live example', () => (
    <Icon
      name={text('name', 'motorcycle')}
      size={select('size', ['', 'lg', '2x', '3x', '4x', '5x'], '4x')}
      spin={boolean('spin', false)}
      pulse={boolean('pulse', false)}
      rotate={select('rotate', ['', '90', '180', '270'], '')}
      flip={select('flip', ['', 'horizontal', 'vertical'], '')}
      border={boolean('border', false)}
    />
  ))
  .add('Available Icons', () => {
    const size = select('size', ['', 'lg', '2x', '3x', '4x', '5x'], '4x');
    return (
      <div>
        <em>Hover over icon to view name:</em><br />
        {icons.map((name, i) => <Icon name={name} fixedWidth size={size} title={name} className={`py-2 text-${colors[i % colors.length]}`} />)}
      </div>
    );
  })
  .add('with inline text', () => (
    <div>
      <p>
        <Icon name="print" /> Print
      </p>
      <p>
        <Icon name="plus-circle" /> Add Item
      </p>
      <p>
        <Icon name="pencil" /> Edit
      </p>
      <p>
        <Icon name="calendar" /> Lookup
      </p>
    </div>
  ))
  .add('with buttons', () => (
    <div>
      <p>
        <Button>
          <Icon name="plus-circle" fixedWidth /> Add Item
        </Button>
      </p>
      <p>
        <Button color="primary">
          <Icon name="print" fixedWidth /> Print
        </Button>
      </p>
      <p>
        <Button color="success">
          <Icon name="pencil" fixedWidth /> Edit
        </Button>
      </p>
      <p>
        <Button color="info">
          <Icon name="calendar" fixedWidth /> Lookup
        </Button>
      </p>
    </div>
  ))
  .add('with size', () => (
    <div>
      <Icon name="calendar" size="lg" /> lg<br />
      <Icon name="calendar" size="2x" /> 2x<br />
      <Icon name="calendar" size="3x" /> 3x<br />
      <Icon name="calendar" size="4x" /> 4x<br />
      <Icon name="calendar" size="5x" /> 5x<br />
    </div>
  ))
  .add('with animation', () => (
    <div>
      <Icon name="spinner" spin size="3x" />
      <Icon name="circle-o-notch" spin size="3x" />
      <Icon name="refresh" spin size="3x" />
      <Icon name="cog" spin size="3x" />
      <Icon name="spinner" pulse size="3x" />
    </div>
  ))
  .add('with rotate & flip', () => (
    <div>
      <Icon name="female" rotate={90} /> 90<br />
      <Icon name="female" rotate={180} /> 180<br />
      <Icon name="female" rotate={270} /> 270<br />
      <Icon name="music" flip="horizontal" /> horizontal<br />
      <Icon name="music" flip="vertical" /> vertical<br />
    </div>
  ))
  .add('with other props', () => (
    <div className="bg-color-muted">
      <p>
        <Icon name="camera" size="2x" /> Default
      </p>
      <p>
        <Icon name="camera" size="2x" fixedWidth /> fixedWidth
      </p>
      <p>
        <Icon name="camera" size="2x" border /> border
      </p>
    </div>
  ));

//  className: React.PropTypes.string,
//  cssModule: React.PropTypes.object,
//  stack: React.PropTypes.oneOf(['1x', '2x'])`}
