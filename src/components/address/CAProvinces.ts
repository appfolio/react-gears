import { formats } from './AddressFormats';

const states = formats.CA.states.map(({ name: label, code: value }: { name: string, code: string }) => {
  return {
    label,
    value
  };
});

export default states;
