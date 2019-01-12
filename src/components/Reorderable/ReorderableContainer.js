import { SortableContainer } from 'react-sortable-hoc';

export default function withReorderableContainer(WrappedComponent) {
  return SortableContainer(WrappedComponent);
}
