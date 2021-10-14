import { useCallback, useState } from 'react';

export type MapKey = string | number | bigint | boolean | symbol;

export default function useMap<T>(defaultValue: T[], keyMapper: (value: T) => MapKey = x => (x as any).toString()) {
  const [map, setMap] = useState(new Map(defaultValue.map((val: T) => [keyMapper(val), val])));
  const has = (value: T) => map.has(keyMapper(value));
  const add = (value: T) => {
    map.set(keyMapper(value), value);
    setMap(new Map(map));
  };
  const remove = (value: T) => {
    map.delete(keyMapper(value));
    setMap(new Map(map));
  };
  const toggle = (value: T) => {
    if (has(value)) remove(value);
    else add(value);
  };
  const clear = () => map.clear();
  const replace = useCallback((values: T[]) => {
    setMap(new Map(values ? values.map((val: T) => [keyMapper(val), val]) : null));
  }, [setMap, keyMapper]);

  return {
    map,
    has,
    add,
    remove,
    toggle,
    clear,
    replace
  };
}
