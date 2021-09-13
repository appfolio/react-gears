import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import Icon from '../Icon';

export default function withDragHandler(WrappedComponent, useDefault = true) {
  if (useDefault) {
    return SortableHandle(() => (
      <>
        <div className="rg-DragHandler me-3 align-self-stretch">
          <span className="d-flex flex-column align-items-center justify-content-center h-100 pe-1">
            <Icon name="grip-vertical" size="lg" />
          </span>
        </div>
        <style jsx>{`
          .rg-DragHandler {
            cursor: grab;
            opacity: 0.4;
          }
          .rg-DragHandler:hover {
            opacity: 0.8;
          }
        `}
        </style>
      </>
    ));
  }
  return SortableHandle(WrappedComponent);
}
