import React, { useState } from 'react';
import classnames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import Button from './Button';
import Collapse from './Collapse';
import CustomInput from './CustomInput';
import Icon from './Icon';
import ListGroupItem from './ListGroupItem';

interface ListItemProps<T> extends ListGroupItem {
  item: T,
  children: (item: T, selected?: boolean) => React.ReactNode,
  className?: string,
  color?: string,
  expanded?: boolean,
  onExpand?: (item: T) => React.ReactNode,
  selected?: boolean,
  select?: 'checkbox' | 'radio' | 'switch',
  onSelect: (item: T, checked: boolean) => void
}

function ListItem<T>({
  item, children: render, className, color, expanded: defaultExpanded = false, onExpand, selected, select, onSelect, ...props
}: ListItemProps<T>) {
  const isExpandable = onExpand !== undefined;
  const [expanded, setExpanded] = useState(defaultExpanded);
  const [id] = useState(() => uniqueId('listitem-'));

  return (
    <ListGroupItem
      action={!!select}
      color={selected ? 'info' : color}
      className={classnames('rounded-0', className)}
      {...props}
    >
      <div className="d-flex align-items-center">
        {select && (
          <div className="pr-2">
            <CustomInput
              id={id}
              type={select}
              checked={selected}
              label={<span className="sr-only">Select</span>}
              onChange={e => onSelect(item, e.target.checked)}
            />
          </div>
        )}
        <div className="mr-auto w-100 px-2">
          {render(item, selected)}
        </div>
        {isExpandable && (
          <Button color="link" onClick={() => setExpanded(!expanded)} className="mr-n3">
            <Icon name={`chevron-${expanded ? 'up' : 'down'}`} />
            <span className="sr-only">
              Expand
            </span>
          </Button>
        )}
      </div>
      {onExpand && (
        <Collapse isOpen={expanded}>
          {onExpand(item)}
        </Collapse>
      )}
    </ListGroupItem>
  );
}

ListItem.displayName = 'ListItem';

export default ListItem;
