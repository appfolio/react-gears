import React, { MouseEventHandler } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

export type SortDirection = 'ascending' | 'descending';
interface ListHeaderSortDirectionProps {
  direction?: SortDirection;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const defaultProps: ListHeaderSortDirectionProps = {
  direction: 'ascending',
};

const ListHeaderSortDirection = ({
  direction = defaultProps.direction,
  onClick,
}: ListHeaderSortDirectionProps) => (
  <Button color="link" id="sort-button" onClick={onClick} aria-label="Change Sort Direction">
    <Icon name={direction === 'ascending' ? 'arrow-down' : 'arrow-up'} />
  </Button>
);

export default ListHeaderSortDirection;
