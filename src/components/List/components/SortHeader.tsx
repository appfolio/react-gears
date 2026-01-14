import React from 'react';
import { useUniqueId } from '../../../util/uniqueId';
import Button from '../../Button/Button';
import Icon from '../../Icon/Icon';
import Input from '../../Input/Input';
import Label from '../../Label/Label';
import Col from '../../Layout/Col';

interface SortOption {
  label: string;
  value: string | string[];
}

export interface SortHeaderProps {
  ascending?: boolean;
  onChangeAscending: (asc: boolean) => void;
  onChangeProperty: (sortBy: SortOption['value']) => void;
  sortByLabel: string;
  sortOptions: SortOption[];
  sortProperty?: SortOption['value'];
}

const SortHeader = ({
  ascending,
  sortByLabel,
  sortOptions,
  sortProperty,
  onChangeAscending,
  onChangeProperty,
}: SortHeaderProps) => {
  const sortId = useUniqueId('sort-', 1);
  return (
    <Col
      xs="12"
      sm="auto"
      className="ms-sm-auto me-n1 pt-2 pt-sm-0 d-flex align-items-center js-sort-header"
    >
      <Label className="m-0 pe-2 text-nowrap col-form-label" for={sortId}>
        {sortByLabel}
      </Label>
      <Input
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
          <option key={value.toString()} value={Array.isArray(value) ? value.join(',') : value}>
            {label}
          </option>
        ))}
      </Input>
      {sortProperty && (
        <Button
          className="ms-1 ps-2 pe-0"
          color="link"
          disabled={!sortProperty}
          id="sort-button"
          onClick={() => onChangeAscending(!ascending)}
        >
          <Icon name={ascending ? 'arrow-up' : 'arrow-down'} size="lg" />
          <span className="sr-only">Change Sort Direction</span>
        </Button>
      )}
    </Col>
  );
};

export default SortHeader;
