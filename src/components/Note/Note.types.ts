export interface Note {
  title?: string;
  date?: Date;
  deleted?: boolean;
  edited?: boolean;
  editing?: boolean;
  from?: string;
  errors?: string;
  text: string;
}
