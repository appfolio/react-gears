import assert from 'assert';
import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import Paginator from './Paginator';

describe('<Paginator />', () => {
  describe('first shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'first' }).length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'first' }).length);
    });

    it('does not display when on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'first' }).props().disabled, true);
    });

    it('does display when not on the first page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'first' }).props().disabled, false);
    });
  });

  describe('previous shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'previous' }).length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'previous' }).length);
    });

    it('does not display when on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'previous' }).props().disabled, true);
    });

    it('does display when not on the first page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'previous' }).props().disabled, false);
    });
  });

  describe('next shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'next' }).length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'next' }).length);
    });

    it('does not display when on the last page', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'next' }).props().disabled, true);
    });

    it('does display when on any other page', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'next' }).props().disabled, false);
    });
  });

  describe('last shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'last' }).length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.find({ name: 'last' }).length);
    });

    it('does not display when on the last page', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'last' }).props().disabled, true);
    });

    it('does display when on any other page', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(wrapper.find({ name: 'last' }).props().disabled, false);
    });
  });

  describe('pages', () => {
    it('displays correctly on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(5, pages.length);
      assert.deepEqual(
        [1, 2, 3, 4, 5],
        pages.map((p) => p.prop('page'))
      );
    });

    it('displays correctly for middle pages', () => {
      const wrapper = mount(<Paginator currentPage={7} totalItems={256} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(5, pages.length);
      assert.deepEqual(
        [5, 6, 7, 8, 9],
        pages.map((p) => p.prop('page'))
      );
    });

    it('displays correctly for the last page when there is an exact number of results', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={220} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(5, pages.length);
      assert.deepEqual(
        [7, 8, 9, 10, 11],
        pages.map((p) => p.prop('page'))
      );
    });

    it('displays correctly for the last page when there is an inexact number of results', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(5, pages.length);
      assert.deepEqual(
        [9, 10, 11, 12, 13],
        pages.map((p) => p.prop('page'))
      );
    });

    it('displays correctly if there are 0 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={0} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(0, pages.length);
    });

    it('displays correctly if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={19} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(0, pages.length);
    });

    it('displays correctly if there are 2 pages', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={39} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(2, pages.length);
      assert.deepEqual(
        [1, 2],
        pages.map((p) => p.prop('page'))
      );
    });

    it('displays correctly if there are 3 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={59} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(3, pages.length);
      assert.deepEqual(
        [1, 2, 3],
        pages.map((p) => p.prop('page'))
      );
    });

    it('displays correctly if there are 4 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={79} onClick={sinon.stub()} />);
      const pages = wrapper.find('Page');
      assert.equal(4, pages.length);
      assert.deepEqual(
        [1, 2, 3, 4],
        pages.map((p) => p.prop('page'))
      );
    });
  });

  describe('summary', () => {
    it('displays correctly if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal('Displaying: 0-0 of 0', wrapper.find('Summary').text());
    });

    it('displays correctly if there is only one page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal('Displaying: 1-15 of 15', wrapper.find('Summary').text());
    });

    it('displays correctly on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      assert.equal('Displaying: 1-20 of 256', wrapper.find('Summary').text());
    });

    it('displays correctly for middle pages', () => {
      const wrapper = mount(<Paginator currentPage={7} totalItems={256} onClick={sinon.stub()} />);
      assert.equal('Displaying: 121-140 of 256', wrapper.find('Summary').text());
    });

    it('displays correctly for the last page when there is an exact number of results', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={220} onClick={sinon.stub()} />);
      assert.equal('Displaying: 201-220 of 220', wrapper.find('Summary').text());
    });

    it('displays correctly for the last page when there is an inexact number of results', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      assert.equal('Displaying: 241-256 of 256', wrapper.find('Summary').text());
    });

    it('supports a custom summary', () => {
      const wrapper = mount(
        <Paginator
          currentPage={1}
          totalItems={0}
          onClick={sinon.stub()}
          summary={<h1 id="pagopago">HERE BE YE PAGES</h1>}
        />
      );
      assert(wrapper.find('#pagopago').exists());
      assert(!wrapper.find('Summary').exists());
    });
  });

  describe('onclick', () => {
    let wrapper;
    let onClick;

    beforeEach(() => {
      onClick = sinon.stub();
      wrapper = mount(<Paginator currentPage={7} totalItems={256} onClick={onClick} />);
    });

    it('reports the click correctly when clicking on the "first" link', () => {
      wrapper.find({ name: 'first' }).find('button').simulate('click');
      sinon.assert.calledWith(onClick, 1);
    });

    it('reports the click correctly when clicking on the "previous" link', () => {
      wrapper.find({ name: 'previous' }).find('button').simulate('click');
      sinon.assert.calledWith(onClick, 6);
    });

    it('reports the click correctly when clicking on the "next" link', () => {
      wrapper.find({ name: 'next' }).find('button').simulate('click');
      sinon.assert.calledWith(onClick, 8);
    });

    it('reports the click correctly when clicking on the "last" link', () => {
      wrapper.find({ name: 'last' }).find('button').simulate('click');
      sinon.assert.calledWith(onClick, 13);
    });

    it('reports the click correctly when clicking on page links', () => {
      wrapper
        .findWhere((node) => node.key() === '9')
        .find('button')
        .simulate('click');
      sinon.assert.calledWith(onClick, 9);
    });
  });
});
