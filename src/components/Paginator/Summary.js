import React, { Component } from 'react';

import styles from '../Paginator.scss';

/**
 * A text summary of the current pagination state
 */
export default class Summary extends Component {
  static propTypes = {
    className: React.PropTypes.string,
    from: React.PropTypes.number.isRequired,
    to: React.PropTypes.number.isRequired,
    totalItems: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, from, to, totalItems } = this.props;

    let start = Math.min(totalItems, from);
    let end = Math.min(totalItems, to);

    return (
      <p className={className}>Displaying: {start}-{end} of {totalItems}</p>
    );
  }
}
