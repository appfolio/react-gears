import React from 'react';
import { LabelBadge } from '../';

export default class FilterList extends React.Component {

  static propTypes = {
    classNames: React.PropTypes.string,
    filters: React.PropTypes.array.isRequired
  }

  render() {
    const { classNames, filters } = this.props;

    return (
      <div>
        {filters.map((filter, i) => {
          return (
            <LabelBadge
              classNames={`${classNames} m-1`}
              key={i}
              label={filter.label}
              maxWidth={filter.maxWidth}
              onRemove={filter.onRemove}
              removable={filter.removable}
              value={filter.value}
            />
          );
        })}
      </div>
    );
  }
}
