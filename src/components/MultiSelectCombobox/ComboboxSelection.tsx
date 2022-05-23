import type { KeyboardEventHandler, MouseEventHandler } from 'react';
import React from 'react';
import Badge from '../Badge/Badge';
import Icon from '../Icon/Icon';

export interface ComboboxSelectionProps {
  children: string;
  onRemove?: () => void;
}

const ComboboxSelection = ({ children, onRemove }: ComboboxSelectionProps) => {
  const handleRemoveClick: MouseEventHandler<HTMLElement> = (e) => {
    e.stopPropagation();
    onRemove?.();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onRemove?.();
    }
  };

  return (
    <div role="listitem" className="mw-100">
      <Badge
        tabIndex={0}
        onClick={handleRemoveClick}
        onKeyDown={handleKeyDown}
        className="selection d-flex flex-nowrap align-items-center m-1 user-select-none"
        color="secondary"
        title={children}
        role="button"
      >
        <div
          className="me-2 text-truncate text-nowrap fw-normal"
          style={{ minWidth: '0', textTransform: 'none' }}
        >
          {children}
        </div>
        <Icon ariaLabel="Remove selection" className="text-muted" name="close" />
      </Badge>
      <style jsx global>{`
        .selection:focus {
          border-color: #80b7db;
          box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 0 0.25rem rgb(0 110 183 / 25%);
          outline: 0;
        }
      `}</style>
    </div>
  );
};

export default ComboboxSelection;
