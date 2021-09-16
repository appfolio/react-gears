import React from 'react';
import PropTypes from 'prop-types';
import PaginationItem from '../PaginationItem';
import PaginationLink from '../PaginationLink';

type PageProps = {
  current: boolean,
  onClick: (pageNumber: number) => void,
  page: number,
}

/**
 * A clickable link to a page in the pagination bar
 */
const Page: React.FunctionComponent<PageProps> = ({
  current,
  page,
  ...props
}) => {
  const onClick = (event: React.MouseEvent) => {
    event.preventDefault();
    props.onClick(page);
  };

  return (
    <PaginationItem active={current}>
      <PaginationLink onClick={onClick}>{page}</PaginationLink>
    </PaginationItem>
  );
};

Page.propTypes = {
  current: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

Page.displayName = 'Page';

export default Page;
