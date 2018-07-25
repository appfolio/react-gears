import * as React from 'react';
import DropdownItemProps from './TypeHelpers/props/DropdownItem';

// react-gears types v4 incorrectly exclues the active boolean attribute
interface PatchedDropdownItemProps extends DropdownItemProps{
  active?: boolean;
}

declare class DropdownItem extends React.Component<PatchedDropdownItemProps, {}> { }
export default DropdownItem;
