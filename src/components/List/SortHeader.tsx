import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';
import { Button, Col, CustomInput, Icon, Label } from '../../index';

interface SortOption {
  label: string;
  value: string | string[];
}

export interface SortHeaderProps {
  ascending?: boolean,
  onChangeAscending: (asc: boolean) => void,
  onChangeProperty: (sortBy: SortOption['value']) => void,
  sortByLabel: string,
  sortOptions: SortOption[],
  sortProperty?: SortOption['value'],
}

const SortHeader = ({ ascending, sortByLabel, sortOptions, sortProperty, onChangeAscending, onChangeProperty }: SortHeaderProps) => {
  const [sortId] = useState(() => uniqueId('sort-'));
  return (
    <Col xs="12" sm="auto" className="ml-sm-auto mr-n1 pt-2 pt-sm-0 d-flex align-items-center js-sort-header">
      <Label className="m-0 pr-2 text-nowrap col-form-label" for={sortId}>{sortByLabel}</Label>
      <CustomInput
        id={sortId}
        type="select"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value;
          onChangeProperty(value && value.includes(',') ? value.split(',') : value);
        }}
        value={Array.isArray(sortProperty) ? sortProperty.join(',') : sortProperty}
      >
        {sortProperty === undefined && <option value="">--</option>}
        {sortOptions.map(({ label, value }) => (
          <option
            key={value.toString()}
            value={Array.isArray(value) ? value.join(',') : value}
          >
            {label}
          </option>
        ))}
      </CustomInput>
      {sortProperty && (
        <Button
          className="ml-1 pl-2 pr-0"
          color="link"
          disabled={!sortProperty}
          id="sort-button"
          onClick={() => onChangeAscending(!ascending)}
        >
          <Icon name={ascending ? 'sort-amount-up-alt' : 'sort-amount-down'} size="lg" />
          <span className="sr-only">Change Sort Direction</span>
        </Button>
      )}
    </Col>
  );
};

SortHeader.propTypes = {
  ascending: PropTypes.bool.isRequired,
  onChangeAscending: PropTypes.func.isRequired,
  onChangeProperty: PropTypes.func.isRequired,
  sortByLabel: PropTypes.string.isRequired,
  sortOptions: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  sortProperty: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
};

export default SortHeader;
