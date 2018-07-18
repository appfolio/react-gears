export default interface Note {
  date?: Date;
  deleted?: boolean;
  edited?: boolean;
  editing?: boolean;
  from?: string;
  error?: string;
  text: string;
}
