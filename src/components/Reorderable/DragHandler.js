import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import Icon from '../Icon';

export default function withDragHandler(WrappedComponent, useDefault = true) {
  if (useDefault) {
    return SortableHandle(() => (
      <div className="mr-3 align-self-stretch text-black-50" style={{ cursor: 'grab' }}>
        <span className="d-flex align-items-center h-100">
          <Icon name="bars" />
        </span>
      </div>
    ));
  }
  return SortableHandle(WrappedComponent);
}
