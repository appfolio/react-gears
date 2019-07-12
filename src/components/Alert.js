import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import AlertComponent from 'reactstrap/lib/Alert';
import Icon from './Icon';

const ICON_MAP = {
  warning: 'exclamation-circle',
  success: 'check',
  info: 'info-circle',
  danger: 'ban'
};

export default function Alert({
  color,
  children,
  className,
  dismissible,
  icon,
  onToggle,
  ...props
}) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, [color,
    children,
    className,
    dismissible,
    icon,
    onToggle,
  ]);

  const toggle = () => {
    setVisible(!visible);
    onToggle(!visible);
  };

  return (
    <AlertComponent
      color={color}
      isOpen={visible}
      toggle={dismissible ? toggle : null}
      className={className}
      {...props}
    >
      <div className="d-flex align-items-start">
        {icon ? (
          <Icon name={ICON_MAP[color]} size="lg" className="mr-3 mt-1" />
        ) : null}
        {icon ? (
          <div className="w-100" style={{ overflow: 'hidden' }}>{children}</div>
        ) : (
          <div className="w-100">{children}</div>
        )}
      </div>
    </AlertComponent>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  dismissible: PropTypes.bool,
  icon: PropTypes.bool,
  className: PropTypes.string,
  onToggle: PropTypes.func
};

Alert.defaultProps = {
  className: '',
  color: 'warning',
  dismissible: false,
  icon: false,
  onToggle: () => {}
};
