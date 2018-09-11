import assert from 'assert';
import { shallow } from 'enzyme';
import React from 'react';

import { ImageCarousel, Modal } from '../../src';

describe('<ImageCarousel />', () => {
  it('should render a modal with desired props', () => {
    const component = shallow(<ImageCarousel isOpen />);
    const modal = component.find(Modal);

    assert.strictEqual(modal.prop('backdrop'), true);
    assert.strictEqual(modal.prop('fade'), false);
    assert.strictEqual(modal.prop('isOpen'), true);
  });
});
