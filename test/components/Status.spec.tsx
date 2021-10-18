import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import { assertAccessible } from '../a11yHelpers';

import { Icon, Status } from '../../src';

describe('<Status />', () => {
  it('should be accessible', async () => {
    await assertAccessible(<Status />);
  });

  it('should take a type option', () => {
    const icon = shallow(<Status type='info' />).find(Icon);
    assert.strictEqual(icon.prop('name'), 'info-circle');
    assert.strictEqual(icon.prop('className'), 'text-info');
  });

  it('should accept none as an option', () => {
    const icon = shallow(<Status type='none' />).find(Icon);
    assert.strictEqual(icon.prop('name'), 'circle');
    assert.strictEqual(icon.prop('className'), 'text-muted');
  });

  it('should default to the "none" type', () => {
    const icon = shallow(<Status />).find(Icon);
    assert.strictEqual(icon.prop('name'), 'circle');
    assert.strictEqual(icon.prop('className'), 'text-muted');
  });

  it('should take a type option and classnames', () => {
    const icon = shallow(<Status type='muted' className='mx-5' />).find(Icon);
    assert.strictEqual(icon.prop('className'), 'text-muted mx-5');
  });

  it('should take custom icon props', () => {
    const icon = shallow(<Status type='success' size='lg' />).find(Icon);
    assert.strictEqual(icon.prop('size'), 'lg');
  });
});
