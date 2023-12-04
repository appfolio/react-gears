import React, { Fragment } from 'react';
import Collapse from '../Collapse/Collapse';
import ListGroup from '../List/ListGroup';
import { Option } from './Tree.types';
import TreeItem from './TreeItem';

export interface TreeProps<T> {
  flush?: boolean;
  options: Option<T>[];
  indent?: number;
  selectable?: boolean;
  label: (item: T, option: Option<T>) => React.ReactNode;
  onChange: (options: Option<T>[]) => void;
}

function Tree<T>({
  flush = true,
  indent = 0,
  label,
  onChange,
  options,
  selectable = false,
  ...props
}: TreeProps<T>) {
  const updateOption = (option: Option<any>, properties: any) => {
    const index = options.indexOf(option);
    if (index !== -1) {
      onChange([
        ...options.slice(0, index),
        { ...options[index], ...properties },
        ...options.slice(index + 1),
      ]);
    }
  };

  return (
    <ListGroup flush={flush} {...props}>
      {options.map((option, index) => (
        <Fragment key={option.key || index}>
          <TreeItem
            data-testid="react-gears-tree-treeitem"
            indent={indent}
            label={label}
            option={option}
            selectable={selectable}
            updateOption={updateOption}
          />
          {option.children && option.children.length > 0 && (
            <Collapse className="list-group-item p-0" isOpen={option.expanded}>
              <Tree
                data-testid="react-gears-tree-treeitem-tree"
                indent={indent + 1}
                label={label}
                options={option.children}
                onChange={(children) => {
                  const allSelected = children?.every((child) => child.selected);
                  const noneSelected = children?.every((child) => child.selected === false);
                  updateOption(option, {
                    children,
                    selected: allSelected ? true : noneSelected ? false : null,
                  });
                }}
                selectable={selectable}
              />
            </Collapse>
          )}
        </Fragment>
      ))}
    </ListGroup>
  );
}

export default Tree;
