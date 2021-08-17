import { useState } from 'react';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';

export default function useMultiSelect<T>(initialSelection: T[] = []) {
  const [selected, setSelected] = useState(initialSelection);

  const someSelected = selected.length > 0;

  const allSelected = (rows: T[]) => rows.length > 0 && rows.length === selected.length;

  const isSelected = (value: T) => some(selected, value);

  const toggleAll = (rows: T[]) => { setSelected(allSelected(rows) ? [] : rows); };

  const toggleSelection = (value: T) => {
    const newSelection = isSelected(value)
      ? selected.filter(selectedRow => !isEqual(selectedRow, value))
      : [...selected, value];
    setSelected(newSelection);
  };

  return {
    selected,
    setSelected,
    someSelected,
    allSelected,
    isSelected,
    toggleAll,
    toggleSelection,
  };
}
