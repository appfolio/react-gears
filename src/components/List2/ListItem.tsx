import React from 'react';
import type { ChangeEventHandler, MouseEventHandler, ReactElement } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import type { ItemBodyComponent, ListDataItem } from './List.types';

interface ListItemProps<T> {
  children: ReactElement<ItemBodyComponent<T>>;
  expandable?: boolean;
  expanded?: boolean;
  onExpandToggle: (expanded: boolean) => void;
  onSelectToggle: ChangeEventHandler<HTMLInputElement>;
  selectable?: boolean;
  selected?: boolean;
}

function ListItem<T extends ListDataItem>({
  children,
  expandable,
  expanded,
  onExpandToggle,
  onSelectToggle,
  selectable,
  selected,
}: ListItemProps<T>) {
  const handleExpandClick: MouseEventHandler<HTMLButtonElement> = () => {
    onExpandToggle(!expanded);
  };

  // TODO: Assert that Children is length 1 or 2
  return (
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
      {expandable && (
        <Button color="link" onClick={handleExpandClick}>
          <Icon name={expanded ? 'chevron-up' : 'chevron-down'} />
          <span className="sr-only">Expand</span>
        </Button>
      )}
    </div>
  );
}

export default ListItem;
