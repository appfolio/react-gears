import React from 'react';
import classnames from 'classnames';
import Icon from './Icon';
import type { FontAwesomeAPMProps } from './icon/FontAwesomeAPM';

export const defaultMapTypeToText = {
  info: 'Info',
  muted: 'Not Started',
  success: 'Completed',
  danger: 'Needs Attention',
  warning: 'Warning',
  none: 'In Progress',
};

interface StatusProps extends Omit<FontAwesomeAPMProps, 'name'> {
  type?: 'info' | 'muted' | 'success' | 'danger' | 'warning' | 'none';
  /** Semantic text alternative for users. Alternatively, use `mapTypeToText` prop.
   */
  text?: string;
  /** Record that maps `type` prop to semantic text.
   *
   * Default semantic text by `type`:
   *
   * * `info`: Information
   * * `muted`: Not Started
   * * `success`: Completed
   * * `danger`: Needs Attention
   * * `warning`: Warning
   * * `none`: In Progress
   */
  mapTypeToText?: Partial<typeof defaultMapTypeToText>;
  className?: string;
}

const Status = ({
  type = 'none',
  className,
  mapTypeToText = defaultMapTypeToText,
  ...props
}: StatusProps) => {
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
      throw new Error(
        `Unsupported value for 'type' prop passed to Status component: "${type}"`
      );
  }

  const text =
    props.text || { ...defaultMapTypeToText, ...mapTypeToText }[type];

  return (
    <>
      <Icon
        name={name}
        fixedWidth
        data-testId="status-icon"
        className={classnames(
          `text-${type === 'none' ? 'muted' : type}`,
          className
        )}
        title={text}
        {...props}
      />
      <span className="sr-only">{text}: </span>
    </>
  );
};

Status.displayName = 'Status';

export default Status;
