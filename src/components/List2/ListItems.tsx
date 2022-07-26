import React, { ReactElement } from 'react';
import ListGroup from '../List/ListGroup';

interface ListItemsProps {
  children: ReactElement[];
  flush?: boolean;
  maxHeight?: string;
}

const defaultProps = { maxHeight: 'auto' };

function ListItems({ children, flush, maxHeight = defaultProps.maxHeight }: ListItemsProps) {
  return (
    <ListGroup flush={flush} style={{ maxHeight }} className="overflow-auto">
      {children}
    </ListGroup>
  );
}

export default ListItems;
