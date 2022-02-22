import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { Button, ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter, Input } from '../src';

export default {
  title: 'Modal',
  component: Modal,
};

export const LiveExample = () => (
  <Modal
    isOpen={boolean('isOpen', true)}
    backdrop={boolean('backdrop', true)}
    fade={boolean('fade', false)}
    size={select('size', [null, 'sm', 'md', 'lg'], null)}
  >
    <ModalHeader toggle={() => {}}>Modal title</ModalHeader>
    <ModalBody>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </ModalBody>
    <ModalFooter>
      <ButtonToolbar>
        <Button color="primary">Do Something</Button>
        <Button>Cancel</Button>
      </ButtonToolbar>
    </ModalFooter>
  </Modal>
);

export const Autofocus = () => (
  <Modal
    isOpen={boolean('isOpen', true)}
    backdrop={boolean('backdrop', true)}
    size={select('size', [null, 'sm', 'md', 'lg'], null)}
    autoFocus={false}
  >
    <ModalHeader toggle={() => {}}>Modal title</ModalHeader>
    <ModalBody>
      This input should have focus: <Input autoFocus />
    </ModalBody>
    <ModalFooter>
      <ButtonToolbar>
        <Button color="primary">Do Something</Button>
        <Button>Cancel</Button>
      </ButtonToolbar>
    </ModalFooter>
  </Modal>
);
