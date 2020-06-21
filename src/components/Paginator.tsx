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

type LinkProps = {
  disabled?: boolean,
  page?: number,
  onClick?: Function,
}

const FirstPageLink: React.FunctionComponent<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="first" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-double-left" />
  </ShortcutLink>
);

const PrevPageLink: React.FunctionComponent<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="previous" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-left" />
  </ShortcutLink>
);

const NextPageLink: React.FunctionComponent<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="next" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-right" />
  </ShortcutLink>
);

const LastPageLink: React.FunctionComponent<LinkProps> = ({ disabled, page, onClick }) => (
  <ShortcutLink name="last" page={page} disabled={disabled} onClick={onClick}>
    <Icon name="angle-double-right" />
  </ShortcutLink>
);

const linkPropTypes = {
  disabled: PropTypes.bool,
  page: PropTypes.number,
  onClick: PropTypes.func
};

FirstPageLink.propTypes = linkPropTypes;
PrevPageLink.propTypes = linkPropTypes;
NextPageLink.propTypes = linkPropTypes;
LastPageLink.propTypes = linkPropTypes;

type PaginatorProps = {
  currentPage: number,
  onClick: Function,
  perPage?: number,
  size?: 'sm' | 'lg',
  summary: React.ReactNode,
  totalItems: number,
}

/**
 * A component that generates a set of links that can be used for pagination.  Link selection is
 * communicated via the `onClick` callback.
 */
const Paginator: React.FunctionComponent<PaginatorProps> = ({
  currentPage,
  perPage = DEFAULT_PER_PAGE,
  size,
  summary,
  totalItems,
  onClick
}) => {

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
    <div className="d-flex flex-column flex-sm-row-reverse justify-content-between align-items-center mb-3">
      <div>
        {(paginationState.totalPages > 1) && (
          <Pagination size={size} listClassName="m-0 p-0 mb-2 mb-sm-0 border-0 flex-row">
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
      {summary || <Summary size={size} from={from} to={to} totalItems={totalItems} className="m-0" />}
    </div>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  perPage: PropTypes.number,
  size: PropTypes.oneOf(['sm', 'lg']),
  summary: PropTypes.node,
  totalItems: PropTypes.number.isRequired,
};

export default Paginator;
