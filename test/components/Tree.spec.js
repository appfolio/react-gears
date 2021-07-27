import React from 'react';
import assert from 'assert';
import { mount, shallow } from 'enzyme';

import { Tree, TreeItem } from '../../src';

describe('<Tree />', () => {
  const items = [
    { item: 'Alpha', key: 'Alpha' },
    { item: 'Bravo', key: 'Bravo' },
    { item: 'Charlie', key: 'Charlie' }
  ];

  it('renders items', () => {
    const wrapper = shallow(<Tree items={items} />);
    assert(wrapper.find(TreeItem).length, items.length);
  });

  // it('should render flush', () => {
  //   const wrapper = mount(<Tree flush items={items} />);
  //   assert(wrapper.hasClass('list-group-flush'));
  // });

  it('passes classNames to Tree', () => {
    const wrapper = mount(<Tree className='boogie' items={items} />);
    assert(wrapper.hasClass('boogie'));
  });
});
