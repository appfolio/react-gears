import React from 'react';
import { Button, ButtonToolbar, Modal, ModalHeader, ModalBody, ModalFooter } from '../src';
import { storiesOf } from '@kadira/storybook';
import { boolean } from '@kadira/storybook-addon-knobs';

class ModalExample extends React.Component {

  static displayName = 'Modal';

  state = {
    open: false
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Show Modal</Button>
        <Modal isOpen={this.props.open} toggle={this.toggle}>
          {this.props.children}
        </Modal>
      </div>
    );
  }
}

storiesOf('Modal', module)
  .addWithInfo('default', () => (
    <Modal isOpen={boolean('isOpen', true)}>
      <ModalHeader>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <ButtonToolbar>
          <Button color="primary">Do Something</Button>
          <Button>Cancel</Button>
        </ButtonToolbar>
      </ModalFooter>
    </Modal>
    )
);
