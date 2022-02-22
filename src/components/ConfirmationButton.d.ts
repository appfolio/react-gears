import * as React from 'react';
import { ButtonProps } from './Button';

export interface ConfirmationButtonProps extends ButtonProps {
  children?: React.ReactNode;
  confirmation?: string;
  onClick?: (...args: any[]) => any;
}
declare class ConfirmationButton extends React.Component<ConfirmationButtonProps, {}> {}
export default ConfirmationButton;
