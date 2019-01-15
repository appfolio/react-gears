import { SortableContainer } from 'react-sortable-hoc';

export default function ReorderableContainer(WrappedComponent) {
  return SortableContainer(WrappedComponent);
}
