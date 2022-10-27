import React, { useState, useEffect, FC } from 'react';
import { Alert as AlertComponent, AlertProps } from 'reactstrap';
import Icon from '../Icon/Icon';

const noop = () => undefined;

const ICON_MAP: { [key: string]: string } = {
  warning: 'exclamation',
  success: 'check',
  info: 'info',
  danger: 'ban',
};

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
      className={className}
      {...props}
    >
      <div className="d-flex align-items-start">
        {icon ? <Icon name={ICON_MAP[color]} size="lg" className="me-3 mt-2" /> : null}
        {icon ? (
          <div className="w-100" style={{ overflow: 'hidden' }}>
            {children}
          </div>
        ) : (
          <div className="w-100">{children}</div>
        )}
      </div>
    </AlertComponent>
  );
};

Alert.displayName = 'Alert';

export default Alert;
