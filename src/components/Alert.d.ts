import * as React from 'react';
interface AlertProps {
  children?: (string | JSX.Element)[] | string | JSX.Element;
  color?: string;
  dismissible?: boolean;
  icon?: boolean;
  className?: string;
}

declare class Alert extends React.Component<AlertProps, {}> { }
export default Alert;
