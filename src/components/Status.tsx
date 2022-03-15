import classnames from 'classnames';
import React from 'react';
import Icon from './Icon';
import type { FontAwesomeAPMProps } from './icon/FontAwesomeAPM';

interface StatusProps extends Omit<FontAwesomeAPMProps, 'name'> {
  type?: 'info' | 'muted' | 'success' | 'danger' | 'warning' | 'none';
  className?: string;
}

const Status = ({ type = 'none', className, ...props }: StatusProps) => {
  let name = '';
  switch (type) {
    case 'info':
      name = 'info-circle';
      break;
    case 'muted':
      name = 'circle-thin';
      break;
    case 'success':
      name = 'check-circle';
      break;
    case 'danger':
      name = 'warning';
      break;
    case 'warning':
      name = 'exclamation-circle';
      break;
    case 'none':
      name = 'circle';
      break;
    default:
      throw new Error(`Unsupported value for 'type' prop passed to Status component: "${type}"`);
  }
  return (
    <Icon
      {...props}
      name={name}
      fixedWidth
      className={classnames(`text-${type === 'none' ? 'muted' : type}`, className)}
    />
  );
};

Status.displayName = 'Status';

export default Status;
