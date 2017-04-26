/* eslint-env mocha */

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import { Col, InputGroup } from 'reactstrap';

import CardContainer from '../../src/components/CardContainer.js';


describe('<CardContainer />', () => {
  context('is not expandable', () => {
    it('should be open by default', () => {
      const component = shallow(
        <CardContainer title="Open">
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 1);
    });

    it('should not click to expand', () => {
      const component = shallow(
        <CardContainer title="Open">
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 1);
      component.find(Col).simulate('click');
      assert.equal(component.find('h1').length, 1);
    });
  });

  context('is expandable', () => {
    it('should be closed by default', () => {
      const component = shallow(
        <CardContainer title="Open" expandable>
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 0);
    });

    it('should be closed when false passed as prop', () => {
      const component = shallow(
        <CardContainer title="Open" open={false} expandable>
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 0);
    });

    it('should be open when true passed as prop', () => {
      const component = shallow(
        <CardContainer title="Open" open expandable>
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 1);
    });

    it('should be open when clicked', () => {
      const component = shallow(
        <CardContainer title="Open" expandable>
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 0, 'inner block should not be visible');
      component.find(Col).simulate('click');
      assert.equal(component.find('h1').length, 1, 'inner block should be visible');
    });
  });

  context('contains searchBar', () => {
    it('should render searchBar', () => {
      const component = shallow(
        <CardContainer title="Open" searchBar>
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 1);
      assert.equal(component.find(InputGroup).length, 1);
      assert.equal(component.find({placeholder: 'Search'}).length, 1);
      assert.equal(component.find({name: 'search'}).length, 1);
    });
  });
});
