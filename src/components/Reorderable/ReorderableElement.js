import { SortableElement } from 'react-sortable-hoc';

export default function withReorderableElement(WrappedComponent) {
  return SortableElement(WrappedComponent);
}
