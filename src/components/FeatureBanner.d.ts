import * as React from 'react';
interface FeatureBannerProps {
  alertText?: string;
  children?: ReactNode;
  color?: string;
  subtitle: string;
  title: string;
}
declare class FeatureBanner extends React.Component<FeatureBannerProps, {}> { }
export default FeatureBanner;
