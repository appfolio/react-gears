import React from 'react';
import { Modal } from 'reactstrap';

export default class ModalComponent extends React.Component {
  static displayName = 'Modal';

  state = {
    open: false
  }

  toggle = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <Modal isOpen={this.state.open} toggle={this.toggle}>
        {this.props.children}
      </Modal>
    );
  }
}
