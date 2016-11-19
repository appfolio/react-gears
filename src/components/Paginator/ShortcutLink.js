import React, { Component } from 'react';

import styles from '../Paginator.scss';

/**
 * A clickable link to the first/previous/next/last page in the pagination bar
 */
export default class ShortcutLink extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    name: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    page: React.PropTypes.number.isRequired,
  }

  onClick = event => {
    event.preventDefault();
    this.props.onClick(this.props.page);
  }

  render() {
    const { children, name } = this.props;

    return (
      <li className={`js-pagination-${name} ${styles[name]}`}>
        <a href="#" className="js-pagination-link" onClick={this.onClick}>
          {children}
        </a>
      </li>
    );
  }
}
