import classnames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Input from '../Input/Input';
import ListGroupItem from '../List/ListGroupItem';
import { Option } from './Tree.types';

export interface TreeItemProps<T> {
  className?: string;
  indent?: number;
  label: (item: T, option: Option<T>) => React.ReactNode;
  option: Option<T>;
  selectable: boolean;
  updateOption: (option: Option<T>, props: any) => void;
}

function updateSelection(selected: boolean, children?: Option<any>[]): Option<any>[] | undefined {
  return children?.map((option) => {
    return {
      ...option,
      selected,
      children: updateSelection(selected, option.children),
    };
  });
}

let count = 0;
const getID = () => `tree-item-${count++}`;

function TreeItem<T>({
  className,
  indent = 0,
  label,
  option,
  selectable = false,
  updateOption,
  ...props
}: TreeItemProps<T>) {
  const selectAllRef = useRef<HTMLInputElement>(null);
  const [checkboxId] = useState(getID());
  const showExpand = option.children && option.children?.length > 0;

  useEffect(() => {
    if (selectAllRef && selectAllRef.current && option.children) {
      const allSelected = option.children?.every((child) => child.selected);
      const noneSelected = option.children?.every((child) => child.selected === false);
      // @ts-ignore
      selectAllRef!.current!.indeterminate = !allSelected && !noneSelected;
    }
  }, [option]);

  return (
    <ListGroupItem
      className={classnames('list-group-item', 'pl-2', 'text-truncate', className)}
      style={{
        display: 'grid',
        gridTemplateColumns: showExpand
          ? `${indent * 1.5}rem ${selectable ? '2rem' : ''} 2rem 1fr`
          : `${indent * 1.5 + 2}rem ${selectable ? '2rem' : ''} 1fr`,
        alignItems: 'center',
      }}
      {...props}
    >
      <div />
      {showExpand ? (
        <Button
          color="link"
          className="rg-treeitem-expand py-0 px-0"
          onClick={() => updateOption(option, { expanded: !option.expanded })}
        >
          <Icon name="angle-down" rotate={option.expanded ? 180 : undefined} size="lg" />
        </Button>
      ) : null}
      {selectable && (
        <Input
          checked={option.selected}
          className={classnames('rg-treeitem-checkbox', 'position-relative')}
          id={checkboxId}
          innerRef={selectAllRef}
          onChange={(e) => {
            const newSelection = e.target.checked;
            const children = updateSelection(newSelection, option.children);
            updateOption(option, { children, selected: newSelection });
          }}
          type="checkbox"
          data-testid="tree-item-checkbox-input"
        />
      )}
      <div className="js-tree-item-label w-100">{label(option.item, option)}</div>
    </ListGroupItem>
  );
}

export default TreeItem;
