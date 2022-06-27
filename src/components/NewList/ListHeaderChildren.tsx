import React, { ReactElement } from 'react';

interface ListHeaderProps {
  children: ReactElement | ReactElement[];
}

const ListHeader = ({ children }: ListHeaderProps) => (
  <div className="d-flex  bg-secondary p-3 rounded-top align-items-center">{children}</div>
);

export default ListHeader;
