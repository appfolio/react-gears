import PropTypes from 'prop-types';
import React from 'react';
import styles from './Spinner.scss';
import classnames from 'classnames';

// TODO allow spinner color as a prop and/or respect the text-* classes
// TODO consider SVG for spinner
const Spinner = props => (
  <div className={classnames('spinner', styles.spinner, props.className)} style={props.style}>
    <div></div>
    <div></div>
  </div>
);

Spinner.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  // TODO add size prop in lieu of style
};

export default Spinner;
