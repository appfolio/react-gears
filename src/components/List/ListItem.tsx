import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import React, { useState } from 'react';
import { ListGroupItemProps } from 'reactstrap';
import Button from '../Button/Button';
import Collapse from '../Collapse/Collapse';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import Label from '../Label/Label';
import ListGroupItem from './ListGroupItem';

export interface ListItemProps<T> extends Omit<ListGroupItemProps, 'onSelect'> {
  children: (item: T, selected?: boolean) => React.ReactNode;
  id?: string;
  className?: string;
  color?: string;
  expanded?: boolean;
  expandedColor?: string;
  item: T;
  onExpand?: (item: T) => React.ReactNode | undefined;
  onSelect?: (item: T, checked?: boolean) => void;
  select?: 'checkbox' | 'radio' | 'switch' | '';
  selected?: boolean;
  selectable?: (item: T) => boolean;
}

function ListItem<T>({
  children: render,
  id: itemId,
  className,
  color,
  expanded: defaultExpanded = false,
  expandedColor,
  item,
  onExpand,
  onSelect,
  select,
  selected,
  selectable,
  ...props
}: ListItemProps<T>) {
  const isExpandable = onExpand !== undefined;
  const ExpandedItem = isExpandable ? onExpand!(item) : undefined;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [id] = useState(() => uniqueId('listitem-'));

  const unselectedColor = (expanded && expandedColor) || color;

  return (
    <ListGroupItem
      color={selected ? 'primary' : unselectedColor}
      className={classnames('rounded-0', className)}
      {...props}
    >
      <div className="d-flex align-items-center">
        {select && (
          <div className="pe-2" style={{ width: '26px' }}>
            <Input
              id={id}
              type={select}
              checked={selected}
              label={<span className="sr-only">Select {itemId}</span>}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onSelect && onSelect(item, e.target.checked)
              }
              disabled={selectable ? !selectable(item) : false}
            />
            <Label for={id} className="sr-only">
              Select {itemId}
            </Label>
          </div>
        )}
        <div
          className="me-auto w-100 px-2"
          style={{ maxWidth: select ? 'calc(100% - 26px)' : '100%' }}
        >
          {render(item, selected)}
        </div>
        {isExpandable && (
          <Button
            color="link"
            onClick={() => setExpanded(!expanded)}
            style={{
              visibility: ExpandedItem === undefined ? 'hidden' : 'visible',
            }}
          >
            <Icon name={`chevron-${expanded ? 'up' : 'down'}`} />
            <span className="sr-only">Expand {itemId}</span>
          </Button>
        )}
      </div>
      {ExpandedItem === undefined || <Collapse isOpen={expanded}>{ExpandedItem}</Collapse>}
    </ListGroupItem>
  );
}

ListItem.displayName = 'ListItem';

export default ListItem;
