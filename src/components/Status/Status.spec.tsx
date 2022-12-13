import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';
import { assertAccessible } from '../../tooling/a11yHelpers';
import Icon from '../Icon/Icon';
import Status from './Status';

describe('<Status />', () => {
  it('should be accessible', async () => {
    await assertAccessible(<Status />);
  });

  it('should take a type option', () => {
    const icon = shallow(<Status type="info" />).find(Icon);
    assert.strictEqual(icon.prop('name'), 'circle-info');
    assert.strictEqual(icon.prop('className'), 'text-info');
  });

  it('should accept none as an option', () => {
    const icon = shallow(<Status type="none" />).find(Icon);
    assert.strictEqual(icon.prop('name'), 'circle');
    assert.strictEqual(icon.prop('className'), 'text-muted');
  });

  it('should default to the "none" type', () => {
    const icon = shallow(<Status />).find(Icon);
    assert.strictEqual(icon.prop('name'), 'circle');
    assert.strictEqual(icon.prop('className'), 'text-muted');
  });

  it('should take a type option and classnames', () => {
    const icon = shallow(<Status type="muted" className="mx-5" />).find(Icon);
    assert.strictEqual(icon.prop('className'), 'text-muted mx-5');
  });

  it('should take custom icon props', () => {
    const icon = shallow(<Status type="success" size="lg" />).find(Icon);
    assert.strictEqual(icon.prop('size'), 'lg');
  });
});
