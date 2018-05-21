import * as React from 'react';
interface FeatureBannerProps {
  alertText?: string;
  children?: (JSX.Element | string) | (JSX.Element | string)[];
  subtitle: string;
  title: string;
}
declare class FeatureBanner extends React.Component<FeatureBannerProps, {}> { }
export default FeatureBanner;
