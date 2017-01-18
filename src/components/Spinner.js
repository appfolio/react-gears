import React from 'react';
import styles from './Spinner.scss';
import classnames from 'classnames';

const Spinner = props => (
  <div className={classnames(styles.spinner, props.className)} style={props.style}>
    <div className={styles.a}></div>
    <div className={styles.b}></div>
  </div>
);

Spinner.propTypes = {
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};

export default Spinner;
