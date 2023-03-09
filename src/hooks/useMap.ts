import { useCallback, useState } from 'react';

export default function useMap<T>(defaultValue: T[], keyMapper: (value: T) => any = (x) => x) {
  const [map, setMap] = useState(new Map(defaultValue.map((val: T) => [keyMapper(val), val])));
  const has = (value: T) => map.has(keyMapper(value));
  const add = (value: T) => {
    map.set(keyMapper(value), value);

    const newMap = new Map(map);
    setMap(newMap);

    return newMap;
  };
  const remove = (value: T) => {
    map.delete(keyMapper(value));

    const newMap = new Map(map);
    setMap(newMap);

    return newMap;
  };
  const toggle = (value: T) => {
    if (has(value)) {
      return remove(value);
    }
    return add(value);
  };
  const clear = () => map.clear();
  const replace = useCallback(
    (values: T[]) => {
      setMap(new Map(values ? values.map((val: T) => [keyMapper(val), val]) : null));
    },
    [setMap, keyMapper]
  );

  return {
    map,
    has,
    add,
    remove,
    toggle,
    clear,
    replace,
  };
}
