import { SortableElement } from 'react-sortable-hoc';

export default function ReorderableElement(WrappedComponent) {
  return SortableElement(WrappedComponent);
}
