import React from 'react';
import DragHandler from './DragHandler';
import ReorderableElement from './ReorderableElement';

const SortableItem = ReorderableElement(({ key, children, ...props }) => (
  <div className="d-flex js-reorderable-item" key={key} {...props}>
    <DragHandler />
    <div className="w-100">{children}</div>
  </div>
));


export default SortableItem;
