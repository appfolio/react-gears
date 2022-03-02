import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';
import Dummy from '../../src/components/Dummy';

describe('thing', () => {
  it('can mount', () => {
    const wrapper = mount(<Dummy name="Janr" expanded={[]} />);
    wrapper.setProps({ expanded: ['foo', 'bar'] });
    assert(wrapper);
  });
});
