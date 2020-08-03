import { ButtonProps } from 'reactstrap/lib/Button';
import * as React from 'react';

interface HasManyFieldsAddProps extends Omit<ButtonProps,'color'> {
  className?: string;
  children: ReactNode;
  disabled?: boolean;
}
declare class HasManyFieldsAdd extends React.Component<HasManyFieldsAddProps, {}> { }
export default HasManyFieldsAdd;
