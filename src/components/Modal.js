import Modal from 'reactstrap/lib/Modal';

Modal.defaultProps = {
  ...Modal.defaultProps,
  backdrop: false,
  zIndex: 10050
};

export default Modal;
