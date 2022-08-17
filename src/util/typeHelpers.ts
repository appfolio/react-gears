/**
 * Gets keys of the object that partially match the given type.
 *
 * KeysByType<
 *   {
 *     a: string,
 *     b: number,
 *     c: string | number
 *   },
 *   number
 * >
 * Result: "b" | "c"
 */
export type KeysByType<T, U> = {
  [K in keyof T]-?: T[K] & U extends never ? never : K;
}[keyof T];

type ExactMatch<T, U, V> = [T] extends [U] ? ([U] extends [T] ? V : never) : never;

type KeysByExactType<T, U> = { [K in keyof T]-?: ExactMatch<T[K], U, K> }[keyof T];

/**
 * Gets keys of the object that exactly match the given types.
 *
 * KeysByExactTypes<
 *   {
 *     a: string,
 *     b: number,
 *     c: string | number
 *   },
 *   [string, number]
 * >
 * Result: "a" | "b"
 */
export type KeysByExactTypes<T, U extends unknown[]> = U extends [infer I, ...infer A]
  ? KeysByExactType<T, I> | KeysByExactTypes<T, A>
  : never;

// Similar to Pick but by type instead of key.
// https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
export type PickByType<T, U> = Pick<T, KeysByType<T, U>>;
export type PickByExactTypes<T, U extends unknown[]> = Pick<T, KeysByExactType<T, U>>;

// Similar to Omit but by type instead of key.
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
export type OmitByType<T, U> = Omit<T, KeysByType<T, U>>;
export type OmitByExactTypes<T, U extends unknown[]> = Omit<T, KeysByExactType<T, U>>;

export type MixinPropTypes<ComponentType, PropsType> = ComponentType & {
  defaultProps: Partial<PropsType>;
};
