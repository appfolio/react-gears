import React, { ReactNode, FunctionComponent } from 'react';
import classnames from 'classnames';
import { ModalProps } from 'reactstrap/lib/Modal';
import Modal from './Modal';
import Spinner from './Spinner';

import styles from './Waiting.scss';

const noop = () => {};

interface WaitingProps extends Omit<ModalProps, 'toggle'> {
  backdrop?: boolean;
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  title?: string;
}

/**
 * A 'Waiting' indicator for unknown durations. See https://qa.qa.appfolio.com/gears/waiting
 */
const Waiting: FunctionComponent<WaitingProps> = ({
  children,
  className,
  title = 'Please Wait',
  ...props
}) => {
  const spinnerClasses = classnames('text-white', styles.spinner);
  return (
    <Modal {...props} className={classnames(styles.waiting, className)} toggle={noop}>
      {title ?
        <header className="text-center text-white px-4 pt-4">
          {title}
        </header>
        : null}
      <div className="text-center p-4">
        {children || <Spinner className={spinnerClasses} />}
      </div>
    </Modal>
  );
};

Waiting.defaultProps = {
  title: 'Please Wait',
};

export default Waiting;
