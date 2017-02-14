import Page from './Paginator/Page';
import React, { Component } from 'react';
import ShortcutLink from './Paginator/ShortcutLink';
import State from './Paginator/State';
import Summary from './Paginator/Summary';
import { Icon, Pagination, Row } from '../';

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
    size: React.PropTypes.oneOf(['sm', 'lg']),
    totalItems: React.PropTypes.number.isRequired,
  }

  static defaultProps = {
    perPage: DEFAULT_PER_PAGE,
    size: 'lg'
  };

  render() {
    const { currentPage, perPage, size, totalItems, onClick } = this.props;

    const paginationState = new State(currentPage, totalItems, perPage);
    const { from, to } = paginationState.currentItemRange();

    const firstPageLink = paginationState.showFirst() && (
      <ShortcutLink ref="first" name="first" page={1} onClick={onClick}>
        <Icon name="angle-double-left" />
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
        <Icon name="angle-double-right" />
      </ShortcutLink>
    );

    const pages = [];
    const rangeStart = paginationState.pageRange.from;
    const rangeEnd = paginationState.pageRange.to;
    if (rangeEnd > rangeStart) {
      for (let page = rangeStart; page <= rangeEnd; page++) {
        pages.push(
          <Page
            key={page}
            ref={page}
            page={page}
            current={currentPage === page}
            onClick={onClick}
          />
        );
      }
    }

    return (
      <Row className="flex-sm-row-reverse align-items-center">
        <div className="col-sm-7 text-center text-sm-right">
          <Pagination size={size} className="my-0 mb-2 d-inline-flex">
            {firstPageLink}
            {prevPageLink}
            {pages}
            {nextPageLink}
            {lastPageLink}
          </Pagination>
        </div>
        <div className="col-sm-5 text-center text-sm-left">
          <Summary from={from} to={to} totalItems={totalItems} className="m-0 mb-2" />
        </div>
      </Row>
    );
  }
}
