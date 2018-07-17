import React from 'react';
import {
  Button,
  ButtonToolbar,
  DateInput,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from '../src';
import { storiesOf } from '@storybook/react';
import { boolean, select } from '@storybook/addon-knobs';
import { dateParse } from 'js-utils-apm';

class Whatever extends React.Component {
  state = { date: '' };

  onChange = (val) => {
    this.setState({
      date: val
    });
  };

  render() {
    return (
      <Modal isOpen backdrop>
        <DateInput
          dateFormat="MM/DD/YYYY"
          value={this.state.date}
          onChange={this.onChange}
          parse={dateParse}
        />
      </Modal>
    );
  }
}

storiesOf('Modal', module)
  .addWithInfo('Live example', () => (
    <Modal
      isOpen={boolean('isOpen', true)}
      backdrop={boolean('backdrop', true)}
      fade={boolean('fade', false)}
      size={select('size', [null, 'sm', 'md', 'lg'], null)}
    >
      <ModalHeader toggle={() => {}}>Modal title</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </ModalBody>
      <ModalFooter>
        <ButtonToolbar>
          <Button color="primary">Do Something</Button>
          <Button>Cancel</Button>
        </ButtonToolbar>
      </ModalFooter>
    </Modal>
  ))
  .addWithInfo('Autofocus', () => <Whatever />);
