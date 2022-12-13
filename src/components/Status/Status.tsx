import classnames from 'classnames';
import React from 'react';
import { FontAwesomeAPMProps } from '../Icon/FontAwesomeAPM';
import Icon from '../Icon/Icon';

interface StatusProps extends Omit<FontAwesomeAPMProps, 'name'> {
  type?: 'info' | 'muted' | 'success' | 'danger' | 'warning' | 'none';
  className?: string;
}

const Status = ({ type = 'none', className, ...props }: StatusProps) => {
  let name = '';
  let iconStyle: 'regular' | 'solid' | 'thin' | 'light' | 'duotone' | undefined;

  switch (type) {
    case 'info':
      name = 'circle-info';
      break;
    case 'muted':
      name = 'circle';
      iconStyle = 'regular';
      break;
    case 'success':
      name = 'circle-check';
      break;
    case 'danger':
      name = 'warning';
      break;
    case 'warning':
      name = 'circle-exclamation';
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
      iconStyle={iconStyle}
      fixedWidth
      className={classnames(`text-${type === 'none' ? 'muted' : type}`, className)}
    />
  );
};

Status.displayName = 'Status';

export default Status;
