import { SortableContainer, WrappedComponent } from 'react-sortable-hoc';

export default function ReorderableContainer<T>(Wrapped: WrappedComponent<T>) {
  return SortableContainer(Wrapped);
}
