import { action } from '@storybook/addon-actions';
import React, { useState } from 'react';
import Button from '../Button/Button';
import Popover from './Popover';
import PopoverBody from './PopoverBody';
import PopoverHeader from './PopoverHeader';
import UncontrolledPopover from './UncontrolledPopover';

const meta = {
  title: 'Popover',
  component: Popover,
  parameters: {
    sourceLink: 'Popover/Popover.tsx',
  },
  argTypes: {
    trigger: {
      control: { type: 'select' },
      options: ['click', 'hover', 'focus'],
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};
export default meta;

export const LiveExample = {
  args: {
    trigger: 'click',
    placement: 'bottom',
    toggle: action('toggle'),
  },
  render: function Render({ toggle, ...args }) {
    const [open, setOpen] = useState(false);

    return (
      <>
        <p>
          Click <strong id="LivePopoverExample">HERE</strong> to launch it!
        </p>
        <Popover
          isOpen={open}
          target="LivePopoverExample"
          toggle={(e) => {
            setOpen(!open);
            toggle(e);
          }}
          {...args}
        >
          <PopoverHeader>Title of the Popover</PopoverHeader>
          <PopoverBody>
            <b>You can do many things</b>
            <ul>
              <li>Add a popover body</li>
              <li>Add a popover header</li>
              <li>Control the popover state externally</li>
            </ul>
            <b>...or put in any components you wish.</b>
          </PopoverBody>
        </Popover>
      </>
    );
  },
};

export const CustomizedBody = {
  args: {
    trigger: 'click',
    placement: 'bottom',
    toggle: action('toggle'),
  },
  render: function Render({ toggle, ...args }) {
    const [open, setOpen] = useState(false);

    return (
      <div>
        <p>
          I can be placed in context to provide some contextual{' '}
          <strong id="PopoverExample">help</strong>!
        </p>
        <Popover
          isOpen={open}
          target="PopoverExample"
          toggle={(e) => {
            setOpen(!open);
            toggle(e);
          }}
          {...args}
        >
          <PopoverBody>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ backgroundColor: 'red', color: 'white', padding: '1rem' }}>
                <h5>You can do whatever you want in the body</h5>
              </div>
              <Button>Click this to do things*</Button>
              <sub>*the button does not do anything</sub>
            </div>
          </PopoverBody>
        </Popover>
      </div>
    );
  },
};

export const UncontrolledExample = {
  render: () => (
    <div>
      <Button id="UncontrolledPopover" type="button">
        Launch Popover
      </Button>
      <UncontrolledPopover placement="bottom" target="UncontrolledPopover">
        <PopoverHeader>Popover Title</PopoverHeader>
        <PopoverBody>
          Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem
          lacinia quam venenatis vestibulum.
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  ),
};
