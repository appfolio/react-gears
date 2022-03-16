import toPairs from 'lodash.topairs';
import { formats } from './AddressFormats';

const countries = toPairs(formats).map(([value, { name: label }]) => {
  return {
    label,
    value,
  };
});

export default countries;
