import * as React from 'react';
import { DropdownItemProps } from 'reactstrap/lib/DropdownItem';

// react-gears types v4 incorrectly exclues the active boolean attribute
interface PatchedDropdownItemProps extends DropdownItemProps{
  active?: boolean;
}

declare class DropdownItem extends React.Component<PatchedDropdownItemProps, {}> { }
export default DropdownItem;
