import { useCallback, useRef } from 'react';
import { useUpdate } from 'react-use';

export default function useMap<T>(defaultValue: T[], keyMapper: (value: T) => any = (x) => x) {
  const mapRef = useRef(new Map(defaultValue.map((val: T) => [keyMapper(val), val])));
  const update = useUpdate();
  const { current: map } = mapRef;

  const has = (value: T) => map.has(keyMapper(value));

  const add = (value: T) => {
    map.set(keyMapper(value), value);
    update();
    return map;
  };

  const remove = (value: T) => {
    map.delete(keyMapper(value));
    update();
    return map;
  };

  const toggle = (value: T) => {
    if (has(value)) {
      return remove(value);
    }
    return add(value);
  };

  const clear = () => {
    map.clear();
    update();
  };

  const replace = useCallback(
    (values: T[]) => {
      mapRef.current = new Map(values ? values.map((val: T) => [keyMapper(val), val]) : null);
      update();
    },
    [mapRef, keyMapper, update]
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
