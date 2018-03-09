interface InfoBoxPropTypes {
  className?: string;
  color?: string;
  children: (JSX.Element | string) | (JSX.Element | string)[];
  icon?: string;
  title?: string;
  vertical: boolean;
}
declare const InfoBox: React.StatelessComponent<InfoBoxPropTypes>;
export default InfoBox;
