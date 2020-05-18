import assert from 'assert';
import axe from 'axe-core';
import { render } from '@testing-library/react';


export async function assertAccessibleContainer(container) {
  const { violations } = await axe.run(container);
  assert.deepStrictEqual(violations, []);
}

export async function assertAccessible(element) {
  const { container } = render(element);
  assertAccessibleContainer(container);
}
