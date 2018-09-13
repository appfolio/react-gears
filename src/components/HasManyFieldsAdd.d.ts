import { ButtonProps } from 'reactstrap/lib/Button';
import Omit from './TypeHelpers/Omit';
import * as React from 'react';

interface HasManyFieldsAddProps extends Omit<ButtonProps,'color'> {
  className?: string;
  children: (JSX.Element | string) | (JSX.Element | string)[];
  disabled?: boolean;
}
declare class HasManyFieldsAdd extends React.Component<HasManyFieldsAddProps, {}> { }
export default HasManyFieldsAdd;
