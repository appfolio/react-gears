import classnames from 'classnames';
import type { HTMLProps } from 'react';
import React, { useMemo } from 'react';
import range from '../util/range';

interface PlaceholderProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  className?: string;
  color?: string;
  minWidth?: number;
  size?: 'xs' | 'sm' | 'lg';
  type?: 'glow' | 'wave';
  width?: number;
  words?: number;
}

const Placeholder = ({
  className,
  color,
  width = 100,
  minWidth = 0.75 * width,
  words = 1,
  size,
  type = 'glow',
  ...props
}: PlaceholderProps) => {
  const containerClasses = classnames(className, {
    [`placeholder-${type}`]: type,
    [`text-${color}`]: color,
  });
  const classes = classnames('placeholder', 'rounded-pill', {
    [`placeholder-${size}`]: size,
  });

  const widths = useMemo<number[]>(() => {
    const lineWidth = minWidth + Math.random() * (width - minWidth);
    const maxWords = Math.ceil(Math.random() * words);

    const numbers = range(maxWords).map(() => Math.max(Math.random(), 0.2));
    const sum = numbers.reduce((total, n) => total + n, 0);

    return numbers.map((n) => (n / sum) * lineWidth);
  }, [minWidth, width, words]);

  return (
    <>
      <div className={containerClasses} {...props}>
        {widths.map((wordWidth, i) => (
          <span
            // eslint-disable-next-line react/no-array-index-key
            key={i}
            className={classes}
            style={{
              width: `calc(${wordWidth.toFixed()}% - .5rem)`,
            }}
          />
        ))}
      </div>
      <style jsx>
        {`
          .placeholder {
            background-color: currentColor;
            cursor: wait;
            display: inline-block;
            margin-right: 0.25rem;
            min-height: 1em;
            opacity: 0.5;
            vertical-align: middle;
          }

          .placeholder-xs {
            min-height: 0.6em;
          }
          .placeholder-sm {
            min-height: 0.8em;
          }
          .placeholder-lg {
            min-height: 1.2em;
          }

          .placeholder-glow .placeholder {
            animation: placeholder-glow 2s ease-in-out infinite;
          }

          @keyframes placeholder-glow {
            50% {
              opacity: 0.2;
            }
          }

          .placeholder-wave {
            -webkit-mask-image: linear-gradient(
              130deg,
              #000 55%,
              rgba(0, 0, 0, 0.65) 75%,
              #000 95%
            );
            -webkit-mask-size: 200% 100%;
            mask-image: linear-gradient(
              130deg,
              currentcolor 55%,
              rgba(0, 0, 0, 0.65) 75%,
              currentcolor 95%
            );
            mask-size: 200% 100%;
            animation: placeholder-wave 2s linear infinite;
          }

          @keyframes placeholder-wave {
            100% {
              -webkit-mask-position: -200% 0%;
              mask-position: -200% 0%;
            }
          }
        `}
      </style>
    </>
  );
};

Placeholder.displayName = 'Placeholder';

export default Placeholder;
