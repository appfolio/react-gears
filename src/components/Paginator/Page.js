import React, { Component } from 'react';

import styles from '../Paginator.scss';

/**
 * A clickable link to a page in the pagination bar
 */
export default class Page extends Component {
  static propTypes = {
    current: React.PropTypes.bool.isRequired,
    onClick: React.PropTypes.func.isRequired,
    page: React.PropTypes.number.isRequired,
  }

  onClick = event => {
    event.preventDefault();
    this.props.onClick(this.props.page);
  }

  render() {
    const { current, page } = this.props;

    let content;
    if (current) {
      content = (
        <li className={styles.current}>
          {this.props.page}
        </li>
      );
    } else {
      content = (
        <li>
          <a href="#" className="js-pagination-link" onClick={this.onClick}>{page}</a>
        </li>
      );
    }

    return content;
  }
}
