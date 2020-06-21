// @ts-nocheck
import React from 'react';
import PropTypes from 'prop-types';

/**
 * A text summary of the current pagination state
 */
export default class Summary extends React.Component {
  static displayName = 'Summary';

  static propTypes = {
    className: PropTypes.string,
    from: PropTypes.number.isRequired,
    size: PropTypes.string,
    to: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
  }

  static defaultProps = {
    className: ''
  }

  render() {
    const { className, from, size, to, totalItems } = this.props;

    const start = Math.min(totalItems, from);
    const end = Math.min(totalItems, to);

    const fontSize = (size === 'lg') ? 'larger' : (size === 'sm') ? 'smaller' : null;

    return (
      <p className={className} style={{ fontSize }}>Displaying: {start}-{end} of {totalItems}</p>
    );
  }
}
