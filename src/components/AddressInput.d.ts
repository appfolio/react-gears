import * as React from 'react';

interface AddressInterface {
  address1?: string;
  address2?: string;
  city?: string;
  state?: string;
  postal?: string;
  countryCode?: string;
}

type AddressNames = keyof AddressInterface;

interface ColWidthInterface {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface AddressInputProps {
  className?: string;
  defaultValue?: AddressInterface;
  disabled?: boolean;
  error?: AddressInterface;
  id?: string;
  labels?: AddressInterface;
  onBlur?: (inputName: AddressNames) => void;
  onChange?: (inputName: AddressNames) => void;
  showCountry?: boolean;
  showLabels?: boolean;
  value?: AddressInterface;
  width?: {
    city: ColWidthInterface;
    state: ColWidthInterface;
    postal: ColWidthInterface;
  };
}

declare class AddressInput extends React.Component<AddressInputProps, {}> { }
export default AddressInput;
