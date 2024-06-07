import React from 'react';
import Button from '../Button/Button';
import Icon from './Icon';
import icons from './icons.js';

const colors = ['primary', 'info', 'success', 'warning', 'danger', 'muted', 'dark'];

export default {
  title: 'Icon',
  component: Icon,
  parameters: {
    sourceLink: 'Icon/Icon.tsx',
  },
};

// React component for font awesome v6
export const LiveExample = (args) => <Icon {...args} />;
LiveExample.args = {
  name: 'motorcycle',
  size: '4x',
  spin: false,
  pulse: false,
  rotate: '',
  flip: '',
  border: false,
  iconStyle: 'solid',
};
LiveExample.argTypes = {
  size: {
    control: { type: 'select' },
    options: ['', 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x'],
  },
  rotate: {
    control: { type: 'radio' },
    options: ['', '90', '180', '270'],
  },
  flip: {
    control: { type: 'radio' },
    options: ['', 'horizontal', 'vertical'],
  },
  iconStyle: {
    control: { type: 'select' },
    options: ['regular', 'solid', 'thin', 'light', 'duotone', 'brands'],
  },
};

export const AvailableIcons = ({ size }) => (
  <div>
    <em>Hover over icon to view name:</em>
    <br />
    {icons.map((name, i) => (
      <Icon
        name={name}
        fixedWidth
        size={size}
        title={name}
        className={`py-2 text-${colors[i % colors.length]}`}
      />
    ))}
  </div>
);
AvailableIcons.args = {
  size: '4x',
};
AvailableIcons.argTypes = {
  size: {
    control: { type: 'radio' },
    options: ['', 'xs', 'sm', 'lg', '2x', '3x', '4x', '5x'],
  },
};

export const InlineText = (args) => (
  <div>
    <p>
      <Icon name="print" {...args} /> Print
    </p>
    <p>
      <Icon name="circle-plus" /> Add Item
    </p>
    <p>
      <Icon name="pencil" /> Edit
    </p>
    <p>
      <Icon name="calendar" /> Lookup
    </p>
  </div>
);

export const Buttons = (args) => (
  <div>
    <p>
      <Button>
        <Icon name="circle-plus" fixedWidth {...args} /> Add Item
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
);

export const Size = (args) => (
  <div>
    <Icon name="calendar" size="xs" {...args} /> xs
    <br />
    <Icon name="calendar" size="sm" /> sm
    <br />
    <Icon name="calendar" size="lg" /> lg
    <br />
    <Icon name="calendar" size="2x" /> 2x
    <br />
    <Icon name="calendar" size="3x" /> 3x
    <br />
    <Icon name="calendar" size="4x" /> 4x
    <br />
    <Icon name="calendar" size="5x" /> 5x
    <br />
  </div>
);

export const Animation = (args) => (
  <div>
    <Icon name="spinner" spin size="3x" {...args} />
    <Icon name="circle-notch" spin size="3x" />
    <Icon name="refresh" spin size="3x" />
    <Icon name="cog" spin size="3x" />
    <Icon name="spinner" pulse size="3x" />
  </div>
);

export const RotateAndFlip = (args) => (
  <div>
    <Icon name="female" rotate={90} {...args} /> 90
    <br />
    <Icon name="female" rotate={180} /> 180
    <br />
    <Icon name="female" rotate={270} /> 270
    <br />
    <Icon name="music" flip="horizontal" /> horizontal
    <br />
    <Icon name="music" flip="vertical" /> vertical
    <br />
  </div>
);

export const OtherProps = (args) => (
  <div className="bg-color-muted">
    <p>
      <Icon name="camera" size="2x" style={{ color: 'red' }} {...args} /> Default
    </p>
    <p>
      <Icon name="camera" size="2x" fixedWidth /> fixedWidth
    </p>
    <p>
      <Icon name="camera" size="2x" border /> border
    </p>
  </div>
);
