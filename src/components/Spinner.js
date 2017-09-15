import PropTypes from 'prop-types';
import React from 'react';

function range(size) {
  const result = [];
  for (let i = 0; i < size; i++) result.push(i);
  return result;
}

const SEGMENTS = 12;

const Spinner = ({ color, duration, size, ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="-200 -200 200 200"
    version="1.1"
    {...props}
  >
    <defs>
      <path id="shape" d="M20,10 A10,10 0 1 0 20,-10 L-20,-10 A10,10 0 1 0 -20,10" fill={color} />
    </defs>
    <style>{`
      .spinner {
        animation: spin ${duration} infinite steps(${SEGMENTS});
      }
      @keyframes spin {
        100% { transform: rotate(360deg); }
      }
    `}</style>
    <g transform="translate(-100,-100)">
      <g className="spinner">
        {range(SEGMENTS).map(i => {
          const opacity = (i / SEGMENTS).toFixed(2);
          const rotate = i * (360 / SEGMENTS).toFixed(2);

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

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.string,
  size: PropTypes.string
};

Spinner.defaultProps = {
  color: 'currentColor',
  duration: '1.2s',
  size: '1em'
};

export default Spinner;

