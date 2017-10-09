import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon.js';

export default class Header extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    ascending: PropTypes.bool,
    children: PropTypes.node,
    onSort: PropTypes.func
  };

  static defaultProps = {
    active: false,
    ascending: true
  };

  render() {
    const { active = false, ascending = true, children, onSort, ...props } = this.props;

    return (
      <th
        onClick={onSort}
        style={{
          cursor: onSort ? 'pointer' : 'initial'
        }}
        {...props}
      >
        {children}
        {onSort &&
          <Icon
            name={active ? `caret-${ascending ? 'up' : 'down'}` : 'sort'}
            fixedWidth
          />
        }
      </th>
    );
  }
}
