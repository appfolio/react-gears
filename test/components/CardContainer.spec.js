/* eslint-env mocha */

import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import { Col } from 'reactstrap';

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

  context('contains headerComponent', () => {
    it('should render headerComponent', () => {
      const component = shallow(
        <CardContainer title="Open" headerComponent={<p>Edit</p>}>
          <h1>Hello World!</h1>
        </CardContainer>
      );

      assert.equal(component.find('h1').length, 1);
      assert.equal(component.find('p').length, 1);
    });
  });
});
