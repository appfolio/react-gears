export interface Option<T> {
  item: T;
  selected: boolean;
  expanded: boolean;
  children?: Option<T>[];
  key?: string | number;
}
