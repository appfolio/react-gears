import React, { useRef, useState } from 'react';
import classnames from 'classnames';
import Resize from 'react-resize-detector';
import useSavedScroll from '../hooks/useSavedScroll';

export type Theme = {
  overflowTop?: string,
  overflowBottom?: string,
  overflowLeft?: string,
  overflowRight?: string
}

export interface Props extends Omit<React.HTMLProps<HTMLDivElement>, 'className'> {
  className?: string;
  children: React.ReactNode;
  height?: string | number;
  savePosition?: string;
  theme?: Theme;
}

const defaultTheme = {
  overflowTop: 'overflow-top',
  overflowBottom: 'overflow-bottom',
  overflowLeft: 'overflow-left',
  overflowRight: 'overflow-right'
};

const ScrollContainer = ({
  children,
  className,
  height,
  savePosition,
  theme = defaultTheme,
  ...props
}: ScrollContainerProps) => {
  const [overflow, setOverflow] = useState({
    overflowTop: false,
    overflowBottom: false,
    overflowLeft: false,
    overflowRight: false
  });
  const container = useRef<HTMLElement>(null);
  useSavedScroll(container, savePosition);

  function detectOverflow() {
    if (container.current) {
      const {
        clientHeight,
        clientWidth,
        scrollHeight,
        scrollLeft,
        scrollTop,
        scrollWidth
      } = container.current;
      setOverflow({
        overflowTop: scrollTop > 0,
        overflowBottom: scrollHeight - scrollTop > clientHeight,
        overflowLeft: scrollLeft > 0,
        overflowRight: scrollWidth - scrollLeft > clientWidth
      });
    }
  }

  const { overflowTop, overflowBottom, overflowLeft, overflowRight } = overflow;
  const classNames = classnames(className, 'scroll-container', 'position-relative', {
    [theme.overflowTop]: overflowTop,
    [theme.overflowBottom]: overflowBottom,
    [theme.overflowLeft]: overflowLeft,
    [theme.overflowRight]: overflowRight
  });

  return (
    <div
      className={classNames}
      {...props}
    >
      <div
        ref={container}
        style={{
          maxHeight: height,
          overflow: 'auto'
        }}
        onScroll={e => detectOverflow(e.target)}
      >
        {children}
      </div>
      <Resize handleWidth handleHeight onResize={() => detectOverflow()} className="d-none" />
      <div className='container-shadow' />
      <style jsx>
        {`
          .scroll-container .container-shadow {
            box-shadow: none;
            content: "";
            display: block;
            top: 0px;
            left: 0px;
            bottom: 0px;
            right: 0px;
            pointer-events: none;
            position: absolute;
            z-index: 990;
          }
          .scroll-container.overflow-right .container-shadow {
            box-shadow: -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-left .container-shadow {
            box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-left.overflow-right .container-shadow {
            box-shadow: 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-bottom .container-shadow {
            box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-bottom.overflow-right .container-shadow {
            box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-bottom.overflow-left .container-shadow {
            box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-bottom.overflow-left.overflow-right .container-shadow {
            box-shadow: 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-right .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-left .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-left.overflow-right .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-bottom .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-bottom.overflow-right .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-bottom.overflow-left .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
          .scroll-container.overflow-top.overflow-bottom.overflow-left.overflow-right .container-shadow {
            box-shadow: 0 8px 8px -8px rgba(0, 0, 0, 0.25) inset, 8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, -8px 0 8px -8px rgba(0, 0, 0, 0.25) inset, 0 -8px 8px -8px rgba(0, 0, 0, 0.25) inset;
          }
        `}
      </style>
    </div>
  );
};

export default ScrollContainer;

