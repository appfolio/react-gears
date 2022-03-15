import PropTypes from 'prop-types';
import React from 'react';
import LabelBadge from './LabelBadge';

export default class FilterList extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    filters: PropTypes.array.isRequired,
    maxWidth: PropTypes.number,
    onRemove: PropTypes.func,
  };

  static defaultProps = {
    maxWidth: 14,
  };

  render() {
    const { className, filters, maxWidth, onRemove } = this.props;
    return (
      <div className={className}>
        {filters.map((filter, i) => (
          /* eslint-disable react/no-array-index-key -- No idea what filters is, and no guarantee there is a unique field present */
          <LabelBadge
            className="m-1"
            key={i}
            label={filter.label}
            maxWidth={maxWidth}
            onRemove={() => onRemove(filter)}
            removable={filter.removable}
            value={filter.value}
          />
          /* eslint-enable react/no-array-index-key */
        ))}
      </div>
    );
  }
}
