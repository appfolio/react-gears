import React from 'react';
import Button from '../Button/Button';
import ButtonToolbar from '../Button/ButtonToolbar';
import Input from '../Input/Input';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

const meta = {
  title: 'Modal',
  component: Modal,
  parameters: {
    sourceLink: 'Modal/Modal.js',
    docs: {
      // contain modal within iframe to enable user interaction
      // https://github.com/storybookjs/storybook/issues/16949#issuecomment-1106586570
      // unfortunately, it seems to break the controls functionality, but only in the Docs view
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
  argTypes: {
    fullscreen: {
      control: { type: 'select' },
      options: [null, true, 'sm', 'md', 'lg', 'xl', 'xxl'],
    },
    size: {
      control: { type: 'radio' },
      options: [null, 'sm', 'lg', 'xl'],
    },
  },
};
export default meta;

export const LiveExample = {
  args: {
    isOpen: true,
    backdrop: true,
    fade: false,
    fullscreen: null,
    size: null,
  },
  render: (args) => (
    <Modal {...args}>
      <ModalHeader toggle={() => {}}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <ButtonToolbar>
          <Button color="primary">Do Something</Button>
          <Button color="link">Cancel</Button>
        </ButtonToolbar>
      </ModalFooter>
    </Modal>
  ),
};

export const Autofocus = {
  args: {
    isOpen: true,
    backdrop: true,
    size: null,
  },
  render: (args) => (
    <Modal autoFocus={false} {...args}>
      <ModalHeader toggle={() => {}}>Modal title</ModalHeader>
      <ModalBody>
        This input should have focus: <Input autoFocus />
      </ModalBody>
      <ModalFooter>
        <ButtonToolbar>
          <Button color="primary">Do Something</Button>
          <Button color="link">Cancel</Button>
        </ButtonToolbar>
      </ModalFooter>
    </Modal>
  ),
};
