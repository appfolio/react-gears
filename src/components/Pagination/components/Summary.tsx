import React, { FC } from 'react';

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
const Summary: FC<SummaryProps> = ({ className = '', from, size, to, totalItems }) => {
  const start = Math.min(totalItems, from);
  const end = Math.min(totalItems, to);

  const fontSize = size === 'lg' ? 'larger' : size === 'sm' ? 'smaller' : undefined;

  return (
    <p className={className} style={{ fontSize }}>
      Displaying: {start}-{end} of {totalItems}
    </p>
  );
};

Summary.displayName = 'Summary';

export default Summary;
