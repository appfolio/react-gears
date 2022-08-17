/**
 * Guard for checking if an object has a property.
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
 */
export function hasOwn<T extends {}, K>(obj: T, key: K): key is K & keyof T {
  return Object.prototype.hasOwnProperty.call(obj, key as any);
}
