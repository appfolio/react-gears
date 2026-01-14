import { createContext, useContext, useRef } from 'react';

const idCounts: Record<string, number> = {};

export const UniqueIdContext = createContext(idCounts);

export function useUniqueId(idPrefix: string, startingCount = 0) {
  const context = useContext(UniqueIdContext);
  if (context[idPrefix] === undefined || context[idPrefix] > Number.MAX_SAFE_INTEGER) {
    context[idPrefix] = startingCount;
  }
  const idRef = useRef('');
  if (!idRef.current) {
    idRef.current = `${idPrefix}${context[idPrefix]++}`;
  }
  return idRef.current;
}
