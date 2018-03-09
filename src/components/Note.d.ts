export default interface Note {
  date: Date;
  deleted: boolean;
  edited: boolean;
  editing: boolean;
  from: string;
  text: string;
}