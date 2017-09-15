import PropTypes from 'prop-types';
import React from 'react';

const Spinner = ({ color, duration, segments, size, ...props }) => {
  return (
    <svg
      width={`${size}em`}
      height={`${size}em`}
      viewBox="-200 -200 200 200"
      version="1.1"
      {...props}
    >
      <defs>
        <path id="shape" d="M20,10 A10,10 0 1 0 20,-10 L-20,-10 A10,10 0 1 0 -20,10" fill={color} />
      </defs>
      <g transform="translate(-100,-100)">
        {[...Array(segments).keys()].map(i => {
          const begin = `${(i * (duration / segments)).toFixed(2)}s`;
          const opacity = (1 - i / segments).toFixed(2);
          const rotate = i * (360 / segments).toFixed(2);

          return (
            <use
              key={i}
              xlinkHref="#shape"
              transform={`rotate(${rotate}) translate(70, 0)`}
              opacity={opacity}
            >
              <animate
                attributeType="CSS"
                attributeName="opacity"
                from="1"
                to="0.0"
                dur={`${duration}s`}
                repeatCount="indefinite"
                begin={begin}
              />
            </use>
          );
        })}
      </g>
    </svg>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  duration: PropTypes.number,
  segments: PropTypes.number,
  size: PropTypes.number
};

Spinner.defaultProps = {
  color: 'currentColor',
  duration: 1.2,
  segments: 12,
  size: 1
};

export default Spinner;

