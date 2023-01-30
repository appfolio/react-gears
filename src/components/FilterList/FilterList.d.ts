import * as React from 'react';

interface FilterType {
  label: string;
  value: string;
  removable?: boolean;
  [index: string]: any;
}

interface FilterListProps {
  className?: string;
  filters: FilterType[];
  maxWidth?: number;
  onRemove: (filter: FilterType) => void;
}

declare class FilterList extends React.Component<FilterListProps, {}> {}
export default FilterList;
