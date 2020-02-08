import React from 'react';
import assert from 'assert';
import { mount } from 'enzyme';

import { Steps } from '../../src';

const steps = ['Alpha', 'Bravo', 'Charlie', 'Delta'];

describe('<Steps />', () => {
  describe('horizontal', () => {
    it('should render correctly', () => {
      const component = mount(<Steps steps={steps} />);
      assert(component);
    });

    it('should show correct number of steps', () => {
      const component = mount(<Steps steps={steps} />);
      assert.equal(component.find('li').length, steps.length);
    });

    it('should activate the current step', () => {
      const component = mount(<Steps steps={steps} step={2} />);
      assert.equal(component.find('span.text-dark.js-step-label').text(), steps[2]);
    });

    it('should show complete correctly', () => {
      const component = mount(<Steps steps={steps} step={2} complete />);
      assert.equal(component.find('li.text-success').length, steps.length);
    });

    describe('collapse', () => {
      it('should default to showing responsive step labels', () => {
        const component = mount(<Steps steps={steps} />);
        assert.equal(component.find('span.js-step-label').length, steps.length + 1);
        assert.equal(component.find('span.d-none.d-sm-inline').length, steps.length);
        assert.equal(component.find('.d-sm-none span').length, 1);
      });

      it('should only show non-responsive step labels when collapse=false', () => {
        const component = mount(<Steps steps={steps} collapse={false} />);
        assert.equal(component.find('.js-step-label').length, steps.length);
      });

      it('should only show active step label when collapse=true', () => {
        const component = mount(<Steps steps={steps} collapse />);
        assert.equal(component.find('.js-step-label').length, 1);
      });
    });
  });

  describe('vertical', () => {
    it('should render correctly', () => {
      const component = mount(<Steps steps={steps} vertical />);
      assert(component);
    });

    it('should show correct number of steps', () => {
      const component = mount(<Steps steps={steps} vertical />);
      assert.equal(component.find('li').length, steps.length);
    });

    it('should activate the current step', () => {
      const component = mount(<Steps steps={steps} step={2} vertical />);
      assert.equal(component.find('span.text-dark.js-step-label').text(), steps[2]);
    });

    it('should show complete correctly', () => {
      const component = mount(<Steps steps={steps} step={2} complete vertical />);
      assert.equal(component.find('li.text-success').length, steps.length);
    });

    describe('collapse', () => {
      it('should default to showing responsive step labels', () => {
        const component = mount(<Steps steps={steps} vertical />);
        assert.equal(component.find('span.js-step-label.d-sm-inline').length, steps.length);
      });

      it('should only show non-responsive step labels when collapse=false', () => {
        const component = mount(<Steps steps={steps} collapse={false} vertical />);
        assert.equal(component.find('.js-step-label').length, steps.length);
      });

      it('should show all labels when collapse=true', () => {
        const component = mount(<Steps steps={steps} collapse vertical />);
        assert.equal(component.find('.js-step-label').length, steps.length);
      });
    });
  });
});
