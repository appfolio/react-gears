export default interface Note {
  title?: string;
  date: Date;
  deleted?: boolean;
  edited?: boolean;
  editing?: boolean;
  from?: string;
  error?: string;
  text: string;
}
