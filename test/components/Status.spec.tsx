import React from 'react';
import { render, screen } from '@testing-library/react';
import { assertAccessible } from '../a11yHelpers';

import { Status } from '../../src';

describe('<Status />', () => {
  it('should be accessible', async () => {
    await assertAccessible(<Status />);
  });

  it('should take a type option', () => {
    const icon = render(<Status type="info" />).getByTestId('status-icon');
    expect(icon).toHaveClass('text-info', 'fa-info-circle');
  });

  it('should accept none as an option', () => {
    const icon = render(<Status type="none" />).getByTestId('status-icon');
    expect(icon).toHaveClass('text-muted', 'fa-circle');
  });

  it('should default to the "none" type', () => {
    const icon = render(<Status />).getByTestId('status-icon');
    expect(icon).toHaveClass('text-muted', 'fa-circle');
  });

  it('should take a type option and classnames', () => {
    const icon = render(<Status type="muted" className="mx-5" />).getByTestId(
      'status-icon'
    );
    expect(icon).toHaveClass('text-muted', 'mx-5');
  });

  it('should take custom icon props', () => {
    const icon = render(<Status type="success" size="lg" />).getByTestId(
      'status-icon'
    );
    expect(icon).toHaveClass('fa-lg');
  });

  describe('semantic text', () => {
    it('should have semantic text by default', () => {
      render(<Status type="success" />);

      expect(screen.queryByTitle('Completed')).toBeInTheDocument();
      expect(screen.queryByText(/Completed/)).toBeInTheDocument();
    });

    it('should accept text as an argument', () => {
      render(<Status type="success" text="Great success" />);

      expect(screen.queryByTitle('Great success')).toBeInTheDocument();
      expect(screen.queryByText(/Great success/)).toBeInTheDocument();
    });

    it('should accept mapTypeToText as an argument', () => {
      render(
        <Status type="success" mapTypeToText={{ success: 'Great success' }} />
      );

      expect(screen.queryByTitle('Great success')).toBeInTheDocument();
      expect(screen.queryByText(/Great success/)).toBeInTheDocument();
    });
  });
});
