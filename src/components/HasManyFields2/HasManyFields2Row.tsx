import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Placement } from '@popperjs/core';
import React, { useContext } from 'react';
import ConfirmationButton from '../Button/ConfirmationButton';
import Icon from '../Icon/Icon';
import Tooltip from '../Tooltip/Tooltip';
import DragHandle from './components/DragHandle';
import HasManyFields2Context from './components/HasManyFields2Context';

export interface HasManyFields2RowProps {
  deleteable?: boolean;
  disabled?: boolean;
  disabledReason?: string | undefined;
  disabledReasonPlacement?: Placement | undefined;
  onDelete?: (rowId?: string) => any;
  rowId: string;
}

export const HasManyFields2Row: React.FC<HasManyFields2RowProps> = ({
  children,
  rowId,
  deleteable,
  disabled,
  disabledReason,
  disabledReasonPlacement,
  onDelete,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: rowId });

  const { reorderable, minimumRowsReached } = useContext(HasManyFields2Context);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const showDeleteButton = !minimumRowsReached && deleteable;

  const showTooltip = disabled && disabledReason && disabledReasonPlacement;
  const tooltipId = `rowId-${rowId}`;
  const isDraggable = reorderable && !disabled;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="js-reorderable-item mb-4 w-100 row"
      key={rowId}
      id={tooltipId}
    >
      {isDraggable ? <DragHandle {...listeners}/> : null}
      <div className="col w-100">{children}</div>
      {showDeleteButton ? (
        <ConfirmationButton
          color="danger"
          confirmation="Delete"
          aria-label="Delete"
          outline
          onClick={(e) => {
            e.preventDefault();
            onDelete?.(rowId);
          }}
          className="p-2 col-auto"
          disabled={disabled}
        >
          <Icon name="circle-xmark" iconStyle='regular' size="lg" />
        </ConfirmationButton>
      ) : null}
      {showTooltip && (
        <Tooltip placement={disabledReasonPlacement} target={tooltipId}>
          {disabledReason}
        </Tooltip>
      )}
    </div>
  );
};

export type HasManyFields2Child = ReturnType<typeof HasManyFields2Row>;

export default HasManyFields2Row;
