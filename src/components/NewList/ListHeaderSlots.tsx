import React from 'react';
import type { ReactElement } from 'react';

interface ListHeaderProps {
  checkbox?: ReactElement;
  filter?: ReactElement;
  sortDirection?: ReactElement;
  sortOptions?: ReactElement;
}

const ListHeader = ({ checkbox, filter, sortOptions, sortDirection }: ListHeaderProps) => (
  <div className="d-flex justify-content-between bg-secondary p-3 rounded-top">
    <div className="d-flex align-items-center min-vw-25">
      {checkbox}
      {filter}
    </div>
    <div className="d-flex min-vw-25">
      {sortOptions}
      {sortDirection}
    </div>
  </div>
);

export default ListHeader;
