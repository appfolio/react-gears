import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import uniqueId from 'lodash.uniqueid';
import { Input, Label } from '../../index';

export interface FilterHeaderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  onChange?: (value: string) => void;
}

const FilterHeader = ({ value, onChange, className, id, ...props }: FilterHeaderProps) => {
  const [filterId] = useState(() => uniqueId('filter-'));
  return (
    <>
      <Label hidden for={filterId}>Filter by:</Label>
      <Input
        id={id || filterId}
        className={classNames('js-filter', className)}
        onChange={onChange && (e => onChange(e.target.value))}
        type="search"
        value={value || ''}
        {...props}
      />
    </>
  );
};

FilterHeader.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default FilterHeader;
