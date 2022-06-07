import assert from 'assert';
import { render, screen } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Button from '../Button/Button';
import Steps from './Steps';

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
      assert.equal(component.find('span.text-body.js-step-label').text(), steps[2]);
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

    describe('clickable', () => {
      it('should render a button for each step', () => {
        const component = shallow(<Steps steps={steps} onStepClick={sinon.spy()} />);
        assert.equal(component.find(Button).length, steps.length);
      });

      it('should call onStepClick with the index when a step is clicked', () => {
        const onStepClick = sinon.spy();
        const component = shallow(<Steps steps={steps} onStepClick={onStepClick} />);
        const buttons = component.find(Button);

        buttons.at(2).simulate('click');
        sinon.assert.calledOnceWithExactly(onStepClick, 2);
      });
    });

    describe('granular', () => {
      it('should render correctly', () => {
        render(<Steps steps={steps} step={0} granular stepProgress={50} />);
        const listItemSteps = screen.getAllByRole('listitem');
        expect(listItemSteps.length).toBe(4);
        expect(listItemSteps[0]).toHaveClass('render-step-progress');
        expect(listItemSteps[1]).not.toHaveClass('render-prev-step-progress');
      });

      it('should render correctly for values > 50%', () => {
        render(<Steps steps={steps} step={1} granular stepProgress={60} />);
        const listItemSteps = screen.getAllByRole('listitem');
        expect(listItemSteps[1]).toHaveClass('render-step-progress');
        expect(listItemSteps[2]).toHaveClass('render-prev-step-progress');
      });

      it('should not render for vertical', () => {
        render(<Steps steps={steps} step={0} granular vertical stepProgress={60} />);
        const listItemSteps = screen.getAllByRole('listitem');
        expect(listItemSteps.length).toBe(4);
        listItemSteps.map((li) => expect(li).not.toHaveClass('render-step-progress'));
        listItemSteps.map((li) => expect(li).not.toHaveClass('render-prev-step-progress'));
      });

      it('should not render on the final step', () => {
        render(<Steps steps={steps} step={3} granular stepProgress={60} />);
        const listItemSteps = screen.getAllByRole('listitem');
        expect(listItemSteps.length).toBe(4);
        listItemSteps.map((li) => expect(li).not.toHaveClass('render-step-progress'));
        listItemSteps.map((li) => expect(li).not.toHaveClass('render-prev-step-progress'));
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
      assert.equal(component.find('span.text-body.js-step-label').text(), steps[2]);
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
