import { render, screen } from '@testing-library/react';
import React from 'react';
import Progress from './Progress';

describe('<Progress />', () => {
  it('should render with the correct default props', () => {
    render(<Progress />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('progress-bar-animated');
  });

  it('should render with the correct default props', () => {
    render(<Progress animated={false} />);
    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).not.toHaveClass('progress-bar-animated');
  });
});
