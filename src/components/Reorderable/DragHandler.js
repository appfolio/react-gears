import React from 'react';
import { SortableHandle } from 'react-sortable-hoc';
import Icon from '../Icon';
import styles from './DragHandler.scss';

export default function withDragHandler(WrappedComponent, useDefault = true) {
  if (useDefault) {
    return SortableHandle(() => (
      <div className={`mr-3 align-self-stretch ${styles.dragHandler}`}>
        <span className="d-flex flex-column align-items-center justify-content-center h-100 pr-1">
          <Icon name="angle-up" />
          <Icon name="circle-thin" />
          <Icon name="angle-down" />
        </span>
      </div>
    ));
  }
  return SortableHandle(WrappedComponent);
}
