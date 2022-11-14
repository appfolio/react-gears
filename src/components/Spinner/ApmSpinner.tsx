import React, { FC } from 'react';
import range from '../../util/range';

// const since these don't behave well as live props, some animation issues:
const DURATION = '1s';
const SEGMENTS = 12;

type Props = {
  className?: string;
  color?: string;
  size?: string;
};

// ref
const ApmSpinner: FC<Props> = ({ color, size, ...props }) => (
  <svg width={size} height={size} viewBox="-200 -200 200 200" version="1.1" {...props}>
    <defs>
      <path id="shape" d="M20,10 A10,10 0 1 0 20,-10 L-20,-10 A10,10 0 1 0 -20,10" fill={color} />
    </defs>
    <style>
      {`
      .gears-spinner {
        animation: gears-spinner-spin ${DURATION} infinite steps(${SEGMENTS});
      }
      @keyframes gears-spinner-spin {
        100% { transform: rotate(360deg); }
      }
    `}
    </style>
    <g transform="translate(-100,-100)">
      <g className="gears-spinner">
        {range(SEGMENTS).map((i) => {
          const opacity = (i / SEGMENTS).toFixed(2);
          const rotate = (i * (360 / SEGMENTS)).toFixed(2);

          return (
            <use
              key={i}
              xlinkHref="#shape"
              transform={`rotate(${rotate}) translate(70, 0)`}
              opacity={opacity}
            />
          );
        })}
      </g>
    </g>
  </svg>
);

ApmSpinner.defaultProps = {
  color: 'currentColor',
  size: '1em',
};

ApmSpinner.displayName = 'ApmSpinner';

export default ApmSpinner;
