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
    to: PropTypes.number.isRequired,
    totalItems: PropTypes.number.isRequired,
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
