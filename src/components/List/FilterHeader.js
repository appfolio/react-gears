import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Input, Label } from '../../index';

const FilterHeader = ({ value, onChange, ...props }) => {
  const [filterId] = useState(() => uniqueId('filter-'));
  return (
    <>
      <Label hidden for={filterId}>Filter by:</Label>
      <Input
        id={filterId}
        className="js-filter"
        onChange={e => onChange(e.target.value)}
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
