import React, { useState } from 'react';
import uniqueId from 'lodash.uniqueid';
import Input from '../Input';
import Label from '../Label';

interface FilterHeaderProps {
  value?: string,
  onChange: (value: string) => void,
}

const FilterHeader = ({ value, onChange, ...props }: FilterHeaderProps) => {
  const [filterId] = useState(() => uniqueId('filter-'));
  return (
    <>
      <Label hidden for={filterId}>Filter by:</Label>
      <Input
        id={filterId}
        onChange={e => onChange(e.target.value)}
        type="search"
        value={value || ''}
        {...props}
      />
    </>
  );
};

FilterHeader.displayName = 'FilterHeader';

export default FilterHeader;
