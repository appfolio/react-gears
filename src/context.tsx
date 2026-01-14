import React from 'react';
import { UniqueIdContext } from './util/uniqueId';

interface GearsContextProviderProps {
  children: React.ReactNode;
  uniqueIdCounts: Record<string, number>;
}

export function GearsContextProvider({ children, uniqueIdCounts }: GearsContextProviderProps) {
  return <UniqueIdContext.Provider value={uniqueIdCounts}>{children}</UniqueIdContext.Provider>;
}
