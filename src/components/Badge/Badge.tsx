import classNames from 'classnames';
import React, { type PropsWithChildren } from 'react';

export interface BadgeProps {
  className?: string;
  color?: string;
  href?: string;
  pill?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

function Badge({
  className,
  color = 'secondary',
  href,
  pill = false,
  tag: Tag = 'span',
  ...props
}: PropsWithChildren<BadgeProps>) {
  const classes = classNames(className, 'badge', `badge-${color}`, pill ? 'rounded-pill' : false);

  if (href) {
    Tag = 'a';
  }

  return <Tag {...props} className={classes} />;
}

export default Badge;
