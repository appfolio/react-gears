import React from 'react';
import { Modal } from 'reactstrap';

export default ({ backdrop = false, fade = false, zIndex = 10050, ...props }) => (
  <Modal {...props} backdrop={backdrop} fade={fade} zIndex={zIndex} />
);
