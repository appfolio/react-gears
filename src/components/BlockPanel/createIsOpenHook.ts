import { useState } from 'react';
import { createLocalStorageStateHook } from 'use-local-storage-state';

function useIsOpen(id?: string) {
  if (id) {
    return createLocalStorageStateHook(`BlockPanel-open-${id}`, false);
  }

  return useState;
}

export default useIsOpen;
