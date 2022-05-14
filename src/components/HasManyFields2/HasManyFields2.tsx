import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import ConfirmationButton from '../Button/ConfirmationButton';
import Icon from '../Icon/Icon';
import Tooltip from '../Tooltip/Tooltip';
import DragHandle from './DragHandle';
import HasManyFields2Add from './HasManyFields2Add';
import HasManyFields2Context from './HasManyFields2Context';

interface HasManyFields2RowProps {
  disabled: boolean;
  disabledReason: string | undefined;
  disabledReasonPlacement: string | undefined;
  onDelete: (rowId?: string) => any;
  rowId: string;
}

export const HasManyFields2Row: React.FC<HasManyFields2RowProps> = ({
  children,
  rowId,
  disabled,
  disabledReason,
  disabledReasonPlacement,
  onDelete
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: rowId });

  const { reorderable } = useContext(HasManyFields2Context);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const tooltip =
    disabled && disabledReason ? (
      <Tooltip placement={disabledReasonPlacement} target={rowId}>
        {disabledReason}
      </Tooltip>
    ) : null;

  // const button = disabled ? (
  //   <Button
  //     id={rowId}
  //     color="danger"
  //     onClick={(e) => e.preventDefault()}
  //     outline
  //     className="p-2 disabled col-auto"
  //   >
  //     <Icon name="times-circle-o" size="lg" />
  //   </Button>
  // ) : (
  // );

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="js-reorderable-item mb-4 w-100 row"
      key={rowId}
    >
      {reorderable ? <DragHandle {...listeners} /> : null}
      <div className="col w-100">
        {children}
      </div>
      <ConfirmationButton
        color="danger"
        confirmation="Delete"
        aria-label="Delete"
        outline
        onClick={(e) => {
          e.preventDefault();
          onDelete(rowId);
        }}
        className="p-2 col-auto"
        disabled={disabled}
        //{...deleteProps}
      >
        <Icon name="times-circle-o" size="lg" />
      </ConfirmationButton>
      {tooltip}
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

export const HasManyFields2: React.FC<HasManyFields2Props> = ({
  children,
  onOrderChanged,
  disabled,
  label,
  onAdd,
  reorderable,
  maximumRows,
  minimumRows,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [itemIds, setItemIds] = useState<string[]>([]);
  const [componentLookupMap, setComponentLookupMap] = useState<Record<string, HasManyFields2Child>>({});

  useEffect(() => {
    const newComponentLookupMap: Record<string, HasManyFields2Child> = {}
    const newItemIds: string[] = [];
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) {
        return undefined;
      }
      newItemIds.push(child.props.rowId);
      newComponentLookupMap[child.props.rowId] = child;
      setComponentLookupMap(newComponentLookupMap);
      setItemIds(newItemIds);
      return undefined;
    });
  }, [children])

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

  const reorderableCached = useMemo(() => {return {reorderable}}, [reorderable])

  return (
    <>
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={onDragCancel}>
        <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
          <HasManyFields2Context.Provider value={reorderableCached}>
            {itemIds.map((itemId) => componentLookupMap[itemId])}
          </HasManyFields2Context.Provider>
        </SortableContext>
      </DndContext>
      <HasManyFields2Add disabled={disabled} onClick={onAdd} visible={Boolean(onAdd)}>
        {label}
      </HasManyFields2Add>
    </>
  );
};

export default HasManyFields2;
