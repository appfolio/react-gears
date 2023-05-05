import { useRef } from 'react';

// Returns a ref that always has the last provided value.
// This is useful for cases where you need to access the
// latest value of a prop inside a callback, e.g. a useEffect callback.
export function useLatestRef<T>(value: T) {
  const ref = useRef(value);
  ref.current = value;
  return ref;
}

// Creates a stable function that always calls the last version of the provided function.
// It's mainly used for when useEffect subscribes to something and passes a callback.
// The changing of that callback would normally cause the effect to re-run, unsubscribing and resubscribing.
// This hook prevents that from happening while keeping the callback up to date.
export function useLatestFn<T extends (...args: any[]) => any>(fn: T) {
  const ref = useLatestRef(fn);
  return useRef((...args: any[]) => ref.current(...args)).current as T;
}
