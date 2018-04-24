import ModalProps from './TypeHelpers/props/Modal';
import Omit from './TypeHelpers/Omit';

interface WaitingPropTypes extends Omit<ModalProps, 'toggle'> {
  backdrop?: boolean;
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  className?: string;
  isOpen?: boolean;
  title?: string;
}
declare const Waiting: React.StatelessComponent<WaitingPropTypes>;
export default Waiting;
