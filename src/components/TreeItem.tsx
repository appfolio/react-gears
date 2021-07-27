import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { v4 as uuidv4 } from 'uuid';
import Button from './Button';
import CustomInput from './CustomInput';
import Icon from './Icon';
import ListGroupItem from './ListGroupItem';
import TreeOption from './TypeHelpers/TreeOption';

export interface TreeItemProps<T> {
  className?: string;
  indent?: number;
  label: (item: T, option: TreeOption<T>) => React.ReactNode;
  item: TreeOption<T>;
  selectable: boolean;
  updateOption: (option: TreeOption<T>, props: any) => void;
}

function updateSelection(selected: boolean, children?: TreeOption<any>[]): TreeOption<any>[] | undefined {
  return children?.map((option) => {
    return {
      ...option,
      selected,
      children: updateSelection(selected, option.children)
    };
  });
}

function TreeItem<T>({
  className,
  indent = 0,
  label,
  item,
  selectable = false,
  updateOption,
  ...props
}: TreeItemProps<T>) {
  const selectAllRef = useRef<HTMLElement>(null);
  const [checkboxId] = useState(uuidv4());
  const showExpand = item.children && item.children?.length > 0;

  useEffect(() => {
    if (selectAllRef && selectAllRef.current && item.children) {
      const allSelected = item.children?.every(child => child.selected);
      const noneSelected = item.children?.every(child => child.selected === false);
      // @ts-ignore
      selectAllRef!.current!.indeterminate = !allSelected && !noneSelected;
    }
  }, [item]);

  return (
    <ListGroupItem
      key={item.key}
      className={classnames('list-group-item', 'pl-2', 'text-truncate', className)}
      style={{
        display: 'grid',
        gridTemplateColumns: showExpand ?
          `${indent * 1.5}rem ${selectable ? '2rem' : ''} 2rem 1fr` :
          `${(indent * 1.5) + 2}rem ${selectable ? '2rem' : ''} 1fr`,
        alignItems: 'center'
      }}
      {...props}
    >
      <div />
      {showExpand ? (
        <Button
          color="link"
          className="rg-treeitem-expand py-0 px-0"
          onClick={() => updateOption(item, { expanded: !item.expanded })}
        >
          <Icon
            name="angle-down"
            rotate={item.expanded ? 180 : undefined}
            size="lg"
          />
        </Button>
      ) : null}
      {selectable && (
        <CustomInput
          checked={item.selected}
          className={classnames('rg-treeitem-checkbox', 'position-relative')}
          id={checkboxId}
          innerRef={selectAllRef}
          onChange={(e) => {
            const newSelection = e.target.checked;
            const children = updateSelection(newSelection, item.children);
            updateOption(item, { children, selected: newSelection });
          }}
          type="checkbox"
        />
      )}
      <div className="w-100">{label(item.item, item)}</div>
    </ListGroupItem>
  );
}

export default TreeItem;
