import * as React from 'react';
import Button from './Button';

interface ConfirmationButtonProps extends Button {
  children?: React.ReactNode;
  confirmation?: string
  onClick?: (...args: any[]) => any;
}
declare class ConfirmationButton extends React.Component<ConfirmationButtonProps, {}> { }
export default ConfirmationButton;
