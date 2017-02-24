import React from 'react';
import { LabelBadge } from '../';

export default class FilterList extends React.Component {

  static propTypes = {
    className: React.PropTypes.string,
    filters: React.PropTypes.array.isRequired,
    maxWidth: React.PropTypes.number,
    onRemove: React.PropTypes.func
  }

  static defaultProps = {
    maxWidth: 14
  }

  render() {
    const { className, filters, maxWidth, onRemove } = this.props;

    return (
      <div className={className}>
        {filters.map((filter, i) => (
          <LabelBadge
            className='m-1'
            key={i}
            label={filter.label}
            maxWidth={maxWidth}
            onRemove={() => onRemove(filter)}
            removable={filter.removable}
            value={filter.value}
          />)
        )}
      </div>
    );
  }
}
