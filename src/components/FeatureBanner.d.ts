interface FeatureBannerPropTypes {
  alertText?: string;
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  subtitle: string;
  title: string;
}
declare const FeatureBanner: React.StatelessComponent<FeatureBannerPropTypes>;
export default FeatureBanner;
