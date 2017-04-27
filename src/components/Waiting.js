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
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
    title: React.PropTypes.string,
  }

  static defaultProps = {
    title: 'Please Wait',
  }

  render() {
    const {
      children,
      className,
      title,
      ...props
    } = this.props;

    return (
      <Modal {...props} className={classnames(styles.waiting, className)} toggle={noop}>
        {title ?
          <header ref="title" className="text-center text-white px-4 pt-4">
            {title}
          </header>
          : null}
        <div className="text-center p-4">
          {children || <Spinner className={styles.spinner} />}
        </div>
      </Modal>
    );
  }
}
