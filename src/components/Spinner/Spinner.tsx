import React from 'react';
import { Spinner, SpinnerProps } from 'reactstrap';
import ApmSpinner from './ApmSpinner';

const SpinnerWrapper = ({ type, label, ...props }: SpinnerProps) =>
  type === 'spin' ? (
    <ApmSpinner role="status" aria-label={label} {...props} />
  ) : (
    <Spinner type={type} aria-label={label} {...props} />
  );

SpinnerWrapper.defaultProps = {
  type: 'spin',
  label: 'loading',
};

SpinnerWrapper.displayName = 'Spinner';

export default SpinnerWrapper;
