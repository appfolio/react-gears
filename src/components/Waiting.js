import React, { Component } from 'react';
import { ModalHeader, ModalBody } from 'reactstrap';
import classnames from 'classnames';
import Modal from './Modal';
import Spinner from './Spinner';

import styles from './Waiting.scss';

const noop = () => {};

/**
 * A 'Waiting' indicator for unknown durations. See https://qa.qa.appfolio.com/gears/waiting
 */
export default class Waiting extends Component {
  static propTypes = {
    backdrop: React.PropTypes.bool,
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
    title: React.PropTypes.string,
  }

  static defaultProps = {
    title: 'Please Wait',
  }

  render() {
    const {
      className,
      title,
      ...props
    } = this.props;

    return (
      <Modal {...props} className={classnames(styles.waiting, className)} toggle={noop}>
        <ModalHeader className="text-center">
          {title}
        </ModalHeader>
        <ModalBody className="text-center">
          <Spinner className={styles.spinner} />
        </ModalBody>
      </Modal>
    );
  }
}
