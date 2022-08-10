import { useState } from 'react';

export default function useSet(defaultValue: any) {
  const [set, setSet] = useState(new Set(defaultValue));
  const has = (value: any) => set.has(value);
  const add = (value: any) => {
    set.add(value);
    setSet(new Set(set));
  };
  const remove = (value: any) => {
    set.delete(value);
    setSet(new Set(set));
  };
  const toggle = (value: any) => {
    if (has(value)) {
      remove(value);
    } else {
      add(value);
    }
  };
  const clear = () => set.clear();

  return [set, has, add, remove, toggle, clear, (values: any) => setSet(new Set(values))];
}
