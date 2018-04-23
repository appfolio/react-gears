import { HTMLProps } from 'react';

interface CalloutProps extends HTMLProps<HTMLDivElement> {
  children?: JSX.Element | (JSX.Element | string)[];
  className?: string;
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'muted';
  background?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'faded';
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
declare const Callout: React.StatelessComponent<CalloutProps>;
export default Callout;
