import * as React from 'react';
interface HasManyValue {
  [key: string]: string;
}
interface HasManyFieldsPropTypes {
  blank?: any;
  defaultValue?: HasManyValue[];
  disabled?: boolean;
  errors?: any[];
  label: string;
  onAdd?: () => void;
  onRemove?: (index: number) => void;
  onUpdate?: (newVal: HasManyValue) => void;
  onChange?: (val: HasManyValue) => void;
  template: any;
  minimumRows?: number;
  maximumRows?: number;
  reorderable?: boolean;
  value?: HasManyValue[];
  className?: string;
}
declare class HasManyFields extends React.Component<HasManyFieldsPropTypes, {}> {}
export default HasManyFields;
