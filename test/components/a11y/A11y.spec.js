import assert from 'assert';
import axe from 'axe-core';
import { mount } from 'enzyme';
import React from 'react';
import { Activity, ActivityLog, AddressInput, Alert } from '../../../src';

async function testComponent(element) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  mount(element, { attachTo: div });
  const { violations } = await axe.run(div);
  assert.deepStrictEqual(violations, []);

  document.body.removeChild(div);
}

describe('Accessibility Tests', () => {
  it('should be accessible for ActivityLog', async () => {
    await testComponent(
      <ActivityLog>
        <Activity date={new Date()} action="Edited" by="Jane Doe" />
        <Activity date={new Date()} action="Created" by="John Doe" />
      </ActivityLog>
    );
  });
});
