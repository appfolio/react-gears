import React, { Children } from 'react';
import type { MouseEventHandler, ReactElement, KeyboardEventHandler } from 'react';
import Button from '../Button/Button';
import DropdownToggle from '../Dropdown/DropdownToggle';
import Icon from '../Icon/Icon';
import type { ComboboxSelectionProps } from './ComboboxSelection';

export interface ComboboxSelectionsProps {
  children?: ReactElement<ComboboxSelectionProps>[] | ReactElement<ComboboxSelectionProps>;
  onRemoveAll?: () => void;
  placeholder?: string;
}

const defaultProps = { placeholder: 'Click to select an option...' };

const ComboboxSelections = ({
  children,
  onRemoveAll,
  placeholder = defaultProps.placeholder,
}: ComboboxSelectionsProps) => {
  const handleRemoveAll: MouseEventHandler = (e) => {
    e.stopPropagation();
    onRemoveAll?.();
  };

  const handleRemoveAllKeyDown: KeyboardEventHandler<HTMLButtonElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      onRemoveAll?.();
    }
  };

  return (
    <>
      <DropdownToggle
        caret
        className="toggler rounded w-100 bg-white form-control py-0 d-flex justify-content-between align-items-center"
        tag="div"
        tabIndex={0}
      >
        {Children.count(children) === 0 ? (
          <span className="user-select-none text-muted">{placeholder}</span>
        ) : (
          <div className="d-flex justify-content-between w-100">
            <div className="d-flex flex-wrap w-100" role="list" style={{ minWidth: '0' }}>
              {children}
            </div>
            <Button
              aria-label="Remove all selections"
              data-testid="react-gears-comboboxselections-button"
              onClick={handleRemoveAll}
              onKeyDown={handleRemoveAllKeyDown}
              type="button"
              className="border-0 bg-white rounded-0 p-0 px-2 m-0"
            >
              <Icon className="text-muted" name="close" />
            </Button>
          </div>
        )}
      </DropdownToggle>
      <style jsx global>{`
        .toggler {
          min-height: 32.4px;
        }
        .toggler:focus {
          border-color: #80b7db;
          box-shadow: inset 0 1px 2px rgb(0 0 0 / 8%), 0 0 0 0.25rem rgb(0 110 183 / 25%);
          outline: 0;
        }
      `}</style>
    </>
  );
};

export default ComboboxSelections;
