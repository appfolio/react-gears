import { action } from '@storybook/addon-actions';
import React from 'react';
import { colors } from '../../tooling/colors';
import Alert from './Alert';

export default {
  title: 'Alerts',
  component: Alert,
  parameters: {
    sourceLink: 'Alert/Alert.tsx',
  },
};

export const LiveExample = ({ content, ...args }) => <Alert {...args}>{content}</Alert>;
LiveExample.args = {
  icon: false,
  dismissible: false,
  color: 'info',
  onToggle: action('onToggle'),
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing
  elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua.  Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut
  aliquip ex ea commodo consequat.`,
};
LiveExample.argTypes = {
  color: {
    options: ['', ...colors],
    control: { type: 'select' },
  },
};

export const Icons = (args) => (
  <div>
    <Alert icon {...args}>
      You can also add an icon!
    </Alert>
    <Alert icon color="success" {...args}>
      You can specify an alert color. This one has <code>color=&quot;success&quot;</code>
    </Alert>
    <Alert icon color="danger" {...args}>
      Humblebrag prism twee, gochujang seitan whatever asymmetrical ramps enamel pin austin salvia
      swag helvetica. Chartreuse food truck tofu raclette, 3 wolf moon poke chia paleo skateboard.
      Pickled tote bag echo park raclette. Irony fashion axe sartorial, cornhole jean shorts
      vaporware flannel salvia glossier beard 3 wolf moon. Literally semiotics hammock irony cred,
      bicycle rights lomo selvage tousled vegan 8-bit. Four loko cardigan live-edge truffaut
      pour-over, helvetica chia brooklyn swag pug scenester kogi pitchfork leggings yuccie. Ethical
      put a bird on it portland vape YOLO.
    </Alert>
    <Alert icon color="info" {...args}>
      <strong>Heads up!</strong> This alert needs your attention, but it&apos;s not super important.
    </Alert>
  </div>
);

export const Dismissible = (args) => (
  <div>
    <Alert dismissible icon color="success" {...args}>
      Alerts can also be dismissed. Simply add the <code>dismissible</code> prop.
    </Alert>
  </div>
);

export const Extras = (args) => (
  <div>
    <Alert icon color="info" {...args}>
      <h4 className="alert-heading">Well done!</h4>
      <p>
        You can use the <code>alert-heading</code> class on a heading to make it stand out!
      </p>
      <p>
        Aww yeah, you successfully read this important alert message. This example text is going to
        run a bit longer so that you can see how spacing within an alert works with this kind of
        content.
      </p>
      <p className="mb-0">
        Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
      </p>
    </Alert>
  </div>
);
