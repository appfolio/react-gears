import React from 'react';
import classnames from 'classnames';
import Icon from './Icon';
import { FontAwesomeAPMProps } from './icon/FontAwesomeAPM';

interface StatusProps extends Omit<FontAwesomeAPMProps, 'name'> {
  type: 'info' | 'muted' | 'success' | 'danger' | 'warning';
  className?: string;
}

const Status = ({ type, className, ...props }: StatusProps) => {
  let name = 'circle';
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
    default:
  }
  return (
    <Icon {...props} name={name} fixedWidth className={classnames(`text-${type || 'muted'}`, className)} />
  );
};

export default Status;
