import PropTypes from 'prop-types';
import React from 'react';

type SummaryProps = {
  className?: string;
  from: number;
  size?: 'sm' | 'lg';
  to: number;
  totalItems: number;
};

/**
 * A text summary of the current pagination state
 */
const Summary: React.FunctionComponent<SummaryProps> = ({
  className = '',
  from,
  size,
  to,
  totalItems,
}) => {
  const start = Math.min(totalItems, from);
  const end = Math.min(totalItems, to);

  const fontSize = size === 'lg' ? 'larger' : size === 'sm' ? 'smaller' : undefined;

  return (
    <p className={className} style={{ fontSize }}>
      Displaying: {start}-{end} of {totalItems}
    </p>
  );
};

Summary.propTypes = {
  className: PropTypes.string,
  from: PropTypes.number.isRequired,
  size: PropTypes.oneOf(['sm', 'lg']),
  to: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
};

Summary.displayName = 'Summary';

export default Summary;
