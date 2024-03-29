import { ButtonProps } from 'reactstrap';
import * as React from 'react';

interface HasManyFieldsAddProps extends Omit<ButtonProps, 'color'> {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}
declare class HasManyFieldsAdd extends React.Component<HasManyFieldsAddProps, {}> {}
export default HasManyFieldsAdd;
