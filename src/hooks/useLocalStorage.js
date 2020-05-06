import { useMemo } from 'react';
import createPersistedState from 'use-persisted-state';

function useLocalStorage(key, value) {
  const usePersistedState = useMemo(() => createPersistedState(key), [key]);

  return usePersistedState(value);
}

export default useLocalStorage;
