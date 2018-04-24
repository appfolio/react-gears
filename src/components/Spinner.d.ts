import Omit from './TypeHelpers/Omit';

interface SpinnerPropTypes extends Omit<React.SVGAttributes<SVGElement>, 'width' | 'height' | 'version'> {
  className?: string;
  color?: string;
  size?: string;
}
declare const Spinner: React.StatelessComponent<SpinnerPropTypes>;
export default Spinner;
