interface FilterType {
  label: string;
  value: string;
  removable?: boolean;
}

interface FilterListPropTypes {
  className?: string;
  filters: FilterType[];
  maxWidth?: number;
  onRemove: (filter: FilterType) => void;
}
declare const FilterList: React.StatelessComponent<FilterListPropTypes>;
export default FilterList;
