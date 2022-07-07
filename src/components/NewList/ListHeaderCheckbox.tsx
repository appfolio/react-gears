import React, { useEffect, useRef } from 'react';
import type { ChangeEventHandler } from 'react';
import Input from '../Input/Input';

export type CheckboxTriState = 'checked' | 'unchecked' | 'indeterminate';
interface ListHeaderCheckboxProps {
  checkboxState?: CheckboxTriState;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const defaultProps: ListHeaderCheckboxProps = { checkboxState: 'unchecked' };

const ListHeaderCheckbox = ({
  checkboxState = defaultProps.checkboxState,
  onChange,
}: ListHeaderCheckboxProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (checkboxRef.current) {
      switch (checkboxState) {
        case 'checked':
          checkboxRef.current.checked = true;
          checkboxRef.current.indeterminate = false;
          break;
        case 'unchecked':
          checkboxRef.current.checked = false;
          checkboxRef.current.indeterminate = false;
          break;
        case 'indeterminate':
          checkboxRef.current.checked = false;
          checkboxRef.current.indeterminate = true;
          break;
        default:
          break;
      }
    }
  }, [checkboxState]);

  const title = checkboxState === 'unchecked' ? 'Select all items' : 'Deselect all items';

  return (
    <Input
      aria-label={title}
      title={title}
      className="me-2 p-2"
      innerRef={checkboxRef}
      type="checkbox"
      checked={checkboxState === 'checked'}
      onChange={onChange}
    />
  );
};

export default ListHeaderCheckbox;
