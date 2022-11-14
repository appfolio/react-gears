import { Modal } from 'reactstrap';

// ref lookup
Modal.defaultProps = {
  ...Modal.defaultProps,
  backdrop: false,
  fade: false,
  zIndex: 10050,
};

export default Modal;
