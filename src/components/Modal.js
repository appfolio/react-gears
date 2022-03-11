import { Modal } from 'reactstrap';

Modal.defaultProps = {
  ...Modal.defaultProps,
  backdrop: false,
  fade: false,
  zIndex: 10050
};

export default Modal;
