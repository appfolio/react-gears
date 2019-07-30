import React, { FunctionComponent, Fragment, HTMLProps } from 'react';
import styles from './Callout.scss';

interface CalloutProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  background?: string;
  placement?: 'top' | 'bottom' | 'left' | 'right';
}

const Callout: FunctionComponent<CalloutProps> = ({
  className = '',
  color = 'primary',
  background = 'light',
  placement = 'bottom',
  children,
  ...props
}) => (
    <div
      className={`callout ${styles.callout} text-${color} m${placement[0]}-5 ${className}`}
      {...props}
    >
      <span className={`callout-arrow ${styles.arrow} ${styles[placement]} bg-${background}`} />
      <div className={`${styles.body} bg-${background} text-dark p-3`}>
        {children}
      </div>
    </div>
  );

export default Callout;
