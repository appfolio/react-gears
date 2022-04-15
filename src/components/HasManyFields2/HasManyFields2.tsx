import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { ReactElement, useState } from 'react';
import HasManyFields2Add from './HasManyFields2Add';

interface HasManyFields2RowProps {
  rowId: string;
}

export const HasManyFields2Row: React.FC<HasManyFields2RowProps> = ({ children, rowId }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: rowId });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners} key={rowId}>
      {children}
    </div>
  );
};

type HasManyFields2Child = ReturnType<typeof HasManyFields2Row>;

interface HasManyFields2Props {
  children: HasManyFields2Child | HasManyFields2Child[];
  label: string;
  disabled: boolean;
  onAdd: () => void;
  onOrderChanged?: (newOrderIds: string[]) => void;
  maximumRows: number;
  minimumRows: number;
  reorderable: boolean;
}

export const HasManyFields2: React.FC<HasManyFields2Props> = ({ children, onOrderChanged, disabled, label, onAdd }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const childItems: string[] = [];
  const initialComponentLookupMap: Record<string, HasManyFields2Child> = {};

  React.Children.forEach(children, (child) => {
    if (!React.isValidElement(child)) {
      return undefined;
    }
    childItems.push(child.props.rowId);
    initialComponentLookupMap[child.props.rowId] = child;
    return undefined;
  });

  const [itemIds, setItemIds] = useState<string[]>(childItems);
  const [componentLookupMap, setComponentLookupMap] =
    useState<Record<string, HasManyFields2Child>>(initialComponentLookupMap);

  const onDragStart = ({ active }: DragStartEvent) => {
    if (disabled) {
      return;
    }

    if (!active) {
      return;
    }

    setActiveId(active.id);
  };

  const swapItemIdPositions = (id1: string, id2: string) => {
    const newItemIds = [...itemIds];
    [newItemIds[newItemIds.indexOf(id2)], newItemIds[newItemIds.indexOf(id1)]] = [
      newItemIds[newItemIds.indexOf(id1)],
      newItemIds[newItemIds.indexOf(id2)],
    ];
    setItemIds(newItemIds);
  };

  const onDragEnd = ({ over }: DragEndEvent) => {
    if (disabled) {
      return;
    }

    setActiveId(null);

    if (!over) {
      return;
    }

    if (!activeId) {
      return;
    }

    if (activeId === over.id) {
      return;
    }

    swapItemIdPositions(activeId, over.id);
    
    if (onOrderChanged) {
      onOrderChanged(itemIds);
    }
  };

  const onDragCancel = () => setActiveId(null);

  return (<>
    <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={onDragCancel}>
      <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
        {itemIds.map((itemId) => componentLookupMap[itemId])}
      </SortableContext>
    </DndContext>
    <HasManyFields2Add disabled={disabled} onClick={onAdd} visible={Boolean(onAdd)}>{label}</HasManyFields2Add>
    </>
  );
};

export default HasManyFields2;

// const noop = () => {};

// const DragHandler = withDragHandler();

// interface ReorderableElementParamProps {
//   key: string;
//   reorderable?: boolean;
//   children: ReactChild & { props: { key: string } };
//   disabled?: boolean;
// }

// function DraggableItem<V>({ key, reorderable, children }: ReorderableElementParamProps) {
//   return (
//     <div className="d-flex js-reorderable-item" key={key}>
//       { reorderable && <DragHandler /> }
//       <div className="w-100">
//         {children}
//       </div>
//     </div>
//   );
// }

// const HasManyFieldsChildWrapper = SortableElement(DraggableItem as WrappedComponent<ReorderableElementParamProps>);

// type HasManyFieldsChild = ReactElement & { props: { key: string } };

// interface HasManyFieldsProps {
//   disabled?: boolean;
//   label: string;
//   onAdd: any;
//   maximumRows?: number;
//   reorderable: boolean;
//   children: HasManyFieldsChild[];
// }

// const defaultHasManyFieldsProps = {
//   onAdd: noop,
//   onRemove: noop,
//   maximumRows: Infinity,
//   reorderable: false,
//   children: [],
//   label: 'Add an item'
// };

// const applyDefaultProps = (props: Partial<HasManyFieldsProps>): HasManyFieldsProps => {
//   return {
//     ...defaultHasManyFieldsProps,
//     ...props
//   };
// };

// interface MaybeSortableContainerProps {
//   disabled: boolean;
//   reorderable: boolean;
//   children: ReactChild | ReactChild[];
// }

// const MaybeSortableContainer: FC<MaybeSortableContainerProps> = ({
//   disabled,
//   reorderable,
//   children
// }: MaybeSortableContainerProps) => {
//   const UnsortableContainer: FC<{ className: string }> = () => (
//     <>
//       {children}
//     </>
//   );

//   if (!disabled && reorderable) {
//     const SortableContainer = makeContainerSortable(UnsortableContainer);

//     return (
//       <div>
//         <SortableContainer
//           className="js-reorderable-container"
//           helperClass="hmf-dragging"
//           useDragHandle
//           lockAxis="y"
//         />
//         {/*
//           //@ts-ignore */}
//         <style jsx>
//           {`
//             div {
//               -webkit-touch-callout: none;
//               -webkit-user-select: none;
//               -moz-user-select: none;
//               -ms-user-select: none;
//               user-select: none;
//             }
//           `}
//         </style>
//       </div>
//     );
//   }

//   return <UnsortableContainer className="js-reorderable-container" />;
// };

// const HasManyFields2: FC<HasManyFieldsProps> = (props: HasManyFieldsProps) => {
//   const { reorderable, disabled, label, children, onAdd, maximumRows } = applyDefaultProps(props);

//   const addDisabled = maximumRows && (children.length >= maximumRows);
//   return (
//     <div>
//       <MaybeSortableContainer disabled={Boolean(disabled)} reorderable={reorderable}>
//         {
//           children?.map(
//             (child, index) => (
//               <HasManyFieldsChildWrapper
//                 key={`has_many_fields_child_${child.props.key}`}
//                 reorderable={reorderable}
//                 disabled={disabled}
//                 index={index}
//               >
//                 {child}
//               </HasManyFieldsChildWrapper>
//             )
//           )
//         }
//       </MaybeSortableContainer>
//       <HasManyFieldsAdd onClick={onAdd} disabled={addDisabled}>
//         {label}
//       </HasManyFieldsAdd>
//     </div>
//   );
// };

// export default HasManyFields2;
