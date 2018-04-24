import CSSModule from './CSSModule';

type Placement
  = 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top left'
  | 'top center'
  | 'top right'
  | 'right top'
  | 'right middle'
  | 'right bottom'
  | 'bottom right'
  | 'bottom center'
  | 'bottom left'
  | 'left top'
  | 'left middle'
  | 'left bottom';

export default interface Props {
  placement?: Placement;
  target: string;
  isOpen?: boolean;
  tether?: Tether.ITetherOptions;
  className?: string;
  cssModule?: CSSModule;
  toggle?: () => void;
}