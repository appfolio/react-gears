import React from 'react';
import { Modal as RsModal } from 'reactstrap';

const Modal = ({ backdrop = false, fade = false, zIndex = 10050, ...props }) => (
  <RsModal {...props} backdrop={backdrop} fade={fade} zIndex={zIndex} />
);

export default Modal;
