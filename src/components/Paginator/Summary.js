import React, { Component } from 'react';

import styles from '../Paginator.scss';

/**
 * A text summary of the current pagination state
 */
export default class Summary extends Component {
  static propTypes = {
    from: React.PropTypes.number.isRequired,
    to: React.PropTypes.number.isRequired,
    totalItems: React.PropTypes.number.isRequired,
  }

  render() {
    const { from, to, totalItems } = this.props;

    let start = Math.min(totalItems, from);
    let end = Math.min(totalItems, to);

    return (
      <p className={styles.summary}>Displaying: {start}-{end} of {totalItems}</p>
    );
  }
}
