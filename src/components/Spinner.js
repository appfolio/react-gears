import React from 'react';
import styles from './Spinner.scss';
import classnames from 'classnames';

// TODO allow spinner color as a prop
const Spinner = props => (
  <div className={classnames('spinner', styles.spinner, props.className)} style={props.style}>
    <div></div>
    <div></div>
  </div>
);

Spinner.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Spinner;
