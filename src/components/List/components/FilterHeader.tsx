import classNames from 'classnames';
import React, { useState } from 'react';
import { getUniqueId } from '../../../util/uniqueId';
import Input from '../../Input/Input';
import Label from '../../Label/Label';

export interface FilterHeaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  onChange?: (value: string) => void;
}

const FilterHeader = ({ value, onChange, className, id, ...props }: FilterHeaderProps) => {
  const [filterId] = useState(() => getUniqueId('filter-', 1));
  return (
    <>
      <Label hidden for={filterId}>
        Filter by:
      </Label>
      <Input
        id={id || filterId}
        className={classNames('js-filter', className)}
        onChange={onChange && ((e) => onChange(e.target.value))}
        type="search"
        value={value || ''}
        {...props}
      />
    </>
  );
};

export default FilterHeader;
