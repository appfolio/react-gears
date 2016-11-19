import React, { Component } from 'react';
import Icon from './Icon';
import Page from './Paginator/Page';
import ShortcutLink from './Paginator/ShortcutLink';
import State from './Paginator/State';
import Summary from './Paginator/Summary';

import styles from './Paginator.scss';

const DEFAULT_PER_PAGE = 20;

/**
 * A component that generates a set of links that can be used for pagination.  Link selection is
 * communicated via the `onClick` callback.
 */
export default class Paginator extends Component {
  static propTypes = {
    currentPage: React.PropTypes.number.isRequired,
    onClick: React.PropTypes.func.isRequired,
    perPage: React.PropTypes.number,
    totalItems: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    perPage: DEFAULT_PER_PAGE,
  };

  render() {
    const { currentPage, perPage, totalItems, onClick } = this.props;

    const paginationState = new State(currentPage, totalItems, perPage);
    const { from, to } = paginationState.currentItemRange();

    const firstPageLink = paginationState.showFirst() && (
      <ShortcutLink ref="first" name="first" page={1} onClick={onClick}>
        <Icon name="double-angle-left" />
      </ShortcutLink>
    );

    const prevPageLink = paginationState.showPrevious() && (
      <ShortcutLink ref="previous" name="previous" page={currentPage - 1} onClick={onClick}>
        <Icon name="angle-left" />
      </ShortcutLink>
    );

    const nextPageLink = paginationState.showNext() && (
      <ShortcutLink ref="next" name="next" page={currentPage + 1} onClick={onClick}>
        <Icon name="angle-right" />
      </ShortcutLink>
    );

    const lastPageLink = paginationState.showLast() && (
      <ShortcutLink ref="last" name="last" page={paginationState.totalPages} onClick={onClick}>
        <Icon name="double-angle-right" />
      </ShortcutLink>
    );

    const pages = [];
    const rangeStart = paginationState.pageRange.from;
    const rangeEnd = paginationState.pageRange.to;
    if (rangeEnd > rangeStart) {
      for (let page = rangeStart; page <= rangeEnd; page++) {
        pages.push(
          <Page key={page} ref={page} page={page} current={currentPage === page} onClick={onClick} />
        );
      }
    }

    return (
      <div className={styles.paginator}>
        <ul ref="links" className={styles.links}>
          {firstPageLink}
          {prevPageLink}
          {pages}
          {nextPageLink}
          {lastPageLink}
        </ul>

        <Summary from={from} to={to} totalItems={totalItems} />
      </div>
    );
  }
}
