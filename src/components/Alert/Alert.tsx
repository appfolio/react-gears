import classNames from 'classnames';
import React, { useState, useEffect, FC } from 'react';
import { Alert as AlertComponent, AlertProps } from 'reactstrap';

const noop = () => undefined;

type Props = {
  icon?: boolean;
  dismissible?: boolean;
  onToggle?: (open: boolean) => void;
} & AlertProps;

/**
 * Extension to Bootstrap [Alert](https://getbootstrap.com/docs/4.3/components/alert/)
 * adding icon support and onToggle callback when dismissed.
 */

const Alert: FC<Props> = ({
  color = 'warning',
  children,
  className,
  dismissible = false,
  icon = false,
  onToggle = noop,
  ...props
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [color, children, className, dismissible, icon, onToggle]);

  const toggle = () => {
    setVisible(!visible);
    onToggle(!visible);
  };

  return (
    <AlertComponent
      color={color}
      isOpen={visible}
      toggle={dismissible ? toggle : undefined}
      className={classNames(className, { 'alert--with-icon': icon })}
      {...props}
    >
      {children}
    </AlertComponent>
  );
};

Alert.displayName = 'Alert';

export default Alert;
