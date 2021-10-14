import { renderHook, act } from '@testing-library/react-hooks';
import assert from 'assert';
import useMap from '../../src/hooks/useMap';

describe('useMap', () => {
  const initial = ['Alpha', 'Bravo'];
  const initialAsObjects = initial.map((item) => {
    return { id: item, name: `${item} Item` };
  });

  it('should store a map', () => {
    const { result } = renderHook(() => useMap(initial));

    assert.deepStrictEqual(result.current.map, new Map(initial.map(val => [val, val])));
  });

  it('should store a map of objects using keyMapper', () => {
    const { result } = renderHook(() => useMap(initialAsObjects, item => item.id));

    assert.deepStrictEqual(result.current.map, new Map([['Alpha', initialAsObjects[0]], ['Bravo', initialAsObjects[1]]]));
  });

  describe('add', () => {
    it('should add an item', () => {
      const { result } = renderHook(() => useMap(initial));

      act(() => {
        result.current.add('Charlie');
      });

      assert.deepStrictEqual(result.current.map, new Map([['Alpha', 'Alpha'], ['Bravo', 'Bravo'], ['Charlie', 'Charlie']]));
    });
  });

  describe('has', () => {
    it('should check for existence of an item', () => {
      const { result } = renderHook(() => useMap(initial));
      assert(result.current.has('Alpha'));
      assert(!result.current.has('Charlie'));
    });

    it('should check for existence of an object using keyMapper', () => {
      const { result } = renderHook(() => useMap(
        initialAsObjects,
        item => item.id
      ));
      // Clone item to ensure referential equality isn't required
      assert(result.current.has({ ...initialAsObjects[0] }));
    });
  });


  describe('remove', () => {
    it('should remove an item', () => {
      const { result } = renderHook(() => useMap(initial));

      act(() => {
        result.current.remove('Alpha');
      });

      assert.deepStrictEqual(result.current.map, new Map([['Bravo', 'Bravo']]));
    });

    it('should remove an object using keyMapper', () => {
      const { result } = renderHook(() => useMap(
        initialAsObjects,
        item => item.id
      ));

      act(() => {
        // Clone item to ensure referential equality isn't required
        result.current.remove({ ...initialAsObjects[0] });
      });

      assert.deepStrictEqual(result.current.map, new Map([['Bravo', { ...initialAsObjects[1] }]]));
    });
  });

  describe('toggle', () => {
    it('should toggle existence of an item', () => {
      const { result } = renderHook(() => useMap(initial));

      act(() => {
        result.current.toggle('Alpha');
        result.current.toggle('Charlie');
      });

      assert.deepStrictEqual(result.current.map, new Map([['Bravo', 'Bravo'], ['Charlie', 'Charlie']]));
    });
  });

  describe('clear', () => {
    it('should clear map', () => {
      const { result } = renderHook(() => useMap(initial));

      act(() => {
        result.current.clear();
      });

      assert.deepStrictEqual(result.current.map, new Map());
    });
  });

  describe('replace', () => {
    it('should replace items in map', () => {
      const { result } = renderHook(() => useMap(initial));
      const replacedValues = ['Charlie', 'Delta', 'Echo'];

      act(() => {
        result.current.replace(replacedValues);
      });

      assert.deepStrictEqual(result.current.map, new Map(replacedValues.map(val => [val, val])));
    });
  });
});
