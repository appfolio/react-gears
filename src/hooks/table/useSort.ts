import { useState } from 'react';

export type Sort = {
  sortKey?: string,
  sortAscending: boolean,
  sortBy: (sortKey: string, ascending: boolean) => void
};

function useSort(key?: string, ascending: boolean = true): Sort {
  const [sortKey, setSortKey] = useState<string | undefined>(key);
  const [sortAscending, setSortAscending] = useState<boolean>(ascending);

  const sortBy = (column: string, asc: boolean) => {
    if (sortKey === column) {
      setSortAscending(asc);
    } else {
      setSortAscending(true);
    }

    setSortKey(column);
  };

  return {
    sortKey,
    sortAscending,
    sortBy
  };
}

export default useSort;
