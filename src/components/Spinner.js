import React from 'react';
import { Spinner } from 'reactstrap';
import ApmSpinner from './ApmSpinner';

const SpinnerWrapper = ({ type, ...props }) => (type === 'spin') ? <ApmSpinner {...props} /> : <Spinner type={type} {...props} />;

SpinnerWrapper.propTypes = {
  ...Spinner.propTypes
};

SpinnerWrapper.defaultProps = {
  ...Spinner.defaultProps,
  type: 'spin',
};

SpinnerWrapper.displayName = 'Spinner';

export default SpinnerWrapper;
