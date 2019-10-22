import { ModalProps } from 'reactstrap/lib/Modal';
import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface WaitingProps extends Omit<ModalProps, 'toggle'> {
  backdrop?: boolean;
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  title?: string;
}
declare class Waiting extends React.Component<WaitingProps, {}> { }
export default Waiting;
