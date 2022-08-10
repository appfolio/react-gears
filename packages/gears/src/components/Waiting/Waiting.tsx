import React, { ReactNode, FC } from 'react';
import { ModalProps } from 'reactstrap';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';

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
const Waiting: FC<WaitingProps> = ({ children, className, title = 'Please Wait', ...props }) => (
  <Modal
    {...props}
    className={className}
    contentClassName="bg-dark border-0 text-center text-light"
    toggle={noop}
    style={{
      margin: '40vh auto',
      width: '9rem',
    }}
  >
    {title ? <header className="px-4 pt-4">{title}</header> : null}
    <div className="p-4">{children || <Spinner style={{ fontSize: '30px' }} />}</div>
  </Modal>
);

Waiting.defaultProps = {
  title: 'Please Wait',
};

Waiting.displayName = 'Waiting';

export default Waiting;
