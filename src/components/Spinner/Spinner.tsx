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
  // TODO: update, Spinner doesn't contain the defaultProps types so we cast as any
  ...(Spinner as any).defaultProps,
  type: 'spin',
  label: 'loading',
};

SpinnerWrapper.displayName = 'Spinner';

export default SpinnerWrapper;
