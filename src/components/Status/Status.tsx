import classnames from 'classnames';
import React from 'react';
import Icon, { IconProps } from '../Icon/Icon';

const iconNames = {
  info: 'circle-info',
  muted: 'circle',
  success: 'circle-check',
  danger: 'warning',
  warning: 'circle-exclamation',
  none: 'circle',
};

interface StatusProps extends Omit<IconProps, 'name'> {
  type?: keyof typeof iconNames;
  className?: string;
}

const Status = ({ type = 'none', className, ...props }: StatusProps) => {
  const iconName = iconNames[type];

  if (!iconName) {
    // eslint-disable-next-line no-console
    console.error(`Unsupported value for 'type' prop passed to Status component: "${type}"`);
  }

  return (
    <Icon
      {...props}
      name={iconName}
      iconStyle={type === 'muted' ? 'regular' : undefined}
      fixedWidth
      className={classnames(`text-${type === 'none' ? 'muted' : type}`, className)}
    />
  );
};

Status.displayName = 'Status';

export default Status;
