/* eslint-env mocha */
import React from 'react';
import assert from 'assert';
import sinon from 'sinon';
import { mount } from 'enzyme';

import { Paginator } from '../../src';

import Page from '../../src/components/Paginator/Page';
import Summary from '../../src/components/Paginator/Summary';

describe('<Paginator />', () => {
  describe('first shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('first').length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('first').length);
    });

    it('does not display when on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('first').length);
    });

    it('does not display when on the second page', () => {
      const wrapper = mount(<Paginator currentPage={2} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('first').length);
    });

    it('does display when not on the first page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(1, wrapper.ref('first').length);
    });
  });

  describe('previous shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('previous').length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('previous').length);
    });

    it('does not display when on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('previous').length);
    });

    it('does display when on the second page', () => {
      const wrapper = mount(<Paginator currentPage={2} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(1, wrapper.ref('previous').length);
    });

    it('does display when not on the first page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(1, wrapper.ref('previous').length);
    });
  });

  describe('next shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('next').length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('next').length);
    });

    it('does not display when on the last page', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('next').length);
    });

    it('does display when on the second to last page', () => {
      const wrapper = mount(<Paginator currentPage={12} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(1, wrapper.ref('next').length);
    });

    it('does display when on any other page', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(1, wrapper.ref('next').length);
    });
  });

  describe('last shortcut', () => {
    it('does not display if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('last').length);
    });

    it('does not display if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('last').length);
    });

    it('does not display when on the last page', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('last').length);
    });

    it('does not display when on the second to last page', () => {
      const wrapper = mount(<Paginator currentPage={12} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(0, wrapper.ref('last').length);
    });

    it('does display when on any other page', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={256} onClick={sinon.stub()} />);
      assert.equal(1, wrapper.ref('last').length);
    });
  });

  describe('pages', () => {
    it('displays correctly on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(5, pages.length);
      assert.deepEqual([1, 2, 3, 4, 5], pages.map(p => p.prop('page')));
    });

    it('displays correctly for middle pages', () => {
      const wrapper = mount(<Paginator currentPage={7} totalItems={256} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(5, pages.length);
      assert.deepEqual([5, 6, 7, 8, 9], pages.map(p => p.prop('page')));
    });

    it('displays correctly for the last page when there is an exact number of results', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={220} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(5, pages.length);
      assert.deepEqual([7, 8, 9, 10, 11], pages.map(p => p.prop('page')));
    });

    it('displays correctly for the last page when there is an inexact number of results', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(5, pages.length);
      assert.deepEqual([9, 10, 11, 12, 13], pages.map(p => p.prop('page')));
    });

    it('displays correctly if there are 0 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={0} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(0, pages.length);
    });

    it('displays correctly if there is 1 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={19} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(0, pages.length);
    });

    it('displays correctly if there are 2 pages', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={39} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(2, pages.length);
      assert.deepEqual([1, 2], pages.map(p => p.prop('page')));
    });

    it('displays correctly if there are 3 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={59} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(3, pages.length);
      assert.deepEqual([1, 2, 3], pages.map(p => p.prop('page')));
    });

    it('displays correctly if there are 4 page', () => {
      const wrapper = mount(<Paginator currentPage={3} totalItems={79} onClick={sinon.stub()} />);
      const pages = wrapper.find(Page);
      assert.equal(4, pages.length);
      assert.deepEqual([1, 2, 3, 4], pages.map(p => p.prop('page')));
    });
  });

  describe('summary', () => {
    it('displays correctly if there are no pages', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={0} onClick={sinon.stub()} />);
      assert.equal('Displaying: 0-0 of 0', wrapper.find(Summary).text());
    });

    it('displays correctly if there is only one page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={15} onClick={sinon.stub()} />);
      assert.equal('Displaying: 1-15 of 15', wrapper.find(Summary).text());
    });

    it('displays correctly on the first page', () => {
      const wrapper = mount(<Paginator currentPage={1} totalItems={256} onClick={sinon.stub()} />);
      assert.equal('Displaying: 1-20 of 256', wrapper.find(Summary).text());
    });

    it('displays correctly for middle pages', () => {
      const wrapper = mount(<Paginator currentPage={7} totalItems={256} onClick={sinon.stub()} />);
      assert.equal('Displaying: 121-140 of 256', wrapper.find(Summary).text());
    });

    it('displays correctly for the last page when there is an exact number of results', () => {
      const wrapper = mount(<Paginator currentPage={11} totalItems={220} onClick={sinon.stub()} />);
      assert.equal('Displaying: 201-220 of 220', wrapper.find(Summary).text());
    });

    it('displays correctly for the last page when there is an inexact number of results', () => {
      const wrapper = mount(<Paginator currentPage={13} totalItems={256} onClick={sinon.stub()} />);
      assert.equal('Displaying: 241-256 of 256', wrapper.find(Summary).text());
    });
  });

  describe('onclick', () => {
    let wrapper;
    let onClick;

    beforeEach(() => {
      onClick = sinon.stub();
      wrapper = mount(<Paginator currentPage={7} totalItems={256} onClick={onClick} />);
    })

    it('reports the click correctly when clicking on the "first" link', () => {
      wrapper.ref('first').find('a').simulate('click');
      sinon.assert.calledWith(onClick, 1);
    });

    it('reports the click correctly when clicking on the "previous" link', () => {
      wrapper.ref('previous').find('a').simulate('click');
      sinon.assert.calledWith(onClick, 6);
    });

    it('reports the click correctly when clicking on the "next" link', () => {
      wrapper.ref('next').find('a').simulate('click');
      sinon.assert.calledWith(onClick, 8);
    });

    it('reports the click correctly when clicking on the "last" link', () => {
      wrapper.ref('last').find('a').simulate('click');
      sinon.assert.calledWith(onClick, 13);
    });

    it('reports the click correctly when clicking on page links', () => {
      wrapper.ref('9').find('a').simulate('click');
      sinon.assert.calledWith(onClick, 9);
    });
  });
});
