import type { ReactNode } from 'react';
import React from 'react';
import CardHeader from '../Card/CardHeader';

export interface ListHeaderProps {
  children?: ReactNode | undefined;
}

function ListHeader({ children }: ListHeaderProps) {
  return <CardHeader className="d-flex align-items-center bg-light border">{children}</CardHeader>;
}

export default ListHeader;
