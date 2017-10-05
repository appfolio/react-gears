import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon.js';

const Header = ({ active = false, ascending = true, children, onSort, ...props }) => (
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

Header.propTypes = {
  active: PropTypes.bool,
  ascending: PropTypes.bool,
  children: PropTypes.node,
  onSort: PropTypes.func
};

export default Header;
