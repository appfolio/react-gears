import { useEffect, useRef } from 'react';
import { useLatestFn, useLatestRef } from './useLatest';

// Returns a callback ref to be used on an element.
// The callback will be called every `intervalMs` milliseconds with the element as an argument.
export function useIntervalRef<T extends Element>(callback: (el: T) => any, intervalMs = 200) {
  const elRef = useRef<T>();
  const timeoutRef = useRef<number>();
  const intervalMsRef = useLatestRef(intervalMs);
  const cb = useLatestFn(callback);

  const cleanup = () => clearTimeout(timeoutRef.current);
  const runInterval = () => {
    cb(elRef.current!);
    if (process.env.NODE_ENV !== 'test') {
      timeoutRef.current = window.setTimeout(runInterval, intervalMsRef.current);
    }
  };

  useEffect(() => cleanup, []);

  return (el: T | null) => {
    if (el && elRef.current !== el) {
      elRef.current = el;
      cleanup();
      runInterval();
    }
  };
}
