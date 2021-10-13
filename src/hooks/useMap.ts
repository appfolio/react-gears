import { useCallback, useState } from 'react';

export default function useMap(defaultValue: any, keyMapper: (value: any) => string | number | bigint | boolean | symbol = x => x) {
  const [map, setMap] = useState(new Map(defaultValue.map((val: any) => [keyMapper(val), val])));
  const has = (value: any) => map.has(keyMapper(value));
  const add = (value: any) => {
    map.set(keyMapper(value), value);
    setMap(new Map(map));
  };
  const remove = (value: any) => {
    map.delete(keyMapper(value));
    setMap(new Map(map));
  };
  const toggle = (value: any) => {
    if (has(value)) remove(value);
    else add(value);
  };
  const clear = () => map.clear();
  const replace = useCallback((values: any) => {
    setMap(new Map(values ? values.map((val: any) => [keyMapper(val), val]) : null))
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
