import { useState } from 'react';
import { createLocalStorageStateHook } from 'use-local-storage-state';

function useIsOpen(id?: string, open?: boolean) {
  if (id) {
    return createLocalStorageStateHook(`BlockPanel-open-${id}`, open);
  }

  return useState;
}

export default useIsOpen;
