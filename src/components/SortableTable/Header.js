import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon.js';
import styles from './Header.scss';

export default class Header extends React.Component {
  static propTypes = {
    active: PropTypes.bool,
    ascending: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    onSort: PropTypes.func
  };

  static defaultProps = {
    active: false,
    ascending: true
  };

  render() {
    const { active, ascending, children, className, onSort, ...props } = this.props;
    const classNames = classnames(className, styles.header);
    return (
      <th
        className={classNames}
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
