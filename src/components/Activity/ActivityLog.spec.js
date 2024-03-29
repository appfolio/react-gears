import assert from 'assert';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { assertAccessibleContainer } from '../../tooling/a11yHelpers';
import Activity from './Activity';
import ActivityLog from './ActivityLog';

describe('<ActivityLog />', () => {
  it('should render each <Activity /> correctly', async () => {
    const { container } = render(
      <ActivityLog>
        <Activity date={new Date()} action="Edited" by="Jane Doe" />
        <Activity date={new Date()} action="Created" by="John Doe" />
      </ActivityLog>
    );

    assert(screen.queryByText('Edited'));
    assert(screen.queryByText('Created'));
    await assertAccessibleContainer(container);
  });

  it('should render an empty component', async () => {
    const { container } = render(<ActivityLog />);
    await assertAccessibleContainer(container);
  });
});
