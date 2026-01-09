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

// Similar to Omit but by type instead of key.
// https://www.typescriptlang.org/docs/handbook/utility-types.html#omittype-keys
export type OmitByType<T, U> = Omit<T, KeysByType<T, U>>;

export type MixinPropTypes<ComponentType, PropsType> = ComponentType & {
  defaultProps: Partial<PropsType>;
};
