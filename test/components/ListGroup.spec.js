import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';

import { ListGroup, ListGroupItem } from '../../src';

describe('<ListGroup />', () => {
  it('passes children', () => {
    const wrapper = shallow(
      <ListGroup>
        <ListGroupItem>Alpha</ListGroupItem>
        <ListGroupItem>Bravo</ListGroupItem>
        <ListGroupItem>Charlie</ListGroupItem>
      </ListGroup>
    );
    assert(wrapper.find(ListGroupItem).length, 3);
  });

  it('supports striped prop', () => {
    const wrapper = shallow(<ListGroup striped />);
    assert(wrapper.hasClass('list-group-striped'));
  });

  it('passes classNames to ListGroup', () => {
    let wrapper = shallow(<ListGroup className="boogie" />);
    assert(wrapper.hasClass('boogie'));

    wrapper = shallow(<ListGroup striped className="boogie" />);
    assert(wrapper.hasClass('boogie'));
    assert(wrapper.hasClass('list-group-striped'));
  });
});
