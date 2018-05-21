import { HTMLProps } from 'react';
import * as React from 'react';

interface CalloutProps extends HTMLProps<HTMLDivElement> {
  children?: JSX.Element | (JSX.Element | string)[];
  className?: string;
  color?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'muted';
  background?: 'primary' | 'info' | 'success' | 'warning' | 'danger' | 'faded';
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
declare class Callout extends React.Component<CalloutProps, {}> { }
export default Callout;
