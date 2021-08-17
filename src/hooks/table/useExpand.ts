import { useState } from 'react';
import some from 'lodash.some';
import isEqual from 'lodash.isequal';

export default function useExpand<T>(initialExpanded: T[] = []) {
  const [expanded, setExpanded] = useState(initialExpanded);

  const isExpanded = (value: T) => some(expanded, value);

  const toggleExpanded = (value: T) => {
    const newExpanded = some(expanded, value)
      ? expanded.filter(expandedRow => !isEqual(expandedRow, value))
      : [...expanded, value];
    setExpanded(newExpanded);
  };

  return {
    expanded,
    setExpanded,
    isExpanded,
    toggleExpanded,
  };
}
