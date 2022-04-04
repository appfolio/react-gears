import React, { type HTMLProps } from 'react';

interface CalloutProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
  color?: string;
  background?: string;
  placement: 'top' | 'bottom' | 'left' | 'right';
}

const Callout = ({ className, color, background, placement, children, ...props }: CalloutProps) => (
  <>
    <div className={`callout text-${color} m${placement[0]}-5 ${className}`} {...props}>
      <span className={`callout-arrow arrow  bg-${background} ${placement}`} />
      <div className={`body bg-${background} text-dark p-3`}>{children}</div>
    </div>
    <style jsx>
      {`
        .callout {
          border: 2px solid currentColor;
          position: relative;
        }
        .callout .body {
          position: relative;
        }
        .callout .arrow {
          // TODO respect border-0 placed on callout:
          border: 2px solid currentColor;
          display: block;
          height: 40px;
          position: absolute;
          width: 40px;
          transform: translate(-20px, -20px) rotate(45deg);
        }
        .callout .top {
          left: 50%;
          top: 0%;
        }
        .callout .right {
          left: 100%;
          top: 50%;
        }
        .callout .bottom {
          border-top-color: transparent; // TODO fixes Firefox artifacts
          border-start-color: transparent;
          left: 50%;
          top: 100%;
        }
        .callout .left {
          left: 0%;
          top: 50%;
        }
      `}
    </style>
  </>
);

Callout.displayName = 'Callout';

Callout.defaultProps = {
  className: '',
  color: 'primary',
  background: 'light',
  placement: 'bottom',
};

export default Callout;
