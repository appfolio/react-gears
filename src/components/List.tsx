import React, { useEffect, useRef, useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import CustomInput from './CustomInput';
import ListGroup, { ListGroupProps } from './ListGroup';
import ListGroupItem from './ListGroupItem';
import ScrollContainer from './ScrollContainer';
import ListItem from './ListItem';
import useSet from '../hooks/useSet';

interface ListProps<T> extends Omit<ListGroupProps, 'onSelect'> {
  // header, height, itemClassName, items, children: render, onExpand, select, selected, onSelect,
  children?: React.ReactNode;
  flush?: boolean;
  header: React.ReactNode;
  height: number | string;
  onExpand?: (item: T) => React.ReactNode,
  itemClassName?: string;
  items: T[];
  select?: 'checkbox' | 'radio' | 'switch';
  selected: T[];
  onSelect: (selected: T[]) => void;
}

function List<T extends { expanded?: boolean, key: string }>({ flush, header, height, itemClassName, items, children: render, onExpand, select, selected, onSelect, ...props }: ListProps<T>) {
  const [selection, hasItem, addItem, removeItem, , clearSelection, replaceSelection] = useSet(selected);
  const [selectAllId] = useState(() => uniqueId('selectall-'));
  const selectAllRef = useRef<HTMLInputElement>();
  const showHeader = select === 'checkbox' || select === 'switch' || header;

  useEffect(() => onSelect(Array.from(selection)), [selection, onSelect]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => replaceSelection(selected), [selected]);

  useEffect(() => {
    selection.forEach((item) => { if (!items.includes(item)) removeItem(item); });
  }, [items, selection, removeItem]);

  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate = items.length > 0 && selection.size > 0 && selection.size !== items.length;
    }
  }, [items, selection]);

  const handleSelection = (item: T, checked: boolean) => {
    if (select === 'checkbox' || select === 'switch') {
      if (hasItem(item) && !checked) removeItem(item);
      else if (checked) addItem(item);
    } else if (!hasItem(item)) {
      clearSelection();
      addItem(item);
    }
  };

  const handleSelectAll = () => {
    if (selection.size === items.length) replaceSelection([]);
    else replaceSelection(items);
  };

  return (
    <ListGroup flush={flush} tag="div" {...props}>
      {showHeader && (
        <ListGroupItem
          tag="header"
          className="d-flex align-items-center bg-secondary border-bottom-0"
        >
          {select && (select !== 'radio') && (
            <div className="h-100 d-flex align-items-center mr-3">
              <CustomInput
                id={selectAllId}
                type={select}
                checked={!!items.length && selection.size === items.length}
                disabled={items.length === 0}
                label={<span className="sr-only">Select all</span>}
                onChange={() => handleSelectAll()}
                innerRef={selectAllRef}
              />
            </div>
          )}
          <div className="w-100">
            {header}
          </div>
        </ListGroupItem>
      )}
      <ScrollContainer height={height}>
        <ListGroup flush={flush} striped className="border-top-0">
          {items.map((item, i) => (
            <ListItem<T>
              className={itemClassName}
              expanded={item.expanded || false}
              item={item}
              key={item.key || i}
              select={select}
              selected={hasItem(item)}
              onSelect={handleSelection}
              onExpand={onExpand}
            >
              {render}
            </ListItem>
          ))}
        </ListGroup>
      </ScrollContainer>
    </ListGroup>
  );
}

List.defaultProps = {
  children: () => <></>,
  items: [],
  onSelect: () => {},
  select: '',
  selected: []
};

export default List;
