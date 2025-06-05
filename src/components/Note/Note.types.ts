import { type ReactNode } from 'react';

export interface Note {
  title?: string;
  date?: Date;
  deleted?: boolean;
  edited?: boolean;
  editing?: boolean;
  from?: ReactNode;
  errors?: string;
  text: string;
}
