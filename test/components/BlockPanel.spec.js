/* eslint-env mocha */

import React from 'react';
import assert from 'assert';
import { CardTitle, Icon } from '../../src';
import { shallow } from 'enzyme';


import BlockPanel from '../../src/components/BlockPanel.js';

describe('<BlockPanel />', () => {
  context('is not expandable', () => {
    it('should be open by default', () => {
      const component = shallow(
        <BlockPanel title="Open">
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
    });
  });

  context('is expandable', () => {
    it('should be open by default', () => {
      const component = shallow(
        <BlockPanel title="Open" expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
    });

    it('should be closed when false passed as prop', () => {
      const component = shallow(
        <BlockPanel title="Open" open={false} expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 0);
    });

    it('should be open when true passed as prop', () => {
      const component = shallow(
        <BlockPanel title="Open" open expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
    });

    it('should be open and close when clicked', () => {
      const component = shallow(
        <BlockPanel title="Open" expandable>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
      component.find(CardTitle).simulate('click');
      assert.equal(component.find('#hi').length, 0, 'inner block should not be visible');
      component.find(Icon).simulate('click');
      assert.equal(component.find('#hi').length, 1, 'inner block should be visible');
    });
  });

  context('contains headerComponent', () => {
    it('should render headerComponent', () => {
      const component = shallow(
        <BlockPanel title="Open" controls={<p id="edit">Edit</p>}>
          <h1 id="hi">Hello World!</h1>
        </BlockPanel>
      );

      assert.equal(component.find('#hi').length, 1);
      assert.equal(component.find('#edit').length, 1);
    });
  });
});
