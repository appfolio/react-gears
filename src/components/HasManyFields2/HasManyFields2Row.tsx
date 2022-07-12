import { cornersOfRectangle } from '@dnd-kit/core/dist/utilities/algorithms/helpers';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import React, { useContext, useRef } from 'react';
import ConfirmationButton from '../Button/ConfirmationButton';
import Icon from '../Icon/Icon';
import Tooltip from '../Tooltip/Tooltip';
import DragHandle from './DragHandle';
import HasManyFields2Context from './HasManyFields2Context';

export interface HasManyFields2RowProps {
  deleteable?: boolean;
  disabled: boolean;
  disabledReason: string | undefined;
  disabledReasonPlacement: string | undefined;
  onDelete: (rowId?: string) => any;
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
  console.log('rowId', rowId);
  console.log('deleteable', deleteable);
  console.log('disabled', disabled);
  console.log('disabledReason', disabledReason);
  console.log('disabledReasonPlacement', disabledReasonPlacement);
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: rowId });
  const tooltipRef = useRef(null);

  const { reorderable, minimumRowsReached } = useContext(HasManyFields2Context);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const tooltip =
    disabled && disabledReason && tooltipRef ? (
      <Tooltip placement={disabledReasonPlacement} target={tooltipRef}>
        {disabledReason}
      </Tooltip>
    ) : null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className="js-reorderable-item mb-4 w-100 row"
      key={rowId}
    >
      {reorderable ? <DragHandle {...listeners} /> : null}
      <div className="col w-100">{children}</div>
<<<<<<< HEAD
      {minimumRowsReached ? null : (
=======
      {deleteable && (
>>>>>>> 778a2a36 (wip)
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
<<<<<<< HEAD
=======
          innerRef={tooltipRef}
>>>>>>> 778a2a36 (wip)
          //{...deleteProps}
        >
          <Icon name="times-circle-o" size="lg" />
        </ConfirmationButton>
      )}
      {tooltip}
    </div>
  );
};

export type HasManyFields2Child = ReturnType<typeof HasManyFields2Row>;

export default HasManyFields2Row;
