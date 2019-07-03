import toPairs from 'lodash.topairs';
import { formats } from './Formats';

const countries = toPairs(formats).map(([value, { name: label }]) => {
  return {
    label,
    value
  };
});

export default countries;
