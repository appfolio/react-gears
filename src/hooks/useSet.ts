import { useState } from 'react';

export default function useSet<T>(defaultValue: T[]) {
  const [set, setSet] = useState(new Set<T>(defaultValue));
  const has = (value: T) => set.has(value);
  const add = (value: T) => {
    set.add(value);
    setSet(new Set(set));
  };
  const remove = (value: T) => {
    set.delete(value);
    setSet(new Set(set));
  };
  const toggle = (value: T) => {
    if (has(value)) remove(value);
    else add(value);
  };
  const clear = () => set.clear();

  return [
    set,
    has,
    add,
    remove,
    toggle,
    clear,
    (values: T[]) => setSet(new Set(values))
  ] as const;
}
