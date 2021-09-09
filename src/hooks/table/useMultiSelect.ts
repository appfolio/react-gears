import { useState } from 'react';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';

export default function useMultiSelect<T>(initialSelection: T[] = []) {
  const [selected, setSelected] = useState(initialSelection);

  const someSelected = selected.length > 0;

  const isSelected = (value: T | T[]) => {
    if (Array.isArray(value)) {
      const notSelected = value.filter(x => !some(selected, x));

      return value.length !== 0 && notSelected.length === 0;
    }
    return some(selected, value);
  };

  const toggleSelection = (value: T | T[]) => {
    if (Array.isArray(value)) {
      if (isSelected(value)) {
        const newSelected = selected.filter(x => !some(value, x));
        setSelected(newSelected);
      } else {
        const notSelected = value.filter(x => !some(selected, x));
        setSelected([...selected, ...notSelected]);
      }
    } else {
      const newSelection = isSelected(value)
        ? selected.filter(selectedRow => !isEqual(selectedRow, value))
        : [...selected, value];
      setSelected(newSelection);
    }
  };

  return {
    selected,
    setSelected,
    someSelected,
    isSelected,
    toggleSelection,
  };
}
