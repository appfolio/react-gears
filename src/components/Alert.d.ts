
interface AlertProps {
  children: (string | JSX.Element)[] | string | JSX.Element;
  color?: string;
  dismissible?: boolean;
  icon?: boolean;
  className?: string;
}

declare const Alert: React.StatelessComponent<AlertProps>;
export default Alert;
