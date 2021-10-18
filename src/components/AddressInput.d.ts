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

interface AddressInputProps {
  className?: string;
  compact?: boolean;
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
}

declare class AddressInput extends React.Component<AddressInputProps, {}> { }
export default AddressInput;
