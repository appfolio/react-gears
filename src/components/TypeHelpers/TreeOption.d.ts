export default interface TreeOption<T> {
  key: string;
  item: T;
  selected: boolean;
  expanded: boolean;
  children?: TreeOption<T>[];
}
