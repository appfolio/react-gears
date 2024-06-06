import React from 'react';
import { ModalHeader as RsModalHeader } from 'reactstrap';

const ModalHeader = ({ ...props }) => <RsModalHeader tag="h2" {...props} />;

ModalHeader.displayName = 'ReactGearsModalHeader';

export default ModalHeader;
