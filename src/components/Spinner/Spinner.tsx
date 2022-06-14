import React from 'react';
import { Spinner, SpinnerProps } from 'reactstrap';
import ApmSpinner from './ApmSpinner';

const SpinnerWrapper = ({ type, ...props }: SpinnerProps) =>
  type === 'spin' ? <ApmSpinner {...props} /> : <Spinner type={type} {...props} />;

SpinnerWrapper.defaultProps = {
  // TODO: update, Spinner doesn't contain the defaultProps types so we cast as any
  ...(Spinner as any).defaultProps,
  type: 'spin',
};

SpinnerWrapper.displayName = 'Spinner';

export default SpinnerWrapper;
