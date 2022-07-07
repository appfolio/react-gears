import React from 'react';
import type { ChangeEventHandler, ReactElement } from 'react';
import { ListGroupItem } from 'reactstrap';
import Input from '../Input/Input';

export interface ListDataItem {
  [key: string]: any;
}
interface ListItemProps {
  children: ReactElement;
  onSelectToggle: ChangeEventHandler<HTMLInputElement>;
  selectable?: boolean;
  selected?: boolean;
}

function ListItem({ children, onSelectToggle, selectable, selected }: ListItemProps) {
  return (
    <ListGroupItem className="list-group-item-action">
      <div className="d-flex align-items-center">
        {selectable && (
          <Input
            type="checkbox"
            className="me-3"
            aria-label="Select item"
            title="Select item"
            checked={selected}
            onChange={onSelectToggle}
          />
        )}
        <div className="w-100">{children}</div>
      </div>
    </ListGroupItem>
  );
}

export default ListItem;
