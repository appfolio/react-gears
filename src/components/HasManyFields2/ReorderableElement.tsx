import { SortableElement, WrappedComponent } from 'react-sortable-hoc';

export default function ReorderableElement(Wrapped: WrappedComponent<unknown>) {
  return SortableElement(Wrapped);
}
