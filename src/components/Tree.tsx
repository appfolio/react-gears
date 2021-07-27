import React from 'react';
import Collapse from './Collapse';
import ListGroup from './ListGroup';
import TreeItem from './TreeItem';
import TreeOption from './TypeHelpers/TreeOption';

export interface TreeProps<T> {
  flush?: boolean;
  items: TreeOption<T>[];
  indent?: number;
  selectable?: boolean;
  label: (item: T, option: TreeOption<T>) => React.ReactNode;
  onChange: (items: TreeOption<T>[]) => void;
}

function Tree<T>({
  flush = true,
  indent = 0,
  label,
  onChange,
  items = [],
  selectable = false,
  ...props
}: TreeProps<T>) {
  const updateOption = (option: TreeOption<any>, properties: any) => {
    const index = items.indexOf(option);
    if (index !== -1) {
      onChange([
        ...items.slice(0, index),
        { ...items[index], ...properties },
        ...items.slice(index + 1)
      ]);
    }
  };

  return (
    <ListGroup flush={flush} {...props}>
      {items.map(item => (
        <React.Fragment key={item.key}>
          <TreeItem
            indent={indent}
            label={label}
            item={item}
            selectable={selectable}
            updateOption={updateOption}
          />
          {item.children && item.children.length > 0 && (
            <Collapse
              className="list-group-item p-0"
              isOpen={item.expanded}
              // className={classnames({ 'pl-4': indent })}
            >
              <Tree
                indent={indent + 1}
                label={label}
                items={item.children}
                onChange={(children) => {
                  const allSelected = children?.every(child => child.selected);
                  const noneSelected = children?.every(child => child.selected === false);
                  updateOption(item, {
                    children,
                    selected: allSelected ? true : noneSelected ? false : null
                  });
                }}
                selectable={selectable}
              />
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </ListGroup>
  );
}

Tree.defaultProps = {
  label: (item: any) => item
};

export default Tree;
