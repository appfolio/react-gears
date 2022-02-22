import * as React from 'react';
interface FeatureBannerProps {
  alertText?: string;
  children?: React.ReactNode;
  color?: string;
  subtitle: React.ReactNode;
  title: string;
}
declare class FeatureBanner extends React.Component<FeatureBannerProps, {}> {}
export default FeatureBanner;
