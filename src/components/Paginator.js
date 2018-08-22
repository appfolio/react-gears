import React from 'react';
import PropTypes from 'prop-types';
import range from 'lodash.range';
import Icon from './Icon';
import Page from './Paginator/Page';
import Pagination from './Pagination';
import ShortcutLink from './Paginator/ShortcutLink';
import State from './Paginator/State';
import Summary from './Paginator/Summary';

const DEFAULT_PER_PAGE = 20;

const FirstPageLink = ({ disabled, page, onClick }) => (
  <ShortcutLink name="first" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-double-left" />
  </ShortcutLink>
);

const PrevPageLink = ({ disabled, page, onClick }) => (
  <ShortcutLink name="previous" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-left" />
  </ShortcutLink>
);

const NextPageLink = ({ disabled, page, onClick }) => (
  <ShortcutLink name="next" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-right" />
  </ShortcutLink>
);

const LastPageLink = ({ disabled, page, onClick }) => (
  <ShortcutLink name="last" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-double-right" />
  </ShortcutLink>
);

/**
 * A component that generates a set of links that can be used for pagination.  Link selection is
 * communicated via the `onClick` callback.
 */
export default class Paginator extends React.Component {
  static propTypes = {
    currentPage: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    perPage: PropTypes.number,
    size: PropTypes.oneOf(['sm', 'lg']),
    totalItems: PropTypes.number.isRequired,
  }

  static defaultProps = {
    perPage: DEFAULT_PER_PAGE
  };

  render() {
    const { currentPage, perPage, size, totalItems, onClick } = this.props;

    const paginationState = new State(currentPage, totalItems, perPage);
    const { from, to } = paginationState.currentItemRange();

    const rangeStart = paginationState.pageRange.from;
    const rangeEnd = paginationState.pageRange.to + 1;
    const pages = range(rangeStart, rangeEnd).map(page => (
      <Page
        key={page}
        page={page}
        current={currentPage === page}
        onClick={onClick}
      />
    ));

    return (
      <div className="d-flex flex-column flex-sm-row-reverse justify-content-between align-items-center">
        <div>
          {(paginationState.totalPages > 1) && (
            <Pagination size={size} className="m-0 p-0 border-0 flex-row">
              <FirstPageLink
                page={1}
                disabled={!paginationState.showPrevious()}
                onClick={onClick}
              />
              <PrevPageLink
                page={currentPage - 1}
                disabled={!paginationState.showPrevious()}
                onClick={onClick}
              />
              {pages}
              <NextPageLink
                page={currentPage + 1}
                disabled={!paginationState.showNext()}
                onClick={onClick}
              />
              <LastPageLink
                page={paginationState.totalPages}
                disabled={!paginationState.showNext()}
                onClick={onClick}
              />
            </Pagination>
          )}
        </div>
        <Summary size={size} from={from} to={to} totalItems={totalItems} className="m-0 mb-3" />
      </div>
    );
  }
}
