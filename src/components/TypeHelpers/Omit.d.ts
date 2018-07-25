// from https://github.com/Microsoft/TypeScript/wiki/What%27s-new-in-TypeScript#example-11
type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
export default Omit;
