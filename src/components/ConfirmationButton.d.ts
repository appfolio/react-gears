import * as React from 'react';
import Button from './Button';

interface ConfirmationButtonProps extends Button {
  children?: ReactNode;
  confirmation?: string
  onClick?: (...args: any[]) => any;
}
declare class ConfirmationButton extends Component<ConfirmationButtonProps, {}> { }
export default ConfirmationButton;
