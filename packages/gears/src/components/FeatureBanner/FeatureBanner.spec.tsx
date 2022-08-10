import { render } from '@testing-library/react';
import React from 'react';
import FeatureBanner from './FeatureBanner';

const commonProps = {
  title: 'FeatureBannerTitle',
  subtitle: 'FeatureBannerSubtitle',
};

describe('<FeatureBanner />', () => {
  it('renders correctly', () => {
    const { queryByText } = render(<FeatureBanner {...commonProps} />);

    expect(queryByText('FeatureBannerTitle')).not.toBeNull();
    expect(queryByText('FeatureBannerSubtitle')).not.toBeNull();
  });

  it('renders default alert text', () => {
    const { queryAllByText } = render(<FeatureBanner {...commonProps} />);
    const alertText = queryAllByText('new');

    expect(alertText.length).toBe(2);
  });

  it('renders the supplied alert text', () => {
    const { queryAllByText } = render(<FeatureBanner {...commonProps} alertText="AlertText" />);
    const alertText = queryAllByText('AlertText');

    expect(alertText.length).toBe(2);
  });

  it('renders children', () => {
    const { queryByText } = render(
      <FeatureBanner {...commonProps}>
        <span>FeatureBannerChildElement</span>
      </FeatureBanner>
    );

    expect(queryByText('FeatureBannerChildElement')).not.toBeNull();
  });
});
