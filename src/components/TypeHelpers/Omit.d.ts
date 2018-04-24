type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}
type Diff<T extends string, U extends string> = ({[P in T]: P } & {[P in U]: never } & { [x: string]: never })[T];
type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;
export default Omit;
