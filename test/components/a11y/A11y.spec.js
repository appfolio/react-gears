import assert from 'assert';
import axe from 'axe-core';
import { render, cleanup } from '@testing-library/react';
import React from 'react';
import { Activity, ActivityLog, AddressInput, Alert } from '../../../src';

describe('Accessibility Tests', () => {
  afterEach(cleanup);

  it('should be accessible for ActivityLog', async () => {
    const { container } = render(
      <ActivityLog>
        <Activity date={new Date()} action="Edited" by="Jane Doe" />
        <Activity date={new Date()} action="Created" by="John Doe" />
      </ActivityLog>
    );
    const { violations } = await axe.run(container);
    assert.deepStrictEqual(violations, []);
  });
  });
});
