import { DndContext, DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import React, { useEffect, useMemo, useState } from 'react';
import HasManyFields2Add from './HasManyFields2Add';
import HasManyFields2Context from './HasManyFields2Context';
import { HasManyFields2Child } from './HasManyFields2Row';

interface HasManyFields2Props {
  children: HasManyFields2Child | HasManyFields2Child[];
  label: string;
  disabled: boolean;
  onAdd: () => void;
  onOrderChanged?: (newOrderIds: string[]) => void;
  maximumRows: number | undefined;
  minimumRows: number | undefined;
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
  const [componentLookupMap, setComponentLookupMap] = useState<Record<string, HasManyFields2Child>>(
    {}
  );

  useEffect(() => {
    const newComponentLookupMap: Record<string, HasManyFields2Child> = {};
    const newItemIds: string[] = [];
    React.Children.forEach(children, (child) => {
      if (!React.isValidElement(child)) {
        return undefined;
      }
      newItemIds.push(child.props.rowId);
      newComponentLookupMap[child.props.rowId] = child;
      return undefined;
    });
    setComponentLookupMap(newComponentLookupMap);
    setItemIds(newItemIds);
  }, [children]);

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
    const idx1 = newItemIds.indexOf(id1);
    const idx2 = newItemIds.indexOf(id2);
    const temp = newItemIds[idx1];
    newItemIds[idx1] = newItemIds[idx2];
    newItemIds[idx2] = temp;
    return newItemIds;
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

    const newItemIds = swapItemIdPositions(activeId, over.id);
    setItemIds(newItemIds);

    if (onOrderChanged) {
      onOrderChanged(newItemIds);
    }
  };

  const onDragCancel = () => setActiveId(null);

  const contextCached = useMemo(() => {
    return {
      reorderable,
      minimumRowsReached: minimumRows !== undefined && itemIds.length <= minimumRows,
    };
  }, [reorderable, minimumRows, itemIds.length]);

  const shouldDisplayAddButton = Boolean(onAdd) && (!maximumRows || itemIds.length < maximumRows);

  const renderRows = useMemo(
    () => (
      <HasManyFields2Context.Provider value={contextCached}>
        {itemIds.map((itemId) => componentLookupMap[itemId])}
      </HasManyFields2Context.Provider>
    ),
    [itemIds, contextCached, componentLookupMap]
  );

  return (
    <>
      {reorderable ? (
        <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd} onDragCancel={onDragCancel}>
          <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
            {renderRows}
          </SortableContext>
        </DndContext>
      ) : (
        renderRows
      )}

      <HasManyFields2Add disabled={disabled} onClick={onAdd} visible={shouldDisplayAddButton}>
        {label}
      </HasManyFields2Add>
    </>
  );
};

export default HasManyFields2;
